export type Locale = "pl" | "en";

export const content = {
  pl: {
    nav: {
      tech: "Technologia",
      benefits: "Dlaczego my",
      process: "Proces",
      gallery: "Realizacje",
      about: "O nas",
      faq: "FAQ",
      contact: "Kontakt",
    },
    hero: {
      title: "Nowoczesne domy z drewna klejonego HBE.",
      subtitle:
        "Zbuduj swój azyl bliżej natury. Szybka budowa, ekologia i energooszczędność na lata. Drewno to materiał XXI wieku.",
      cta: "Poznaj naszą technologię",
    },
    tech: {
      heading: "Czym jest technologia HBE?",
      body: "Technologia HBE (House Building Element) to innowacyjna metoda budowlana oparta na ujednoliconych elementach z drewna klejonego warstwowo (glulam). Prefabrykowane z dużą precyzją bale pionowe łączone są ze sobą za pomocą podwójnego złącza typu pióro-wpust. System posiada również dodatkowy, specjalny kanał, który umożliwia łatwe i estetyczne rozprowadzenie instalacji elektrycznych.",
    },
    benefits: {
      heading: "Dlaczego warto?",
      items: [
        {
          title: "Szybkość budowy",
          body: "Krótki czas realizacji. Dzięki prefabrykowanym ścianom HBE nie musisz czekać na swój dom miesiącami. Błyskawiczny proces montażu sprawia, że budowa jest szybka, a jej koszty są bardzo konkurencyjne w stosunku do tradycyjnych, ciężkich technologii.",
        },
        {
          title: "Organiczny dom",
          body: "Bliżej natury. Budujemy prawdziwe „domy organiczne” oparte na naturalnych surowcach. Unikamy plastiku wszędzie tam, gdzie to możliwe, zastępując go np. oddychającym ociepleniem z wełny drzewnej.",
        },
        {
          title: "Energooszczędność",
          body: "Minimalne koszty eksploatacji. Nasze masywne ściany z litego drewna stanowią świetną izolację. Domy HBE idealnie współpracują z pompami ciepła i systemami niskotemperaturowego ogrzewania podłogowego, co ułatwia stworzenie standardu domu pasywnego.",
        },
      ],
    },
    process: {
      heading: "Jak budujemy Twój dom",
      subheading: "Od pierwszej rozmowy do gotowego domu — cały proces pod jednym dachem.",
      steps: [
        {
          title: "Projekt i planowanie",
          body: "Wspólnie ustalamy koncepcję, dostosowujemy gotowy projekt do Twojej działki i potrzeb lub przygotowujemy indywidualne rozwiązanie.",
        },
        {
          title: "Prefabrykacja",
          body: "Elementy HBE produkowane są w fabryce z milimetrową precyzją. Każdy bal jest ponumerowany i gotowy do montażu.",
        },
        {
          title: "Montaż",
          body: "Błyskawiczny montaż na miejscu — ściany stoją w kilka dni, dach zamyka się w tygodnie, nie miesiące.",
        },
        {
          title: "Wykończenie",
          body: "Instalacje, izolacja, wnętrza. Wchodzisz do gotowego domu z naturalnym, drewnianym charakterem.",
        },
      ],
    },
    gallery: {
      heading: "Realizacje",
      subheading: "Wybrane projekty domów HBE w różnych krajobrazach i konfiguracjach.",
      items: [
        { alt: "Drewniany dom wśród lasu", caption: "Dom w lesie" },
        { alt: "Nowoczesne wnętrze z drewna", caption: "Wnętrze z litego drewna" },
        { alt: "Minimalistyczny dom z drewna", caption: "Minimalistyczna bryła" },
      ],
    },
    about: {
      heading: "O nas",
      lead: "Drewno to nasza pasja.",
      body: [
        "Jesteśmy zespołem architektów, cieśli i konstruktorów, którzy wierzą, że dom powinien być przedłużeniem natury, a nie jej przeciwieństwem.",
        "Od lat pracujemy z drewnem klejonym, rozwijając technologię HBE tak, by budowa domu z drewna była szybka, precyzyjna i dostępna.",
        "Każdy projekt traktujemy indywidualnie — od koncepcji, przez prefabrykację, aż po klucze w dłoni.",
      ],
      values: [
        { label: "Jakość", body: "Certyfikowane drewno klejone i europejska precyzja wykonania." },
        { label: "Transparentność", body: "Jasny harmonogram i koszty bez niespodzianek." },
        { label: "Wsparcie", body: "Jesteśmy z Tobą od pierwszego szkicu do kluczy." },
      ],
    },
    faq: {
      heading: "Najczęstsze pytania",
      subheading: "Zebraliśmy odpowiedzi na to, o co pytacie nas najczęściej.",
      items: [
        {
          q: "Ile trwa budowa domu HBE?",
          a: "Stan surowy zamknięty montujemy zazwyczaj w 4–8 tygodni. Całość, łącznie z wykończeniem, zamykamy w 4–6 miesięcy — znacznie szybciej niż w technologii tradycyjnej.",
        },
        {
          q: "Czy dom z drewna jest trwały?",
          a: "Tak. Prawidłowo zaprojektowany i wykonany dom z drewna klejonego służy pokoleniom. Glulam ma wyższą wytrzymałość niż lita sosna i jest odporny na odkształcenia.",
        },
        {
          q: "Czy to dom całoroczny?",
          a: "Zdecydowanie tak. Masywne ściany z litego drewna w połączeniu z oddychającą izolacją dają świetne parametry cieplne — HBE łatwo osiąga standard domu pasywnego.",
        },
        {
          q: "Czy mogę sfinansować dom HBE kredytem hipotecznym?",
          a: "Tak. Domy HBE są pełnoprawnymi budynkami mieszkalnymi i kwalifikują się do standardowych kredytów hipotecznych w polskich bankach.",
        },
        {
          q: "Jak wygląda konserwacja drewnianego domu?",
          a: "Elewacja wymaga odświeżenia impregnatu co kilka lat. W środku drewno jest praktycznie bezobsługowe — starzeje się z gracją, nabierając charakteru.",
        },
        {
          q: "Czy muszę mieć gotowy projekt, czy pomożecie?",
          a: "Pomagamy na każdym etapie. Możemy zaadaptować jeden z naszych projektów lub zaprojektować dom od zera, pod Twoje potrzeby i działkę.",
        },
      ],
    },
    contact: {
      heading: "Zacznijmy projektować Twój drewniany azyl.",
      body: "Jesteśmy gotowi dostosować projekt do Twoich indywidualnych potrzeb oraz możliwości finansowych. Skontaktuj się z nami już dziś!",
      emailLabel: "Email",
      phoneLabel: "Telefon",
      email: "kontakt@[nazwafirmy].eu",
      phone: "+48 000 000 000",
      form: {
        name: "Imię",
        email: "Email",
        message: "Wiadomość",
        submit: "Wyślij wiadomość",
      },
    },
    footer: "Nowoczesne domy z drewna klejonego HBE.",
  },
  en: {
    nav: {
      tech: "Technology",
      benefits: "Why Us",
      process: "Process",
      gallery: "Projects",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      title: "Modern HBE Glulam Timber Houses.",
      subtitle:
        "Build your sanctuary closer to nature. Fast construction, ecology, and energy efficiency for years. Wood is the material of the 21st century.",
      cta: "Discover Our Technology",
    },
    tech: {
      heading: "What is HBE Technology?",
      body: "HBE (House Building Element) technology is an innovative construction method based on unified elements of glued laminated timber (glulam). Highly precise prefabricated vertical logs are connected using a double tongue-and-groove joint. The system also features an additional, special channel that allows for the easy and aesthetic distribution of electrical installations.",
    },
    benefits: {
      heading: "Why Choose Us?",
      items: [
        {
          title: "Speed of Construction",
          body: "Short construction time. Thanks to prefabricated HBE walls, you don't have to wait months for your home. The lightning-fast assembly process ensures quick construction and highly competitive costs compared to traditional, heavy technologies.",
        },
        {
          title: "Organic Home",
          body: "Closer to nature. We build true “organic homes” based on natural raw materials. We avoid plastics wherever possible, replacing them with breathable wood wool insulation.",
        },
        {
          title: "Energy Efficiency",
          body: "Minimal maintenance costs. Our massive solid wood walls provide excellent insulation. HBE houses perfectly integrate with heat pumps and low-temperature underfloor heating systems, making it easy to achieve a passive house standard.",
        },
      ],
    },
    process: {
      heading: "How We Build Your Home",
      subheading: "From the first conversation to a finished home — the entire process under one roof.",
      steps: [
        {
          title: "Design & Planning",
          body: "Together we establish the concept, adapt a ready project to your plot and needs, or prepare a custom solution.",
        },
        {
          title: "Prefabrication",
          body: "HBE elements are produced in the factory with millimetre precision. Every log is numbered and ready to assemble.",
        },
        {
          title: "Assembly",
          body: "Lightning-fast on-site assembly — walls stand in days, the roof closes in weeks, not months.",
        },
        {
          title: "Finishing",
          body: "Installations, insulation, interiors. You move into a finished home with a natural, wooden character.",
        },
      ],
    },
    gallery: {
      heading: "Our Projects",
      subheading: "Selected HBE homes across different landscapes and configurations.",
      items: [
        { alt: "Wooden house among the forest", caption: "House in the forest" },
        { alt: "Modern solid-wood interior", caption: "Solid wood interior" },
        { alt: "Minimalist wooden house", caption: "Minimalist volume" },
      ],
    },
    about: {
      heading: "About Us",
      lead: "Wood is our passion.",
      body: [
        "We are a team of architects, carpenters, and engineers who believe a home should be an extension of nature, not its opposite.",
        "For years we've been working with glued laminated timber, developing HBE technology to make building a wooden home fast, precise, and accessible.",
        "We treat every project individually — from concept, through prefabrication, to a turn-key delivery.",
      ],
      values: [
        { label: "Quality", body: "Certified glued laminated timber and European precision of execution." },
        { label: "Transparency", body: "Clear schedule and costs — without surprises." },
        { label: "Support", body: "We're with you from the first sketch to the keys." },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      subheading: "Answers to what we get asked the most.",
      items: [
        {
          q: "How long does an HBE home take to build?",
          a: "The weather-tight shell is typically assembled in 4–8 weeks. Full completion, including interior finishing, takes 4–6 months — significantly faster than traditional construction.",
        },
        {
          q: "Is a wooden home durable?",
          a: "Yes. A properly designed and built glued laminated timber home lasts for generations. Glulam is stronger than solid pine and resistant to deformation.",
        },
        {
          q: "Is it a year-round home?",
          a: "Absolutely. Massive solid-wood walls combined with breathable insulation create excellent thermal performance — HBE easily reaches passive house standards.",
        },
        {
          q: "Can I finance an HBE home with a mortgage?",
          a: "Yes. HBE homes are full-fledged residential buildings and qualify for standard mortgages at European banks.",
        },
        {
          q: "How do you maintain a wooden home?",
          a: "The façade needs a fresh coat of wood preservative every few years. Inside, wood is practically maintenance-free — it ages gracefully, gaining character.",
        },
        {
          q: "Do I need a ready design, or can you help?",
          a: "We help at every stage. We can adapt one of our projects or design a home from scratch, tailored to your needs and plot.",
        },
      ],
    },
    contact: {
      heading: "Let's start designing your wooden sanctuary.",
      body: "We are ready to adapt the project to your individual needs and financial capabilities. Contact us today!",
      emailLabel: "Email",
      phoneLabel: "Phone",
      email: "contact@[companyname].eu",
      phone: "+48 000 000 000",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send message",
      },
    },
    footer: "Modern HBE Glulam Timber Houses.",
  },
} as const;
