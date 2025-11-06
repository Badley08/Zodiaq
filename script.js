// Translation Manager
class TranslationManager {
    constructor() {
        this.currentLang = 'fr';
        this.translations = {};
        this.loadedLanguages = new Set();
    }

    async loadLanguage(lang) {
        if (this.loadedLanguages.has(lang)) {
            return this.translations[lang];
        }

        try {
            const fileName = lang === 'fr' ? 'francais.json' : 
                           lang === 'en' ? 'anglais.json' : 
                           'espagnol.json';
            
            const response = await fetch(fileName);
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}`);
            }
            
            const data = await response.json();
            this.translations[lang] = data;
            this.loadedLanguages.add(lang);
            return data;
        } catch (error) {
            console.error(`Error loading language ${lang}:`, error);
            // Fallback to French if loading fails
            if (lang !== 'fr') {
                return this.loadLanguage('fr');
            }
            return null;
        }
    }

    async setLanguage(lang) {
        await this.loadLanguage(lang);
        this.currentLang = lang;
        localStorage.setItem('zodiaq_lang', lang);
        return this.translations[lang];
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }
        
        return value || key;
    }

    t(key, replacements = {}) {
        let translation = this.getTranslation(key);
        
        // Handle replacements like {partner}, {score}
        if (typeof translation === 'string' && Object.keys(replacements).length > 0) {
            Object.keys(replacements).forEach(replaceKey => {
                translation = translation.replace(`{${replaceKey}}`, replacements[replaceKey]);
            });
        }
        
        return translation;
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    async initialize() {
        // Check for saved language preference
        const savedLang = localStorage.getItem('zodiaq_lang') || 'fr';
        await this.setLanguage(savedLang);
    }
}

// Create global instance
const translationManager = new TranslationManager();

// Helper function for easy access
function t(key, replacements) {
    return translationManager.t(key, replacements);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    await translationManager.initialize();
    console.log('Translation system initialized');
});

// Export for use in React components
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TranslationManager, translationManager, t };
}
