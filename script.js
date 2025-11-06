// Translations data embedded in script
const TRANSLATIONS = {
    fr: {
        nav: {
            home: "Accueil",
            astroCompatibility: "Compatibilité Astro",
            traitCompatibility: "Traits de caractère",
            discoverSign: "Découvrir son signe",
            matching: "Matching",
            contact: "Contact",
            language: "Langue"
        },
        home: {
            title: "Zodiaq",
            subtitle: "Découvrez les mystères de l'univers et explorez votre compatibilité astrologique avec une précision cosmique.",
            zodiacTitle: "Les Douze Signes du Zodiaque"
        },
        astroCompatibility: {
            title: "Compatibilité Astrologique",
            subtitle: "Choisissez votre signe et celui de votre partenaire pour découvrir votre compatibilité cosmique.",
            yourSign: "Votre Signe",
            partnerSign: "Signe de votre partenaire",
            calculate: "Calculer la compatibilité"
        },
        traitCompatibility: {
            title: "Compatibilité par Traits",
            subtitle: "Sélectionnez vos qualités et défauts, ainsi que ceux de votre partenaire, pour une analyse de compatibilité personnalisée.",
            yourTraits: "Vos Traits",
            partnerTraits: "Traits de votre partenaire",
            qualities: "Qualités",
            flaws: "Défauts",
            analyze: "Analyser la compatibilité"
        },
        discoverSign: {
            subtitle: "Découvrez votre signe astrologique en fonction de votre date de naissance et explorez en détail ses caractéristiques uniques.",
            whatIsYourSign: "Quel est votre signe ?",
            deepAnalysis: "Analyse Profonde",
            deepAnalysisDesc: "Comprenez vos forces, faiblesses et votre potentiel à travers une analyse détaillée de votre signe.",
            elements: "Éléments & Planètes",
            elementsDesc: "Découvrez comment les éléments (feu, terre, air, eau) et les planètes influencent votre personnalité.",
            compatibilities: "Compatibilités",
            compatibilitiesDesc: "Apprenez quels signes sont les plus compatibles avec le vôtre et pourquoi."
        },
        matching: {
            subtitle: "Découvrez vos meilleures compatibilités astrologiques et apprenez à naviguer dans vos relations.",
            bestMatches: "Meilleures compatibilités",
            worstMatches: "Moins bonnes compatibilités",
            guideTitle: "Guide de Compatibilité",
            fire: "Feu (Bélier, Lion, Sagittaire)",
            fireDesc: "Passion, énergie, créativité",
            earth: "Terre (Taureau, Vierge, Capricorne)",
            earthDesc: "Stabilité, pratique, fiabilité",
            air: "Air (Gémeaux, Balance, Verseau)",
            airDesc: "Communication, intellect, sociabilité",
            water: "Eau (Cancer, Scorpion, Poissons)",
            waterDesc: "Émotion, intuition, sensibilité"
        },
        signDetail: {
            backToDiscovery: "Retour à la découverte",
            description: "Description",
            qualities: "Qualités",
            flaws: "Défauts",
            elements: "Éléments",
            rulingPlanet: "Planète maîtresse",
            opposite: "Signe opposé",
            compatibleWith: "Compatible avec:",
            oppositeDesc: "Polarité complémentaire qui crée une dynamique d'apprentissage.",
            bestMatches: "Meilleures Compatibilités",
            excellentCompatibility: "Excellente compatibilité"
        },
        result: {
            back: "Retour",
            compatibility: "Compatibilité",
            analysis: "Analyse",
            share: "Partager",
            home: "Accueil",
            elements: "Éléments",
            rulingPlanet: "Planète maîtresse",
            relationshipAdvice: "Conseils pour la relation",
            emotional: "Émotionnelle",
            logical: "Logique",
            relational: "Relationnelle",
            overall: "Globale",
            strengths: "Points forts",
            areasOfAttention: "Points d'attention",
            shared: "partagé",
            complements: "complète",
            withoutCounterpart: "sans contrepartie positive",
            personalizedRecommendations: "Recommandations personnalisées"
        },
        compatibility: {
            exceptional: "Une compatibilité exceptionnelle ! Vos énergies cosmiques s'harmonisent parfaitement, créant une relation dynamique et épanouissante. Vous vous comprenez intuitivement et partagez des valeurs fondamentales similaires.",
            good: "Une bonne compatibilité astrologique. Bien que vous ayez des différences, elles peuvent être complémentaires. Avec communication et compréhension mutuelle, votre relation peut s'épanouir harmonieusement.",
            moderate: "Une compatibilité modérée. Votre relation nécessitera des efforts conscients pour surmonter les défis astrologiques. Les différences peuvent être source de croissance si abordées avec patience.",
            low: "Une compatibilité faible selon les influences cosmiques. Cela ne signifie pas que la relation est impossible, mais qu'elle demandera une grande maturité et une volonté de transcender les influences planétaires."
        },
        traitCompatibilityAnalysis: {
            exceptional: "Une compatibilité exceptionnelle sur le plan des traits de caractère ! Vos qualités se complètent parfaitement et vos défauts s'équilibrent harmonieusement. Cette relation a un fort potentiel d'épanouissement mutuel.",
            good: "Une bonne compatibilité émotionnelle et relationnelle. Vous partagez des valeurs importantes et vos différences peuvent être source de croissance si vous cultivez la communication et l'empathie.",
            moderate: "Une compatibilité modérée qui nécessitera des efforts conscients. Vos différences de tempérament peuvent créer des tensions, mais aussi des opportunités d'apprentissage si vous abordez les défis avec ouverture d'esprit.",
            low: "Une compatibilité faible sur le plan des traits de caractère. Cela ne signifie pas que la relation est vouée à l'échec, mais qu'elle demandera une grande maturité émotionnelle et une volonté de comprendre et d'accepter vos différences fondamentales."
        },
        footer: {
            description: "Explorez les mystères des étoiles et découvrez votre compatibilité cosmique.",
            navigation: "Navigation",
            resources: "Ressources",
            signGuide: "Guide des signes",
            detailedCompatibilities: "Compatibilités détaillées",
            advancedAstrology: "Astrologie avancée",
            rightsReserved: "Tous droits réservés."
        },
        share: {
            copied: "Lien copié dans le presse-papiers !"
        },
        advice: [
            "Communiquez ouvertement sur vos besoins émotionnels et vos attentes.",
            "Valorisez vos différences comme des complémentarités plutôt que des obstacles.",
            "Planifiez des activités qui nourrissent votre connexion et respectent vos énergies.",
            "Apprenez à reconnaître les signaux d'alerte de votre signe et ceux de votre partenaire."
        ],
        recommendations: [
            "Pratiquez l'écoute active et la validation émotionnelle pour renforcer votre connexion.",
            "Créez des rituels relationnels qui respectent les besoins de chacun.",
            "Développez la compassion pour les défauts de l'autre, en les voyant comme des vulnérabilités.",
            "Célébrez vos différences comme des opportunités d'apprentissage mutuel."
        ]
    },
    en: {
        nav: {
            home: "Home",
            astroCompatibility: "Astro Compatibility",
            traitCompatibility: "Personality Traits",
            discoverSign: "Discover Your Sign",
            matching: "Matching",
            contact: "Contact",
            language: "Language"
        },
        home: {
            title: "Zodiaq",
            subtitle: "Discover the mysteries of the universe and explore your astrological compatibility with cosmic precision.",
            zodiacTitle: "The Twelve Zodiac Signs"
        },
        astroCompatibility: {
            title: "Astrological Compatibility",
            subtitle: "Choose your sign and your partner's sign to discover your cosmic compatibility.",
            yourSign: "Your Sign",
            partnerSign: "Partner's Sign",
            calculate: "Calculate Compatibility"
        },
        traitCompatibility: {
            title: "Trait Compatibility",
            subtitle: "Select your qualities and flaws, as well as those of your partner, for a personalized compatibility analysis.",
            yourTraits: "Your Traits",
            partnerTraits: "Partner's Traits",
            qualities: "Qualities",
            flaws: "Flaws",
            analyze: "Analyze Compatibility"
        },
        discoverSign: {
            subtitle: "Discover your astrological sign based on your birth date and explore its unique characteristics in detail.",
            whatIsYourSign: "What is your sign?",
            deepAnalysis: "Deep Analysis",
            deepAnalysisDesc: "Understand your strengths, weaknesses, and potential through a detailed analysis of your sign.",
            elements: "Elements & Planets",
            elementsDesc: "Discover how elements (fire, earth, air, water) and planets influence your personality.",
            compatibilities: "Compatibilities",
            compatibilitiesDesc: "Learn which signs are most compatible with yours and why."
        },
        matching: {
            subtitle: "Discover your best astrological compatibilities and learn how to navigate your relationships.",
            bestMatches: "Best Matches",
            worstMatches: "Worst Matches",
            guideTitle: "Compatibility Guide",
            fire: "Fire (Aries, Leo, Sagittarius)",
            fireDesc: "Passion, energy, creativity",
            earth: "Earth (Taurus, Virgo, Capricorn)",
            earthDesc: "Stability, practicality, reliability",
            air: "Air (Gemini, Libra, Aquarius)",
            airDesc: "Communication, intellect, sociability",
            water: "Water (Cancer, Scorpio, Pisces)",
            waterDesc: "Emotion, intuition, sensitivity"
        },
        signDetail: {
            backToDiscovery: "Back to discovery",
            description: "Description",
            qualities: "Qualities",
            flaws: "Flaws",
            elements: "Elements",
            rulingPlanet: "Ruling Planet",
            opposite: "Opposite Sign",
            compatibleWith: "Compatible with:",
            oppositeDesc: "Complementary polarity that creates a learning dynamic.",
            bestMatches: "Best Matches",
            excellentCompatibility: "Excellent compatibility"
        },
        result: {
            back: "Back",
            compatibility: "Compatibility",
            analysis: "Analysis",
            share: "Share",
            home: "Home",
            elements: "Elements",
            rulingPlanet: "Ruling Planet",
            relationshipAdvice: "Relationship Advice",
            emotional: "Emotional",
            logical: "Logical",
            relational: "Relational",
            overall: "Overall",
            strengths: "Strengths",
            areasOfAttention: "Areas of Attention",
            shared: "shared",
            complements: "complements",
            withoutCounterpart: "without positive counterpart",
            personalizedRecommendations: "Personalized Recommendations"
        },
        compatibility: {
            exceptional: "Exceptional compatibility! Your cosmic energies harmonize perfectly, creating a dynamic and fulfilling relationship. You intuitively understand each other and share similar fundamental values.",
            good: "Good astrological compatibility. Although you have differences, they can be complementary. With communication and mutual understanding, your relationship can flourish harmoniously.",
            moderate: "Moderate compatibility. Your relationship will require conscious effort to overcome astrological challenges. Differences can be a source of growth if approached with patience.",
            low: "Low compatibility according to cosmic influences. This does not mean the relationship is impossible, but it will require great maturity and a willingness to transcend planetary influences."
        },
        traitCompatibilityAnalysis: {
            exceptional: "Exceptional compatibility in terms of personality traits! Your qualities complement each other perfectly and your flaws balance harmoniously. This relationship has strong potential for mutual fulfillment.",
            good: "Good emotional and relational compatibility. You share important values and your differences can be a source of growth if you cultivate communication and empathy.",
            moderate: "Moderate compatibility that will require conscious effort. Your temperamental differences may create tensions, but also learning opportunities if you approach challenges with an open mind.",
            low: "Low compatibility in terms of personality traits. This does not mean the relationship is doomed to fail, but it will require great emotional maturity and a willingness to understand and accept your fundamental differences."
        },
        footer: {
            description: "Explore the mysteries of the stars and discover your cosmic compatibility.",
            navigation: "Navigation",
            resources: "Resources",
            signGuide: "Sign Guide",
            detailedCompatibilities: "Detailed Compatibilities",
            advancedAstrology: "Advanced Astrology",
            rightsReserved: "All rights reserved."
        },
        share: {
            copied: "Link copied to clipboard!"
        },
        advice: [
            "Communicate openly about your emotional needs and expectations.",
            "Value your differences as complementary rather than obstacles.",
            "Plan activities that nurture your connection and respect your energies.",
            "Learn to recognize warning signs from your sign and your partner's."
        ],
        recommendations: [
            "Practice active listening and emotional validation to strengthen your connection.",
            "Create relationship rituals that respect each other's needs.",
            "Develop compassion for your partner's flaws, seeing them as vulnerabilities.",
            "Celebrate your differences as opportunities for mutual learning."
        ]
    },
    es: {
        nav: {
            home: "Inicio",
            astroCompatibility: "Compatibilidad Astrológica",
            traitCompatibility: "Rasgos de Personalidad",
            discoverSign: "Descubre tu Signo",
            matching: "Compatibilidad",
            contact: "Contacto",
            language: "Idioma"
        },
        home: {
            title: "Zodiaq",
            subtitle: "Descubre los misterios del universo y explora tu compatibilidad astrológica con precisión cósmica.",
            zodiacTitle: "Los Doce Signos del Zodiaco"
        },
        astroCompatibility: {
            title: "Compatibilidad Astrológica",
            subtitle: "Elija su signo y el de su pareja para descubrir su compatibilidad cósmica.",
            yourSign: "Tu Signo",
            partnerSign: "Signo de tu Pareja",
            calculate: "Calcular Compatibilidad"
        },
        traitCompatibility: {
            title: "Compatibilidad por Rasgos",
            subtitle: "Seleccione sus cualidades y defectos, así como los de su pareja, para un análisis de compatibilidad personalizado.",
            yourTraits: "Tus Rasgos",
            partnerTraits: "Rasgos de tu Pareja",
            qualities: "Cualidades",
            flaws: "Defectos",
            analyze: "Analizar Compatibilidad"
        },
        discoverSign: {
            subtitle: "Descubra su signo astrológico según su fecha de nacimiento y explore sus características únicas en detalle.",
            whatIsYourSign: "¿Cuál es tu signo?",
            deepAnalysis: "Análisis Profundo",
            deepAnalysisDesc: "Comprenda sus fortalezas, debilidades y potencial a través de un análisis detallado de su signo.",
            elements: "Elementos y Planetas",
            elementsDesc: "Descubra cómo los elementos (fuego, tierra, aire, agua) y los planetas influyen en su personalidad.",
            compatibilities: "Compatibilidades",
            compatibilitiesDesc: "Aprenda qué signos son más compatibles con el suyo y por qué."
        },
        matching: {
            subtitle: "Descubra sus mejores compatibilidades astrológicas y aprenda a navegar en sus relaciones.",
            bestMatches: "Mejores Compatibilidades",
            worstMatches: "Peores Compatibilidades",
            guideTitle: "Guía de Compatibilidad",
            fire: "Fuego (Aries, Leo, Sagitario)",
            fireDesc: "Pasión, energía, creatividad",
            earth: "Tierra (Tauro, Virgo, Capricornio)",
            earthDesc: "Estabilidad, practicidad, confiabilidad",
            air: "Aire (Géminis, Libra, Acuario)",
            airDesc: "Comunicación, intelecto, sociabilidad",
            water: "Agua (Cáncer, Escorpio, Piscis)",
            waterDesc: "Emoción, intuición, sensibilidad"
        },
        signDetail: {
            backToDiscovery: "Volver al descubrimiento",
            description: "Descripción",
            qualities: "Cualidades",
            flaws: "Defectos",
            elements: "Elementos",
            rulingPlanet: "Planeta Regente",
            opposite: "Signo Opuesto",
            compatibleWith: "Compatible con:",
            oppositeDesc: "Polaridad complementaria que crea una dinámica de aprendizaje.",
            bestMatches: "Mejores Compatibilidades",
            excellentCompatibility: "Excelente compatibilidad"
        },
        result: {
            back: "Volver",
            compatibility: "Compatibilidad",
            analysis: "Análisis",
            share: "Compartir",
            home: "Inicio",
            elements: "Elementos",
            rulingPlanet: "Planeta Regente",
            relationshipAdvice: "Consejos para la Relación",
            emotional: "Emocional",
            logical: "Lógico",
            relational: "Relacional",
            overall: "General",
            strengths: "Puntos Fuertes",
            areasOfAttention: "Puntos de Atención",
            shared: "compartido",
            complements: "complementa",
            withoutCounterpart: "sin contrapartida positiva",
            personalizedRecommendations: "Recomendaciones Personalizadas"
        },
        compatibility: {
            exceptional: "¡Compatibilidad excepcional! Tus energías cósmicas se armonizan perfectamente, creando una relación dinámica y satisfactoria. Se entienden intuitivamente y comparten valores fundamentales similares.",
            good: "Buena compatibilidad astrológica. Aunque tienen diferencias, estas pueden ser complementarias. Con comunicación y comprensión mutua, su relación puede florecer armoniosamente.",
            moderate: "Compatibilidad moderada. Su relación requerirá un esfuerzo consciente para superar los desafíos astrológicos. Las diferencias pueden ser una fuente de crecimiento si se abordan con paciencia.",
            low: "Baja compatibilidad según las influencias cósmicas. Esto no significa que la relación sea imposible, pero requerirá gran madurez y voluntad para trascender las influencias planetarias."
        },
        traitCompatibilityAnalysis: {
            exceptional: "¡Compatibilidad excepcional en términos de rasgos de personalidad! Sus cualidades se complementan perfectamente y sus defectos se equilibran armoniosamente. Esta relación tiene un gran potencial de realización mutua.",
            good: "Buena compatibilidad emocional y relacional. Comparten valores importantes y sus diferencias pueden ser una fuente de crecimiento si cultivan la comunicación y la empatía.",
            moderate: "Compatibilidad moderada que requerirá esfuerzo consciente. Sus diferencias de temperamento pueden crear tensiones, pero también oportunidades de aprendizaje si abordan los desafíos con mente abierta.",
            low: "Baja compatibilidad en términos de rasgos de personalidad. Esto no significa que la relación esté condenada al fracaso, pero requerirá una gran madurez emocional y voluntad para comprender y aceptar sus diferencias fundamentales."
        },
        footer: {
            description: "Explore los misterios de las estrellas y descubra su compatibilidad cósmica.",
            navigation: "Navegación",
            resources: "Recursos",
            signGuide: "Guía de Signos",
            detailedCompatibilities: "Compatibilidades Detalladas",
            advancedAstrology: "Astrología Avanzada",
            rightsReserved: "Todos los derechos reservados."
        },
        share: {
            copied: "¡Enlace copiado al portapapeles!"
        },
        advice: [
            "Comunique abiertamente sobre sus necesidades emocionales y expectativas.",
            "Valore sus diferencias como complementarias en lugar de obstáculos.",
            "Planee actividades que nutran su conexión y respeten sus energías.",
            "Aprenda a reconocer las señales de alerta de su signo y las de su pareja."
        ],
        recommendations: [
            "Practique la escucha activa y la validación emocional para fortalecer su conexión.",
            "Cree rituales relacionales que respeten las necesidades de cada uno.",
            "Desarrolle compasión por los defectos del otro, viéndolos como vulnerabilidades.",
            "Celebre sus diferencias como oportunidades de aprendizaje mutuo."
        ]
    }
};

// Helper function to get nested translation
function getTranslation(translations, key) {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// Export for global use
if (typeof window !== 'undefined') {
    window.TRANSLATIONS = TRANSLATIONS;
    window.getTranslation = getTranslation;
}
