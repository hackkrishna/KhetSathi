// This file contains all the JavaScript logic for the Khetsathi website.

document.addEventListener('DOMContentLoaded', () => {

  const STORAGE_KEY = "khetsathi_lang";
  const I18N = {
    en: {
      tagline: "Smart Farmer's Companion",
      nav: { home: "Home", weather: "Weather", prices: "Prices", planner: "Planner", about: "About" },
      settings: "Settings",
      "settings.title": "Settings",
      "settings.language": "Language",
      "settings.langNote": "Your preference will be saved for next time.",
      "settings.tip": "Tip: Changing the language instantly updates all text.",
      "settings.save": "Save",
      badge: "Smart Farming with AI Advice",
      hero: {
        title1: "Your fields,",
        title2: "Your best yield.",
        desc: "Boost your harvest with hyper-local weather, market prices, and simple, actionable advice.",
        ctaPrimary: "My Season Plan",
        ctaSecondary: "See Today's Weather",
        point1: "Local Data",
        point2: "Crop-Friendly Advice",
        point3: "Better Market Timing"
      },
      widget: { title: "Today's View", sample: "Demo Data", weather: "Temp", humidity: "Humidity", wind: "Wind", market: "Market", tip: "Tip", tipText: "Irrigate in the evening to reduce water evaporation." },
      weather: {
        title: "Weather",
        inputPlaceholder: "Enter Village or City",
        check: "Check",
        today: "Today",
        temp: "Temp",
        hum: "Humidity",
        wind: "Wind",
        irrigation: "Irrigation Advice",
        irrigationTip: "Water in the morning or evening. Avoid if rain is expected.",
        refresh: "New Tip",
        forecast: "Next 3 Days"
      },
      prices: { title: "Market Prices", update: "Update", local: "Local Mandi", avg: "State Average", best: "Best Nearby", note: "Demo prices for comparison." },
      crops: { wheat: "Wheat", rice: "Rice", maize: "Maize" },
      planner: {
        title: "Quick Plan",
        areaPh: "Area (acres)",
        kharif: "Kharif",
        rabi: "Rabi",
        generate: "Generate",
        resultTitle: "Proposed Steps"
      },
      about: { title: "About Khetsathi", desc: "Khetsathi helps farmers make modern and smart decisions. This demo brings together weather, prices, and planning." },
      footer: { copy: "© 2025 Khetsathi. All rights reserved.", made: "Made with love for farmers.", learn: "Learn More", follow: "Follow Us", feedback: "Feedback", feedbackPh: "Share your feedback...", submit: "Send", feedbackThanks: "Thanks for your feedback!", feedbackEmpty: "Please enter some feedback first." },
      subscription: {
        badgeInactive: "Offline: Disabled",
        badgeActive: "Offline: Enabled",
        title: "Offline Access",
        desc: "Use the dashboard offline. After the first load, it will work without an internet connection.",
        priceLabel: "Price:",
        perYear: "per year",
        note: "This is a demo checkout. No actual payment will be made.",
        status: { off: "Inactive", on: "Active" },
        subscribe: "Subscribe for ₹199",
        cancel: "Cancel",
        test: "Offline Test",
        toastOn: "Offline access enabled!",
        toastOff: "Offline access disabled.",
        toastTest: "Will attempt to load cached data when offline."
      }
    },
    hi: {
      tagline: "स्मार्ट किसान साथी",
      nav: { home: "होम", weather: "मौसम", prices: "बाजार", planner: "योजना", about: "बारे में" },
      settings: "सेटिंग्स",
      "settings.title": "सेटिंग्स",
      "settings.language": "भाषा",
      "settings.langNote": "आपकी पसंद अगली बार के लिए सहेजी जाएगी।",
      "settings.tip": "टिप: भाषा बदलते ही सारा टेक्स्ट तुरंत बदल जाएगा।",
      "settings.save": "सेव करें",
      badge: "एआई सुझाव के साथ स्मार्ट खेती",
      hero: {
        title1: "आपके खेत,",
        title2: "आपकी बेहतरीन फसल।",
        desc: "स्थानीय मौसम, मंडी भाव और सरल सलाह से उपज बढ़ाएं।",
        ctaPrimary: "मेरी सीज़न योजना",
        ctaSecondary: "आज का मौसम देखें",
        point1: "स्थानीय डेटा",
        point2: "फसल-हितैषी सलाह",
        point3: "बेहतर बाजार समय"
      },
      widget: { title: "आज का दृश्य", sample: "डेमो डेटा", weather: "तापमान", humidity: "आर्द्रता", wind: "हवा", market: "बाजार", tip: "टिप", tipText: "वाष्पीकरण कम करने के लिए शाम को सिंचाई करें।" },
      weather: {
        title: "मौसम",
        inputPlaceholder: "गाँव या शहर दर्ज करें",
        check: "जाँच करें",
        today: "आज",
        temp: "तापमान",
        hum: "आर्द्रता",
        wind: "हवा",
        irrigation: "सिंचाई सलाह",
        irrigationTip: "सुबह या शाम को पानी दें। बारिश हो तो बचें।",
        refresh: "नया टिप",
        forecast: "अगले 3 दिन"
      },
      prices: { title: "मंडी भाव", update: "अपडेट", local: "स्थानीय मंडी", avg: "राज्य औसत", best: "सबसे अच्छा पास", note: "संदर्भ के लिए डेमो दरें।" },
      crops: { wheat: "गेहूं", rice: "चावल", maize: "मक्का" },
      planner: {
        title: "त्वरित योजना",
        areaPh: "क्षेत्र (एकड़)",
        kharif: "खरीफ",
        rabi: "रबी",
        generate: "बनाएं",
        resultTitle: "सुझाए गए कदम"
      },
      about: { title: "खेतसाथी के बारे में", desc: "खेतसाथी किसानों को आधुनिक और सरल निर्णय लेने में मदद करता है। इस डेमो में मौसम, भाव और योजना शामिल है।" },
      footer: { copy: "© 2025 खेतसाथी। सभी अधिकार सुरक्षित।", made: "किसानों के लिए प्यार से बनाया गया।", learn: "और जानें", follow: "हमें फॉलो करें", feedback: "सुझाव", feedbackPh: "अपनी राय साझा करें...", submit: "भेजें", feedbackThanks: "आपके सुझाव के लिए धन्यवाद!", feedbackEmpty: "कृपया पहले कुछ इनपुट करें।" },
      subscription: {
        badgeInactive: "ऑफ़लाइन: बंद",
        badgeActive: "ऑफ़लाइन: चालू",
        title: "ऑफ़लाइन पहुँच",
        desc: "डैशबोर्ड को ऑफ़लाइन उपयोग करें। पहली बार लोड होने के बाद यह इंटरनेट के बिना काम करेगा।",
        priceLabel: "मूल्य:",
        perYear: "प्रति वर्ष",
        note: "यह एक डेमो चेकआउट है। कोई वास्तविक भुगतान नहीं।",
        status: { off: "निष्क्रिय", on: "सक्रिय" },
        subscribe: "₹199 का सदस्यता लें",
        cancel: "रद्द करें",
        test: "ऑफ़लाइन परीक्षण",
        toastOn: "ऑफ़लाइन पहुँच सक्षम!",
        toastOff: "ऑफ़लाइन पहुँच अक्षम।",
        toastTest: "ऑफ़लाइन होने पर कैश डेटा लोड करने का प्रयास करेंगे।"
      }
    },
    or: {
      tagline: "ସ୍ମାର୍ଟ ଚାଷୀ ସାଥୀ",
      nav: { home: "ମୂଖ୍ୟ", weather: "ଆବହାଓଆ", prices: "ବଜାର", planner: "ଯୋଜନା", about: "ସମ୍ବନ୍ଧରେ" },
      settings: "ସେଟିଙ୍ଗସ୍",
      "settings.title": "ସେଟିଙ୍ଗସ୍",
      "settings.language": "ଭାଷା",
      "settings.langNote": "ଆପଣଙ୍କ ପସନ୍ଦ ପରବର୍ତ୍ତୀ ବାର ପାଇଁ ସୁରକ୍ଷିତ ରହିବ।",
      "settings.tip": "ଟିପ୍: ଭାଷା ବଦଳାଇଲେ ସମସ୍ତ ଟେକ୍ସ୍ଟ ଖଣ୍ଡେ ପରିବର୍ତ୍ତନ ହେବ।",
      "settings.save": "ସେଭ୍ କରନ୍ତୁ",
      badge: "ଏଆଇ ସୁପାରିଶ ସହ ଚତୁର ଚାଷ",
      hero: {
        title1: "ଆପଣଙ୍କ ଖେତ,",
        title2: "ଆପଣଙ୍କ ସର୍ବୋତ୍କୃଷ୍ଟ ଉତ୍ପାଦନ।",
        desc: "ସ୍ଥାନୀୟ ଆବହାଓଆ, ମଣ୍ଡି ଦର ଓ ସରଳ ପରାମର୍ଶରୁ ଉତ୍ପାଦନ ବଢ଼ାନ୍ତୁ।",
        ctaPrimary: "ମୋ ଋତୁ ଯୋଜନା",
        ctaSecondary: "ଆଜିର ଆବହାଓଆ ଦେଖନ୍ତୁ",
        point1: "ସ୍ଥାନୀୟ ତଥ୍ୟ",
        point2: "ଫସଲ ହିତେଷୀ ପରାମର୍ଶ",
        point3: "ଭଲ ବଜାର ସମୟ"
      },
      widget: { title: "ଆଜିର ଦୃଶ୍ୟ", sample: "ଡେମୋ ଡାଟା", weather: "ତାପ", humidity: "ଆର୍ଦ୍ରତା", wind: "ପବନ", market: "ବଜାର", tip: "ସୁଚନା", tipText: "ବାସ୍ପୀଭବନ କମିବାକୁ ସନ୍ଧ୍ୟାରେ ପାନି ଦିଅନ୍ତୁ।" },
      weather: {
        title: "ଆବହାଓଆ",
        inputPlaceholder: "ଗାଁ ବା ସହର ଲେଖନ୍ତୁ",
        check: "ଯାଞ୍ଚ କରନ୍ତୁ",
        today: "ଆଜି",
        temp: "ତାପମାତ୍ରା",
        hum: "ଆର୍ଦ୍ରତା",
        wind: "ପବନ",
        irrigation: "ସିଞ୍ଚାଇ ପରାମର୍ଶ",
        irrigationTip: "ସକାଳ ବା ସନ୍ଧ୍ୟାରେ ପାନି ଦିଅନ୍ତୁ। ବର୍ଷା ହେଲେ ଏଡ଼ାନ୍ତୁ।",
        refresh: "ନୂତନ ସୁଚନା",
        forecast: "ଆଗାମୀ 3 ଦିନ"
      },
      prices: { title: "ବଜାର ଦର", update: "ଅପଡେଟ୍", local: "ସ୍ଥାନୀୟ ମଣ୍ଡି", avg: "ରାଜ୍ୟ ହାରାହାରି", best: "ସର୍ବୋତ୍କୃଷ୍ଟ ନିକଟରେ", note: "ତୁଳନା ପାଇଁ ଡେମୋ ଦର" },
      crops: { wheat: "ଗହମ", rice: "ଚାଉଳ", maize: "ମକା" },
      planner: {
        title: "ତ୍ୱରିତ ଯୋଜନା",
        areaPh: "କ୍ଷେତ୍ରଫଳ (ଏକର)",
        kharif: "ଖରିଫ",
        rabi: "ରବି",
        generate: "ତିଆରି କରନ୍ତୁ",
        resultTitle: "ପ୍ରସ୍ତାବିତ ପଦକ୍ରମ"
      },
      about: { title: "ଖେତସାଥି ସମ୍ବନ୍ଧରେ", desc: "ଖେତସାଥି ଚାଷିଙ୍କୁ ଆଧୁନିକ ଏବଂ ସରଳ ନିଷ୍ପତ୍ତିରେ ସହାଯ୍ୟ କରେ। ଏହି ଡେମୋରେ ଆବହାଓଆ, ଦର ଓ ଯୋଜନା ମିଳିଥାଏ।" },
      footer: { copy: "© 2025 ଖେତସାଥି. ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।", made: "ଚାଷିମାନଙ୍କ ପାଇଁ ଭଲ ପ୍ରେମରେ।", learn: "ଅଧିକ ଜାଣନ୍ତୁ", follow: "ଆମକୁ ଫଲୋ କରନ୍ତୁ", feedback: "ଫିଡ୍‌ବ୍ୟାକ", feedbackPh: "ଆପଣଙ୍କ ମତାମତ ଲେଖନ୍ତୁ...", submit: "ପଠାନ୍ତୁ", feedbackThanks: "ଧନ୍ୟବାଦ!", feedbackEmpty: "ଦୟାକରି ପ୍ରଥମେ କିଛି ଲେଖନ୍ତୁ।" },
      subscription: {
        badgeInactive: "ଅଫଲାଇନ୍: ବନ୍ଦ",
        badgeActive: "ଅଫଲାଇନ୍: ଚାଲୁ",
        title: "ଅଫଲାଇନ୍ ଆକ୍ସେସ୍",
        desc: "ଡ୍ୟାଶବୋର୍ଡକୁ ଅଫଲାଇନ୍ ଭାବରେ ବ୍ୟବହାର କରନ୍ତୁ। ପ୍ରଥମ ଲୋଡ୍ ପରେ ଇଣ୍ଟରନେଟ୍ ବିନା କାମ କରିବ।",
        priceLabel: "ମୂଲ୍ୟ:",
        perYear: "ପ୍ରତି ବର୍ଷ",
        note: "ଏହା ଡେମୋ ଚେକଅଉଟ୍ ଅଟେ। କୌଣସି ବାସ୍ତବ ପେମେଣ୍ଟ ହୁଅନି।",
        status: { off: "ସକ୍ରିୟ ନୁହେଁ", on: "ସକ୍ରିୟ" },
        subscribe: "₹199 ସବସ୍କ୍ରାଇବ କରନ୍ତୁ",
        cancel: "ରଦ୍ଦ କରନ୍ତୁ",
        test: "ଅଫଲାଇନ୍ ପରୀକ୍ଷା",
        toastOn: "ଅଫଲାଇନ୍ ଆକ୍ସେସ୍ ସଚଳ!",
        toastOff: "ଅଫଲାଇନ୍ ଆକ୍ସେସ୍ ନିଷ୍କ୍ରିୟ।",
        toastTest: "ଅଫଲାଇନ୍ ହେଲେ କ୍ୟାଶ୍ ଡାଟା ଲୋଡ୍ କରିବାକୁ ଚେଷ୍ଟା କରିବୁ।"
      }
    },
    pa: {
      tagline: "ਸਮਾਰਟ ਖੇਤੀ ਸਾਥੀ",
      nav: { home: "ਹੋਮ", weather: "ਮੌਸਮ", prices: "ਬਾਜ਼ਾਰ", planner: "ਯੋਜਨਾ", about: "ਬਾਰੇ" },
      settings: "ਸੈਟਿੰਗਜ਼",
      "settings.title": "ਸੈਟਿੰਗਜ਼",
      "settings.language": "ਭਾਸ਼ਾ",
      "settings.langNote": "ਤੁਹਾਡੀ ਚੋਣ ਅਗਲੀ ਵਾਰ ਲਈ ਸੁਰੱਖਿਅਤ ਹੈ।",
      "settings.tip": "ਟਿੱਪ: ਭਾਸ਼ਾ ਬਦਲਦੇ ਹੀ ਸਾਰਾ ਪਾਠ ਤੁਰੰਤ ਬਦਲ ਜਾਵੇਗਾ।",
      "settings.save": "ਸੇਵ ਕਰੋ",
      badge: "ਏਆਈ ਸੁਝਾਅ ਨਾਲ ਸਮਾਰਟ ਖੇਤੀ",
      hero: {
        title1: "ਤੁਹਾਡੇ ਖੇਤ,",
        title2: "ਤੁਹਾਡੀ ਵਧੀਆ ਫ਼ਸਲ।",
        desc: "ਸਥਾਨਕ ਮੌਸਮ, ਮੰਡੀ ਭਾਵ ਅਤੇ ਸਾਦੇ ਸਲਾਹ ਨਾਲ ਉਪਜ ਵਧਾਓ।",
        ctaPrimary: "ਮੇਰਾ ਸੀਜ਼ਨ ਯੋਜਨਾ",
        ctaSecondary: "ਅੱਜ ਦਾ ਮੌਸਮ ਵੇਖੋ",
        point1: "ਸਥਾਨਕ ਜਾਣਕਾਰੀ",
        point2: "ਫਸਲ-ਦੋਸਤ ਸੁਝਾਅ",
        point3: "ਵਧੀਆ ਬਾਜ਼ਾਰ ਸਮਾਂ"
      },
      widget: { title: "ਅੱਜ ਦੀ ਝਲਕ", sample: "ਡੈਮੋ ਡਾਟਾ", weather: "ਤਾਪ", humidity: "ਨਮੀ", wind: "ਹਵਾ", market: "ਬਾਜ਼ਾਰ", tip: "ਟਿੱਪ", tipText: "ਵਾਸਪੀਕਰਨ ਘਟਾਉਣ ਲਈ ਸ਼ਾਮ ਨੂੰ ਸਿੰਚਾਈ ਕਰੋ।" },
      weather: {
        title: "ਮੌਸਮ",
        inputPlaceholder: "ਪਿੰਡ ਜਾਂ ਸ਼ਹਿਰ ਦਰਜ ਕਰੋ",
        check: "ਚੈਕ",
        today: "ਅੱਜ",
        temp: "ਤਾਪਮਾਨ",
        hum: "ਨਮੀ",
        wind: "ਹਵਾ",
        irrigation: "ਸਿੰਚਾਈ ਸਲਾਹ",
        irrigationTip: "ਸਵੇਰੇ ਜਾਂ ਸ਼ਾਮ ਨੂੰ ਪਾਣੀ ਦਿਓ। ਵਰਖਾ ਹੋਵੇ ਤਾਂ ਰੋਕੋ।",
        refresh: "ਨਵੀਂ ਟਿੱਪ",
        forecast: "ਅਗਲੇ 3 ਦਿਨ"
      },
      prices: { title: "ਮੰਡੀ ਭਾਵ", update: "ਅਪਡੇਟ", local: "ਸਥਾਨਕ ਮੰਡੀ", avg: "ਰਾਜ ਔਸਤ", best: "ਸਭ ਤੋਂ ਵਧੀਆ ਨੇੜੇ", note: "ਹਵਾਲੇ ਲਈ ਡੈਮੋ ਦਰਾਂ" },
      crops: { wheat: "ਗੇਂਹੂਂ", rice: "ਚਾਵਲ", maize: "ਮੱਕੀ" },
      planner: {
        title: "ਤੇਜ਼ ਯੋਜਨਾ",
        areaPh: "ਖੇਤਰ (ਏਕੜ)",
        kharif: "ਖਰੀਫ",
        rabi: "ਰਬੀ",
        generate: "ਬਣਾਓ",
        resultTitle: "ਸੁਝਾਏ ਕਦਮ"
      },
      about: { title: "ਖੇਤਸਾਥੀ ਬਾਰੇ", desc: "ਖੇਤਸਾਥੀ ਖੇਤੀ ਦੇ ਫੈਸਲੇ ਆਸਾਨ ਅਤੇ ਸਮਝਦਾਰ ਬਣਾਉਂਦਾ ਹੈ। ਇਸ ਡੈਮੋ ਵਿਚ ਮੌਸਮ, ਭਾਵ ਅਤੇ ਯੋਜਨਾ ਇਕੱਠੇ ਹਨ।" },
      footer: { copy: "© 2025 ਖੇਤਸਾਥੀ. ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।", made: "ਕਿਸਾਨਾਂ ਲਈ ਪਿਆਰ ਨਾਲ ਬਣਾਇਆ।", learn: "ਹੋਰ ਜਾਣੋ", follow: "ਸਾਨੂੰ ਫਾਲੋ ਕਰੋ", feedback: "ਸੁਝਾਅ", feedbackPh: "ਆਪਣੀ ਰਾਏ ਸਾਂਝੀ ਕਰੋ...", submit: "ਭੇਜੋ", feedbackThanks: "ਧੰਨਵਾਦ!", feedbackEmpty: "ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਕੁਝ ਲਿਖੋ।" },
      subscription: {
        badgeInactive: "ਆਫ਼ਲਾਈਨ: ਬੰਦ",
        badgeActive: "ਆਫ਼ਲਾਈਨ: ਚਾਲੂ",
        title: "ਆਫ਼ਲਾਈਨ ਪਹੁੰਚ",
        desc: "ਡੈਸ਼ਬੋਰਡ ਨੂੰ ਆਫ਼ਲਾਈਨ ਵਰਤੋ। ਪਹਿਲੀ ਵਾਰ ਤੋਂ ਬਾਅਦ ਇੰਟਰਨੈੱਟ ਤੋਂ ਬਿਨਾਂ ਕੰਮ ਕਰੇਗਾ।",
        priceLabel: "ਕੀਮਤ:",
        perYear: "ਪ੍ਰਤੀ ਵਰ੍ਹਾ",
        note: "ਇਹ ਡੈਮੋ ਚੈੱਕਆਉਟ ਹੈ। ਕੋਈ ਅਸਲੀ ਭੁਗਤਾਨ ਨਹੀਂ।",
        status: { off: "ਸਕ੍ਰਿਆ ਨਹੀਂ", on: "ਸਕ੍ਰਿਆ" },
        subscribe: "₹199 ਦੀ ਮੈਂਬਰਸ਼ਿਪ",
        cancel: "ਰੱਦ ਕਰੋ",
        test: "ਆਫ਼ਲਾਈਨ ਟੈਸਟ",
        toastOn: "ਆਫ਼ਲਾਈਨ ਪਹੁੰਚ ਚਾਲੂ!",
        toastOff: "ਆਫ਼ਲਾਈਨ ਪਹੁੰਚ ਬੰਦ।",
        toastTest: "ਆਫ਼ਲਾਈਨ ਹੋਣ 'ਤੇ ਕੈਸ਼ ਡਾਟਾ ਲੋਡ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਾਂਗੇ।"
      }
    }
  };

  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = key.split('.').reduce((o, k) => (o || {})[k], dict);
      if (typeof value === "string") el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      const mapping = el.getAttribute("data-i18n-attr").split(",");
      mapping.forEach(pair => {
        const [attr, path] = pair.split(":");
        const val = path.trim().split('.').reduce((o, k) => (o || {})[k], dict);
        if (typeof val === "string") el.setAttribute(attr.trim(), val);
      });
    });
    document.querySelectorAll("option[data-i18n]").forEach(opt => {
      const key = opt.getAttribute("data-i18n");
      const val = key.split('.').reduce((o, k) => (o || {})[k], dict);
      if (typeof val === "string") opt.textContent = val;
    });
    document.documentElement.lang = lang;
  }

  const settingsPanel = document.getElementById("settingsPanel");
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  const openSettings = document.getElementById("openSettings");
  const closeSettings = document.getElementById("closeSettings");
  const langSelect = document.getElementById("langSelect");
  const subStatusChip = document.getElementById("subStatusChip");
  const subStatusBadge = document.getElementById("subStatusBadge");
  const btnSubscribe = document.getElementById("btnSubscribe");
  const btnUnsubscribe = document.getElementById("btnUnsubscribe");
  const btnTestOffline = document.getElementById("btnTestOffline");
  const feedbackForm = document.getElementById('feedbackForm');

  function openSettingsPanel() {
    settingsPanel.classList.remove("translate-x-full");
    settingsBackdrop.classList.remove("hidden");
  }
  function closeSettingsPanel() {
    settingsPanel.classList.add("translate-x-full");
    settingsBackdrop.classList.add("hidden");
  }
  openSettings.addEventListener("click", openSettingsPanel);
  closeSettings.addEventListener("click", closeSettingsPanel);
  settingsBackdrop.addEventListener("click", closeSettingsPanel);

  function showToast(msg) {
    const t = document.getElementById('toast');
    const box = t.querySelector('div');
    box.textContent = msg;
    t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), 1800);
  }

  const SUB_KEY = "khetsathi_subscription_active";
  function renderSubscription() {
    const lang = localStorage.getItem(STORAGE_KEY) || 'en';
    const dict = I18N[lang].subscription;
    const active = localStorage.getItem(SUB_KEY) === '1';

    if (subStatusChip) {
      subStatusChip.innerHTML = active
        ? <i class='fa-solid fa-circle-check'></i><span>${dict.status.on}</span>
        : <i class='fa-solid fa-circle-xmark'></i><span>${dict.status.off}</span>;
    }

    if (subStatusBadge) {
      subStatusBadge.classList.remove('hidden');
      subStatusBadge.innerHTML = active
        ? <i class='fa-solid fa-cloud-arrow-down'></i><span>${dict.badgeActive}</span>
        : <i class='fa-solid fa-cloud-arrow-down'></i><span>${dict.badgeInactive}</span>;
    }
    
    // Check if the buttons exist before toggling classes
    const btnSubscribeElement = document.getElementById("btnSubscribe");
    const btnUnsubscribeElement = document.getElementById("btnUnsubscribe");

    if (btnSubscribeElement && btnUnsubscribeElement) {
        btnSubscribeElement.classList.toggle('hidden', active);
        btnUnsubscribeElement.classList.toggle('hidden', !active);
    }
  }

  // --- Initial Setup ---
  const defaultLang = localStorage.getItem(STORAGE_KEY) || "en";
  langSelect.value = defaultLang;
  applyTranslations(defaultLang);
  renderSubscription();

  // --- Event Listeners for Features ---
  langSelect.addEventListener("change", (e) => {
    applyTranslations(e.target.value);
    localStorage.setItem(STORAGE_KEY, e.target.value);
  });

  if (btnSubscribe) {
    btnSubscribe.addEventListener('click', () => {
      localStorage.setItem(SUB_KEY, '1');
      const lang = localStorage.getItem(STORAGE_KEY) || 'en';
      showToast(I18N[lang].subscription.toastOn);
      renderSubscription();
    });
  }

  if (btnUnsubscribe) {
    btnUnsubscribe.addEventListener('click', () => {
      localStorage.removeItem(SUB_KEY);
      const lang = localStorage.getItem(STORAGE_KEY) || 'en';
      showToast(I18N[lang].subscription.toastOff);
      renderSubscription();
    });
  }

  if (btnTestOffline) {
    btnTestOffline.addEventListener('click', () => {
      const lang = localStorage.getItem(STORAGE_KEY) || 'en';
      showToast(I18N[lang].subscription.toastTest);
    });
  }

  document.getElementById("weatherForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const place = document.getElementById("weatherInput").value.trim() || "Bhubaneswar";
    document.getElementById("weatherPlace").textContent = place;
    try {
      const response = await fetch(http://localhost:3000/api/weather?place=${encodeURIComponent(place)});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      document.getElementById("tempNow").textContent = data.temperature;
      document.getElementById("humNow").textContent = data.humidity;
      document.getElementById("windNow").textContent = data.wind;

      const forecastList = document.getElementById("forecastList");
      forecastList.innerHTML = ''; // Clear old forecast

      const labels = {
        en: ["Tomorrow", "Day 2", "Day 3"],
        hi: ["कल", "दिन 2", "दिन 3"],
        or: ["ଆସନ୍ତାକାଲି", "ଦିନ 2", "ଦିନ 3"],
        pa: ["ਕੱਲ੍ਹ", "ਦਿਨ 2", "ਦਿਨ 3"]
      };
      const lang = localStorage.getItem(STORAGE_KEY) || "en";
      data.forecast.forEach((dayData, index) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2";
        li.innerHTML = `
          <span>${labels[lang][index]}</span>
          <span class="text-slate-700">${dayData.temp} • ${dayData.hum}</span>
        `;
        forecastList.appendChild(li);
      });
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      showToast("Failed to fetch weather data. Please check if the server is running.");
    }
  });

  document.getElementById("updatePrices").addEventListener("click", async () => {
    const crop = document.getElementById("cropSelect").value;
    try {
      const response = await fetch(http://localhost:3000/api/prices?crop=${encodeURIComponent(crop)});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      document.getElementById("priceLocal").textContent = data.local;
      document.getElementById("priceAvg").textContent = data.avg;
      document.getElementById("priceBest").textContent = data.best;
    } catch (error) {
      console.error('Failed to fetch price data:', error);
      showToast("Failed to fetch price data. Please check if the server is running.");
    }
  });

  const tips = {
    en: [
      "Irrigate in the evening to reduce evaporation.",
      "Mulch to retain soil moisture.",
      "Check soil before watering—avoid overwatering."
    ],
    hi: [
      "वाष्पीकरण कम करने के लिए शाम को सिंचाई करें।",
      "नमी बनाए रखने को मल्चिंग करें।",
      "पानी देने से पहले मिट्टी जांचें—अधिक पानी से बचें।"
    ],
    or: [
      "ବାସ୍ପୀଭବନ କମେବା ପାଇଁ ସନ୍ଧ୍ୟାରେ ସିଞ୍ଚାଇ କରନ୍ତୁ।",
      "ମାଟିର ଆର୍ଦ୍ରତା ରଖିବାକୁ ମଲ୍ଚିଂ କରନ୍ତୁ।",
      "ପାନି ଦେବା ପର୍ବରୁ ମାଟି ଯାଞ୍ଚ କରନ୍ତୁ।"
    ],
    pa: [
      "ਵਾਸਪੀਕਰਨ ਘਟਾਉਣ ਲਈ ਸ਼ਾਮ ਨੂੰ ਸਿੰਚਾਈ ਕਰੋ।",
      "ਨਮੀ ਕਾਇਮ ਰੱਖਣ ਲਈ ਮਲਚ ਕਰੋ।",
      "ਪਾਣੀ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਚੈਕ ਕਰੋ।"
    ]
  };

  document.getElementById("refreshAdvice").addEventListener("click", () => {
    const lang = localStorage.getItem(STORAGE_KEY) || "en";
    const arr = tips[lang] || tips.en;
    const tip = arr[Math.floor(Math.random() * arr.length)];
    const el = document.getElementById("irrigationAdvice");
    el.textContent = tip;
  });

  document.getElementById("plannerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const stepsBySeason = {
      kharif: [
        "Prepare field with light tillage.",
        "Sow seeds at proper spacing.",
        "Irrigate after germination."
      ],
      rabi: [
        "Deep ploughing for soil aeration.",
        "Use certified seeds.",
        "Irrigate during critical stages."
      ]
    };
    const lang = localStorage.getItem(STORAGE_KEY) || "en";
    const trans = {
      en: s => s,
      hi: s => s.replace("Prepare field", "खेत तैयार करें")
            .replace("Sow seeds", "बीज बोएँ")
            .replace("Irrigate", "सिंचाई करें")
            .replace("Deep ploughing", "गहरी जुताई")
            .replace("Use certified seeds", "प्रमाणित बीज उपयोग करें"),
      or: s => s.replace("Prepare field", "ଖେତ ତିଆରି କରନ୍ତୁ")
            .replace("Sow seeds", "ବିଆ ରୋପଣ କରନ୍ତୁ")
            .replace("Irrigate", "ସିଞ୍ଚାଇ କରନ୍ତୁ")
            .replace("Deep ploughing", "ଗଭୀର ଚାଷ")
            .replace("Use certified seeds", "ପ୍ରମାଣିତ ବିଆ ବ୍ୟବହାର କରନ୍ତୁ"),
      pa: s => s.replace("Prepare field", "ਖੇਤ ਤਿਆਰ ਕਰੋ")
            .replace("Sow seeds", "ਬੀਜ ਬੋਵੋ")
            .replace("Irrigate", "ਸਿੰਚਾਈ ਕਰੋ")
            .replace("Deep ploughing", "ਗਹਿਰੀ ਜੁੱਤਾਈ")
            .replace("Use certified seeds", "ਪ੍ਰਮਾਣਿਤ ਬੀਜ ਵਰਤੋ")
    };
    const steps = (stepsBySeason[data.season] || stepsBySeason.kharif).map(trans[lang]);
    const list = document.getElementById("planSteps");
    list.innerHTML = "";
    steps.forEach((txt, idx) => {
      const li = document.createElement("li");
      li.className = "flex gap-3 items-start";
      li.innerHTML = `
        <span class="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">${idx+1}</span>
        <span class="text-slate-700">${txt}</span>
      `;
      list.appendChild(li);
    });
    document.getElementById("planResult").classList.remove("hidden");
  });

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const lang = localStorage.getItem(STORAGE_KEY) || 'en';
      const msgBox = document.getElementById('feedbackMsg');
      const textInput = document.getElementById('feedbackText');
      const feedbackText = textInput.value.trim();

      if (feedbackText.length === 0) {
        msgBox.textContent = I18N[lang].footer.feedbackEmpty;
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/api/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: feedbackText })
        });

        if (!response.ok) {
          throw new Error('Failed to submit feedback');
        }

        msgBox.textContent = ✅ ${I18N[lang].footer.feedbackThanks};
        textInput.value = '';
      } catch (error) {
        console.error('Feedback submission error:', error);
        msgBox.textContent = "Error submitting feedback. Try again.";
      } finally {
        setTimeout(() => msgBox.textContent = '', 3000);
      }
    });
  }

});
// This file contains all the JavaScript logic for the Khetsathi website.

document.addEventListener('DOMContentLoaded', () => {

  const STORAGE_KEY = "khetsathi_lang";
  const I18N = {
    en: {
      tagline: "Smart Farmer's Companion",
      nav: { home: "Home", weather: "Weather", prices: "Prices", planner: "Planner", about: "About" },
      settings: "Settings",
      "settings.title": "Settings",
      "settings.language": "Language",
      "settings.langNote": "Your preference will be saved for next time.",
      "settings.tip": "Tip: Changing the language instantly updates all text.",
      "settings.save": "Save",
      badge: "Smart Farming with AI Advice",
      hero: {
        title1: "Your fields,",
        title2: "Your best yield.",
        desc: "Boost your harvest with hyper-local weather, market prices, and simple, actionable advice.",
        ctaPrimary: "My Season Plan",
        ctaSecondary: "See Today's Weather",
        point1: "Local Data",
        point2: "Crop-Friendly Advice",
        point3: "Better Market Timing"
      },
      widget: { title: "Today's View", sample: "Demo Data", weather: "Temp", humidity: "Humidity", wind: "Wind", market: "Market", tip: "Tip", tipText: "Irrigate in the evening to reduce water evaporation." },
      weather: {
        title: "Weather",
        inputPlaceholder: "Enter Village or City",
        check: "Check",
        today: "Today",
        temp: "Temp",
        hum: "Humidity",
        wind: "Wind",
        irrigation: "Irrigation Advice",
        irrigationTip: "Water in the morning or evening. Avoid if rain is expected.",
        refresh: "New Tip",
        forecast: "Next 3 Days"
      },
      prices: { title: "Market Prices", update: "Update", local: "Local Mandi", avg: "State Average", best: "Best Nearby", note: "Demo prices for comparison." },
      crops: { wheat: "Wheat", rice: "Rice", maize: "Maize" },
      planner: {
        title: "Quick Plan",
        areaPh: "Area (acres)",
        kharif: "Kharif",
        rabi: "Rabi",
        generate: "Generate",
        resultTitle: "Proposed Steps"
      },
      about: { title: "About Khetsathi", desc: "Khetsathi helps farmers make modern and smart decisions. This demo brings together weather, prices, and planning." },
      footer: { copy: "© 2025 Khetsathi. All rights reserved.", made: "Made with love for farmers.", learn: "Learn More", follow: "Follow Us", feedback: "Feedback", feedbackPh: "Share your feedback...", submit: "Send", feedbackThanks: "Thanks for your feedback!", feedbackEmpty: "Please enter some feedback first." },
      subscription: {
        badgeInactive: "Offline: Disabled",
        badgeActive: "Offline: Enabled",
        title: "Offline Access",
        desc: "Use the dashboard offline. After the first load, it will work without an internet connection.",
        priceLabel: "Price:",
        perYear: "per year",
        note: "This is a demo checkout. No actual payment will be made.",
        status: { off: "Inactive", on: "Active" },
        subscribe: "Subscribe for ₹199",
        cancel: "Cancel",
        test: "Offline Test",
        toastOn: "Offline access enabled!",
        toastOff: "Offline access disabled.",
        toastTest: "Will attempt to load cached data when offline."
      }
    },
    hi: {
      tagline: "स्मार्ट किसान साथी",
      nav: { home: "होम", weather: "मौसम", prices: "बाजार", planner: "योजना", about: "बारे में" },
      settings: "सेटिंग्स",
      "settings.title": "सेटिंग्स",
      "settings.language": "भाषा",
      "settings.langNote": "आपकी पसंद अगली बार के लिए सहेजी जाएगी।",
      "settings.tip": "टिप: भाषा बदलते ही सारा टेक्स्ट तुरंत बदल जाएगा।",
      "settings.save": "सेव करें",
      badge: "एआई सुझाव के साथ स्मार्ट खेती",
      hero: {
        title1: "आपके खेत,",
        title2: "आपकी बेहतरीन फसल।",
        desc: "स्थानीय मौसम, मंडी भाव और सरल सलाह से उपज बढ़ाएं।",
        ctaPrimary: "मेरी सीज़न योजना",
        ctaSecondary: "आज का मौसम देखें",
        point1: "स्थानीय डेटा",
        point2: "फसल-हितैषी सलाह",
        point3: "बेहतर बाजार समय"
      },
      widget: { title: "आज का दृश्य", sample: "डेमो डेटा", weather: "तापमान", humidity: "आर्द्रता", wind: "हवा", market: "बाजार", tip: "टिप", tipText: "वाष्पीकरण कम करने के लिए शाम को सिंचाई करें।" },
      weather: {
        title: "मौसम",
        inputPlaceholder: "गाँव या शहर दर्ज करें",
        check: "जाँच करें",
        today: "आज",
        temp: "तापमान",
        hum: "आर्द्रता",
        wind: "हवा",
        irrigation: "सिंचाई सलाह",
        irrigationTip: "सुबह या शाम को पानी दें। बारिश हो तो बचें।",
        refresh: "नया टिप",
        forecast: "अगले 3 दिन"
      },
      prices: { title: "मंडी भाव", update: "अपडेट", local: "स्थानीय मंडी", avg: "राज्य औसत", best: "सबसे अच्छा पास", note: "संदर्भ के लिए डेमो दरें।" },
      crops: { wheat: "गेहूं", rice: "चावल", maize: "मक्का" },
      planner: {
        title: "त्वरित योजना",
        areaPh: "क्षेत्र (एकड़)",
        kharif: "खरीफ",
        rabi: "रबी",
        generate: "बनाएं",
        resultTitle: "सुझाए गए कदम"
      },
      about: { title: "खेतसाथी के बारे में", desc: "खेतसाथी किसानों को आधुनिक और सरल निर्णय लेने में मदद करता है। इस डेमो में मौसम, भाव और योजना शामिल है।" },
      footer: { copy: "© 2025 खेतसाथी। सभी अधिकार सुरक्षित।", made: "किसानों के लिए प्यार से बनाया गया।", learn: "और जानें", follow: "हमें फॉलो करें", feedback: "सुझाव", feedbackPh: "अपनी राय साझा करें...", submit: "भेजें", feedbackThanks: "आपके सुझाव के लिए धन्यवाद!", feedbackEmpty: "कृपया पहले कुछ इनपुट करें।" },
      subscription: {
        badgeInactive: "ऑफ़लाइन: बंद",
        badgeActive: "ऑफ़लाइन: चालू",
        title: "ऑफ़लाइन पहुँच",
        desc: "डैशबोर्ड को ऑफ़लाइन उपयोग करें। पहली बार लोड होने के बाद यह इंटरनेट के बिना काम करेगा।",
        priceLabel: "मूल्य:",
        perYear: "प्रति वर्ष",
        note: "यह एक डेमो चेकआउट है। कोई वास्तविक भुगतान नहीं।",
        status: { off: "निष्क्रिय", on: "सक्रिय" },
        subscribe: "₹199 का सदस्यता लें",
        cancel: "रद्द करें",
        test: "ऑफ़लाइन परीक्षण",
        toastOn: "ऑफ़लाइन पहुँच सक्षम!",
        toastOff: "ऑफ़लाइन पहुँच अक्षम।",
        toastTest: "ऑफ़लाइन होने पर कैश डेटा लोड करने का प्रयास करेंगे।"
      }
    },
    or: {
      tagline: "ସ୍ମାର୍ଟ ଚାଷୀ ସାଥୀ",
      nav: { home: "ମୂଖ୍ୟ", weather: "ଆବହାଓଆ", prices: "ବଜାର", planner: "ଯୋଜନା", about: "ସମ୍ବନ୍ଧରେ" },
      settings: "ସେଟିଙ୍ଗସ୍",
      "settings.title": "ସେଟିଙ୍ଗସ୍",
      "settings.language": "ଭାଷା",
      "settings.langNote": "ଆପଣଙ୍କ ପସନ୍ଦ ପରବର୍ତ୍ତୀ ବାର ପାଇଁ ସୁରକ୍ଷିତ ରହିବ।",
      "settings.tip": "ଟିପ୍: ଭାଷା ବଦଳାଇଲେ ସମସ୍ତ ଟେକ୍ସ୍ଟ ଖଣ୍ଡେ ପରିବର୍ତ୍ତନ ହେବ।",
      "settings.save": "ସେଭ୍ କରନ୍ତୁ",
      badge: "ଏଆଇ ସୁପାରିଶ ସହ ଚତୁର ଚାଷ",
      hero: {
        title1: "ଆପଣଙ୍କ ଖେତ,",
        title2: "ଆପଣଙ୍କ ସର୍ବୋତ୍କୃଷ୍ଟ ଉତ୍ପାଦନ।",
        desc: "ସ୍ଥାନୀୟ ଆବହାଓଆ, ମଣ୍ଡି ଦର ଓ ସରଳ ପରାମର୍ଶରୁ ଉତ୍ପାଦନ ବଢ଼ାନ୍ତୁ।",
        ctaPrimary: "ମୋ ଋତୁ ଯୋଜନା",
        ctaSecondary: "ଆଜିର ଆବହାଓଆ ଦେଖନ୍ତୁ",
        point1: "ସ୍ଥାନୀୟ ତଥ୍ୟ",
        point2: "ଫସଲ ହିତେଷୀ ପରାମର୍ଶ",
        point3: "ଭଲ ବଜାର ସମୟ"
      },
      widget: { title: "ଆଜିର ଦୃଶ୍ୟ", sample: "ଡେମୋ ଡାଟା", weather: "ତାପ", humidity: "ଆର୍ଦ୍ରତା", wind: "ପବନ", market: "ବଜାର", tip: "ସୁଚନା", tipText: "ବାସ୍ପୀଭବନ କମିବାକୁ ସନ୍ଧ୍ୟାରେ ପାନି ଦିଅନ୍ତୁ।" },
      weather: {
        title: "ଆବହାଓଆ",
        inputPlaceholder: "ଗାଁ ବା ସହର ଲେଖନ୍ତୁ",
        check: "ଯାଞ୍ଚ କରନ୍ତୁ",
        today: "ଆଜି",
        temp: "ତାପମାତ୍ରା",
        hum: "ଆର୍ଦ୍ରତା",
        wind: "ପବନ",
        irrigation: "ସିଞ୍ଚାଇ ପରାମର୍ଶ",
        irrigationTip: "ସକାଳ ବା ସନ୍ଧ୍ୟାରେ ପାନି ଦିଅନ୍ତୁ। ବର୍ଷା ହେଲେ ଏଡ଼ାନ୍ତୁ।",
        refresh: "ନୂତନ ସୁଚନା",
        forecast: "ଆଗାମୀ 3 ଦିନ"
      },
      prices: { title: "ବଜାର ଦର", update: "ଅପଡେଟ୍", local: "ସ୍ଥାନୀୟ ମଣ୍ଡି", avg: "ରାଜ୍ୟ ହାରାହାରି", best: "ସର୍ବୋତ୍କୃଷ୍ଟ ନିକଟରେ", note: "ତୁଳନା ପାଇଁ ଡେମୋ ଦର" },
      crops: { wheat: "ଗହମ", rice: "ଚାଉଳ", maize: "ମକା" },
      planner: {
        title: "ତ୍ୱରିତ ଯୋଜନା",
        areaPh: "କ୍ଷେତ୍ରଫଳ (ଏକର)",
        kharif: "ଖରିଫ",
        rabi: "ରବି",
        generate: "ତିଆରି କରନ୍ତୁ",
        resultTitle: "ପ୍ରସ୍ତାବିତ ପଦକ୍ରମ"
      },
      about: { title: "ଖେତସାଥି ସମ୍ବନ୍ଧରେ", desc: "ଖେତସାଥି ଚାଷିଙ୍କୁ ଆଧୁନିକ ଏବଂ ସରଳ ନିଷ୍ପତ୍ତିରେ ସହାଯ୍ୟ କରେ। ଏହି ଡେମୋରେ ଆବହାଓଆ, ଦର ଓ ଯୋଜନା ମିଳିଥାଏ।" },
      footer: { copy: "© 2025 ଖେତସାଥି. ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।", made: "ଚାଷିମାନଙ୍କ ପାଇଁ ଭଲ ପ୍ରେମରେ।", learn: "ଅଧିକ ଜାଣନ୍ତୁ", follow: "ଆମକୁ ଫଲୋ କରନ୍ତୁ", feedback: "ଫିଡ୍‌ବ୍ୟାକ", feedbackPh: "ଆପଣଙ୍କ ମତାମତ ଲେଖନ୍ତୁ...", submit: "ପଠାନ୍ତୁ", feedbackThanks: "ଧନ୍ୟବାଦ!", feedbackEmpty: "ଦୟାକରି ପ୍ରଥମେ କିଛି ଲେଖନ୍ତୁ।" },
      subscription: {
        badgeInactive: "ଅଫଲାଇନ୍: ବନ୍ଦ",
        badgeActive: "ଅଫଲାଇନ୍: ଚାଲୁ",
        title: "ଅଫଲାଇନ୍ ଆକ୍ସେସ୍",
        desc: "ଡ୍ୟାଶବୋର୍ଡକୁ ଅଫଲାଇନ୍ ଭାବରେ ବ୍ୟବହାର କରନ୍ତୁ। ପ୍ରଥମ ଲୋଡ୍ ପରେ ଇଣ୍ଟରନେଟ୍ ବିନା କାମ କରିବ।",
        priceLabel: "ମୂଲ୍ୟ:",
        perYear: "ପ୍ରତି ବର୍ଷ",
        note: "ଏହା ଡେମୋ ଚେକଅଉଟ୍ ଅଟେ। କୌଣସି ବାସ୍ତବ ପେମେଣ୍ଟ ହୁଅନି।",
        status: { off: "ସକ୍ରିୟ ନୁହେଁ", on: "ସକ୍ରିୟ" },
        subscribe: "₹199 ସବସ୍କ୍ରାଇବ କରନ୍ତୁ",
        cancel: "ରଦ୍ଦ କରନ୍ତୁ",
        test: "ଅଫଲାଇନ୍ ପରୀକ୍ଷା",
        toastOn: "ଅଫଲାଇନ୍ ଆକ୍ସେସ୍ ସଚଳ!",
        toastOff: "ଅଫଲାଇନ୍ ଆକ୍ସେସ୍ ନିଷ୍କ୍ରିୟ।",
        toastTest: "ଅଫଲାଇନ୍ ହେଲେ କ୍ୟାଶ୍ ଡାଟା ଲୋଡ୍ କରିବାକୁ ଚେଷ୍ଟା କରିବୁ।"
      }
    },
    pa: {
      tagline: "ਸਮਾਰਟ ਖੇਤੀ ਸਾਥੀ",
      nav: { home: "ਹੋਮ", weather: "ਮੌਸਮ", prices: "ਬਾਜ਼ਾਰ", planner: "ਯੋਜਨਾ", about: "ਬਾਰੇ" },
      settings: "ਸੈਟਿੰਗਜ਼",
      "settings.title": "ਸੈਟਿੰਗਜ਼",
      "settings.language": "ਭਾਸ਼ਾ",
      "settings.langNote": "ਤੁਹਾਡੀ ਚੋਣ ਅਗਲੀ ਵਾਰ ਲਈ ਸੁਰੱਖਿਅਤ ਹੈ।",
      "settings.tip": "ਟਿੱਪ: ਭਾਸ਼ਾ ਬਦਲਦੇ ਹੀ ਸਾਰਾ ਪਾਠ ਤੁਰੰਤ ਬਦਲ ਜਾਵੇਗਾ।",
      "settings.save": "ਸੇਵ ਕਰੋ",
      badge: "ਏਆਈ ਸੁਝਾਅ ਨਾਲ ਸਮਾਰਟ ਖੇਤੀ",
      hero: {
        title1: "ਤੁਹਾਡੇ ਖੇਤ,",
        title2: "ਤੁਹਾਡੀ ਵਧੀਆ ਫ਼ਸਲ।",
        desc: "ਸਥਾਨਕ ਮੌਸਮ, ਮੰਡੀ ਭਾਵ ਅਤੇ ਸਾਦੇ ਸਲਾਹ ਨਾਲ ਉਪਜ ਵਧਾਓ।",
        ctaPrimary: "ਮੇਰਾ ਸੀਜ਼ਨ ਯੋਜਨਾ",
        ctaSecondary: "ਅੱਜ ਦਾ ਮੌਸਮ ਵੇਖੋ",
        point1: "ਸਥਾਨਕ ਜਾਣਕਾਰੀ",
        point2: "ਫਸਲ-ਦੋਸਤ ਸੁਝਾਅ",
        point3: "ਵਧੀਆ ਬਾਜ਼ਾਰ ਸਮਾਂ"
      },
      widget: { title: "ਅੱਜ ਦੀ ਝਲਕ", sample: "ਡੈਮੋ ਡਾਟਾ", weather: "ਤਾਪ", humidity: "ਨਮੀ", wind: "ਹਵਾ", market: "ਬਾਜ਼ਾਰ", tip: "ਟਿੱਪ", tipText: "ਵਾਸਪੀਕਰਨ ਘਟਾਉਣ ਲਈ ਸ਼ਾਮ ਨੂੰ ਸਿੰਚਾਈ ਕਰੋ।" },
      weather: {
        title: "ਮੌਸਮ",
        inputPlaceholder: "ਪਿੰਡ ਜਾਂ ਸ਼ਹਿਰ ਦਰਜ ਕਰੋ",
        check: "ਚੈਕ",
        today: "ਅੱਜ",
        temp: "ਤਾਪਮਾਨ",
        hum: "ਨਮੀ",
        wind: "ਹਵਾ",
        irrigation: "ਸਿੰਚਾਈ ਸਲਾਹ",
        irrigationTip: "ਸਵੇਰੇ ਜਾਂ ਸ਼ਾਮ ਨੂੰ ਪਾਣੀ ਦਿਓ। ਵਰਖਾ ਹੋਵੇ ਤਾਂ ਰੋਕੋ।",
        refresh: "ਨਵੀਂ ਟਿੱਪ",
        forecast: "ਅਗਲੇ 3 ਦਿਨ"
      },
      prices: { title: "ਮੰਡੀ ਭਾਵ", update: "ਅਪਡੇਟ", local: "ਸਥਾਨਕ ਮੰਡੀ", avg: "ਰਾਜ ਔਸਤ", best: "ਸਭ ਤੋਂ ਵਧੀਆ ਨੇੜੇ", note: "ਹਵਾਲੇ ਲਈ ਡੈਮੋ ਦਰਾਂ" },
      crops: { wheat: "ਗੇਂਹੂਂ", rice: "ਚਾਵਲ", maize: "ਮੱਕੀ" },
      planner: {
        title: "ਤੇਜ਼ ਯੋਜਨਾ",
        areaPh: "ਖੇਤਰ (ਏਕੜ)",
        kharif: "ਖਰੀਫ",
        rabi: "ਰਬੀ",
        generate: "ਬਣਾਓ",
        resultTitle: "ਸੁਝਾਏ ਕਦਮ"
      },
      about: { title: "ਖੇਤਸਾਥੀ ਬਾਰੇ", desc: "ਖੇਤਸਾਥੀ ਖੇਤੀ ਦੇ ਫੈਸਲੇ ਆਸਾਨ ਅਤੇ ਸਮਝਦਾਰ ਬਣਾਉਂਦਾ ਹੈ। ਇਸ ਡੈਮੋ ਵਿਚ ਮੌਸਮ, ਭਾਵ ਅਤੇ ਯੋਜਨਾ ਇਕੱਠੇ ਹਨ।" },
      footer: { copy: "© 2025 ਖੇਤਸਾਥੀ. ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।", made: "ਕਿਸਾਨਾਂ ਲਈ ਪਿਆਰ ਨਾਲ ਬਣਾਇਆ।", learn: "ਹੋਰ ਜਾਣੋ", follow: "ਸਾਨੂੰ ਫਾਲੋ ਕਰੋ", feedback: "ਸੁਝਾਅ", feedbackPh: "ਆਪਣੀ ਰਾਏ ਸਾਂਝੀ ਕਰੋ...", submit: "ਭੇਜੋ", feedbackThanks: "ਧੰਨਵਾਦ!", feedbackEmpty: "ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਕੁਝ ਲਿਖੋ।" },
      subscription: {
        badgeInactive: "ਆਫ਼ਲਾਈਨ: ਬੰਦ",
        badgeActive: "ਆਫ਼ਲਾਈਨ: ਚਾਲੂ",
        title: "ਆਫ਼ਲਾਈਨ ਪਹੁੰਚ",
        desc: "ਡੈਸ਼ਬੋਰਡ ਨੂੰ ਆਫ਼ਲਾਈਨ ਵਰਤੋ। ਪਹਿਲੀ ਵਾਰ ਤੋਂ ਬਾਅਦ ਇੰਟਰਨੈੱਟ ਤੋਂ ਬਿਨਾਂ ਕੰਮ ਕਰੇਗਾ।",
        priceLabel: "ਕੀਮਤ:",
        perYear: "ਪ੍ਰਤੀ ਵਰ੍ਹਾ",
        note: "ਇਹ ਡੈਮੋ ਚੈੱਕਆਉਟ ਹੈ। ਕੋਈ ਅਸਲੀ ਭੁਗਤਾਨ ਨਹੀਂ।",
        status: { off: "ਸਕ੍ਰਿਆ ਨਹੀਂ", on: "ਸਕ੍ਰਿਆ" },
        subscribe: "₹199 ਦੀ ਮੈਂਬਰਸ਼ਿਪ",
        cancel: "ਰੱਦ ਕਰੋ",
        test: "ਆਫ਼ਲਾਈਨ ਟੈਸਟ",
        toastOn: "ਆਫ਼ਲਾਈਨ ਪਹੁੰਚ ਚਾਲੂ!",
        toastOff: "ਆਫ਼ਲਾਈਨ ਪਹੁੰਚ ਬੰਦ।",
        toastTest: "ਆਫ਼ਲਾਈਨ ਹੋਣ 'ਤੇ ਕੈਸ਼ ਡਾਟਾ ਲੋਡ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਾਂਗੇ।"
      }
    }
  };

  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = key.split('.').reduce((o, k) => (o || {})[k], dict);
      if (typeof value === "string") el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      const mapping = el.getAttribute("data-i18n-attr").split(",");
      mapping.forEach(pair => {
        const [attr, path] = pair.split(":");
        const val = path.trim().split('.').reduce((o, k) => (o || {})[k], dict);
        if (typeof val === "string") el.setAttribute(attr.trim(), val);
      });
    });
    document.querySelectorAll("option[data-i18n]").forEach(opt => {
      const key = opt.getAttribute("data-i18n");
      const val = key.split('.').reduce((o, k) => (o || {})[k], dict);
      if (typeof val === "string") opt.textContent = val;
    });
    document.documentElement.lang = lang;
  }

  const settingsPanel = document.getElementById("settingsPanel");
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  const openSettings = document.getElementById("openSettings");
  const closeSettings = document.getElementById("closeSettings");
  const langSelect = document.getElementById("langSelect");
  const subStatusChip = document.getElementById("subStatusChip");
  const subStatusBadge = document.getElementById("subStatusBadge");
  const btnSubscribe = document.getElementById("btnSubscribe");
  const btnUnsubscribe = document.getElementById("btnUnsubscribe");
  const btnTestOffline = document.getElementById("btnTestOffline");
  const feedbackForm = document.getElementById('feedbackForm');

  function openSettingsPanel() {
    settingsPanel.classList.remove("translate-x-full");
    settingsBackdrop.classList.remove("hidden");
  }
  function closeSettingsPanel() {
    settingsPanel.classList.add("translate-x-full");
    settingsBackdrop.classList.add("hidden");
  }
  openSettings.addEventListener("click", openSettingsPanel);
  closeSettings.addEventListener("click", closeSettingsPanel);
  settingsBackdrop.addEventListener("click", closeSettingsPanel);

  function showToast(msg) {
    const t = document.getElementById('toast');
    const box = t.querySelector('div');
    box.textContent = msg;
    t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), 1800);
  }

  const SUB_KEY = "khetsathi_subscription_active";
  function renderSubscription() {
    const lang = localStorage.getItem(STORAGE_KEY) || 'en';
    const dict = I18N[lang].subscription;
    const active = localStorage.getItem(SUB_KEY) === '1';

    if (subStatusChip) {
      subStatusChip.innerHTML = active
        ? <i class='fa-solid fa-circle-check'></i><span>${dict.status.on}</span>
        : <i class='fa-solid fa-circle-xmark'></i><span>${dict.status.off}</span>;
    }

    if (subStatusBadge) {
      subStatusBadge.classList.remove('hidden');
      subStatusBadge.innerHTML = active
        ? <i class='fa-solid fa-cloud-arrow-down'></i><span>${dict.badgeActive}</span>
        : <i class='fa-solid fa-cloud-arrow-down'></i><span>${dict.badgeInactive}</span>;
    }
    
    // Check if the buttons exist before toggling classes
    const btnSubscribeElement = document.getElementById("btnSubscribe");
    const btnUnsubscribeElement = document.getElementById("btnUnsubscribe");

    if (btnSubscribeElement && btnUnsubscribeElement) {
        btnSubscribeElement.classList.toggle('hidden', active);
        btnUnsubscribeElement.classList.toggle('hidden', !active);
    }
  }

  // --- Initial Setup ---
  const defaultLang = localStorage.getItem(STORAGE_KEY) || "en";
  langSelect.value = defaultLang;
  applyTranslations(defaultLang);
  renderSubscription();

  // --- Event Listeners for Features ---
  langSelect.addEventListener("change", (e) => {
    applyTranslations(e.target.value);
    localStorage.setItem(STORAGE_KEY, e.target.value);
  });

  if (btnSubscribe) {
    btnSubscribe.addEventListener('click', () => {
      localStorage.setItem(SUB_KEY, '1');
      const lang = localStorage.getItem(STORAGE_KEY) || 'en';
      showToast(I18N[lang].subscription.toastOn);
      renderSubscription();
    });
  }

  if (btnUnsubscribe) {
    btnUnsubscribe.addEventListener('click', () => {
      localStorage.removeItem(SUB_KEY);
      const lang = localStorage.getItem(STORAGE_KEY) || 'en';
      showToast(I18N[lang].subscription.toastOff);
      renderSubscription();
    });
  }

  if (btnTestOffline) {
    btnTestOffline.addEventListener('click', () => {
      const lang = localStorage.getItem(STORAGE_KEY) || 'en';
      showToast(I18N[lang].subscription.toastTest);
    });
  }

  document.getElementById("weatherForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const place = document.getElementById("weatherInput").value.trim() || "Bhubaneswar";
    document.getElementById("weatherPlace").textContent = place;
    try {
      const response = await fetch(http://localhost:3000/api/weather?place=${encodeURIComponent(place)});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      document.getElementById("tempNow").textContent = data.temperature;
      document.getElementById("humNow").textContent = data.humidity;
      document.getElementById("windNow").textContent = data.wind;

      const forecastList = document.getElementById("forecastList");
      forecastList.innerHTML = ''; // Clear old forecast

      const labels = {
        en: ["Tomorrow", "Day 2", "Day 3"],
        hi: ["कल", "दिन 2", "दिन 3"],
        or: ["ଆସନ୍ତାକାଲି", "ଦିନ 2", "ଦିନ 3"],
        pa: ["ਕੱਲ੍ਹ", "ਦਿਨ 2", "ਦਿਨ 3"]
      };
      const lang = localStorage.getItem(STORAGE_KEY) || "en";
      data.forecast.forEach((dayData, index) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2";
        li.innerHTML = `
          <span>${labels[lang][index]}</span>
          <span class="text-slate-700">${dayData.temp} • ${dayData.hum}</span>
        `;
        forecastList.appendChild(li);
      });
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      showToast("Failed to fetch weather data. Please check if the server is running.");
    }
  });

  document.getElementById("updatePrices").addEventListener("click", async () => {
    const crop = document.getElementById("cropSelect").value;
    try {
      const response = await fetch(http://localhost:3000/api/prices?crop=${encodeURIComponent(crop)});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      document.getElementById("priceLocal").textContent = data.local;
      document.getElementById("priceAvg").textContent = data.avg;
      document.getElementById("priceBest").textContent = data.best;
    } catch (error) {
      console.error('Failed to fetch price data:', error);
      showToast("Failed to fetch price data. Please check if the server is running.");
    }
  });

  const tips = {
    en: [
      "Irrigate in the evening to reduce evaporation.",
      "Mulch to retain soil moisture.",
      "Check soil before watering—avoid overwatering."
    ],
    hi: [
      "वाष्पीकरण कम करने के लिए शाम को सिंचाई करें।",
      "नमी बनाए रखने को मल्चिंग करें।",
      "पानी देने से पहले मिट्टी जांचें—अधिक पानी से बचें।"
    ],
    or: [
      "ବାସ୍ପୀଭବନ କମେବା ପାଇଁ ସନ୍ଧ୍ୟାରେ ସିଞ୍ଚାଇ କରନ୍ତୁ।",
      "ମାଟିର ଆର୍ଦ୍ରତା ରଖିବାକୁ ମଲ୍ଚିଂ କରନ୍ତୁ।",
      "ପାନି ଦେବା ପର୍ବରୁ ମାଟି ଯାଞ୍ଚ କରନ୍ତୁ।"
    ],
    pa: [
      "ਵਾਸਪੀਕਰਨ ਘਟਾਉਣ ਲਈ ਸ਼ਾਮ ਨੂੰ ਸਿੰਚਾਈ ਕਰੋ।",
      "ਨਮੀ ਕਾਇਮ ਰੱਖਣ ਲਈ ਮਲਚ ਕਰੋ।",
      "ਪਾਣੀ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਚੈਕ ਕਰੋ।"
    ]
  };

  document.getElementById("refreshAdvice").addEventListener("click", () => {
    const lang = localStorage.getItem(STORAGE_KEY) || "en";
    const arr = tips[lang] || tips.en;
    const tip = arr[Math.floor(Math.random() * arr.length)];
    const el = document.getElementById("irrigationAdvice");
    el.textContent = tip;
  });

  document.getElementById("plannerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const stepsBySeason = {
      kharif: [
        "Prepare field with light tillage.",
        "Sow seeds at proper spacing.",
        "Irrigate after germination."
      ],
      rabi: [
        "Deep ploughing for soil aeration.",
        "Use certified seeds.",
        "Irrigate during critical stages."
      ]
    };
    const lang = localStorage.getItem(STORAGE_KEY) || "en";
    const trans = {
      en: s => s,
      hi: s => s.replace("Prepare field", "खेत तैयार करें")
            .replace("Sow seeds", "बीज बोएँ")
            .replace("Irrigate", "सिंचाई करें")
            .replace("Deep ploughing", "गहरी जुताई")
            .replace("Use certified seeds", "प्रमाणित बीज उपयोग करें"),
      or: s => s.replace("Prepare field", "ଖେତ ତିଆରି କରନ୍ତୁ")
            .replace("Sow seeds", "ବିଆ ରୋପଣ କରନ୍ତୁ")
            .replace("Irrigate", "ସିଞ୍ଚାଇ କରନ୍ତୁ")
            .replace("Deep ploughing", "ଗଭୀର ଚାଷ")
            .replace("Use certified seeds", "ପ୍ରମାଣିତ ବିଆ ବ୍ୟବହାର କରନ୍ତୁ"),
      pa: s => s.replace("Prepare field", "ਖੇਤ ਤਿਆਰ ਕਰੋ")
            .replace("Sow seeds", "ਬੀਜ ਬੋਵੋ")
            .replace("Irrigate", "ਸਿੰਚਾਈ ਕਰੋ")
            .replace("Deep ploughing", "ਗਹਿਰੀ ਜੁੱਤਾਈ")
            .replace("Use certified seeds", "ਪ੍ਰਮਾਣਿਤ ਬੀਜ ਵਰਤੋ")
    };
    const steps = (stepsBySeason[data.season] || stepsBySeason.kharif).map(trans[lang]);
    const list = document.getElementById("planSteps");
    list.innerHTML = "";
    steps.forEach((txt, idx) => {
      const li = document.createElement("li");
      li.className = "flex gap-3 items-start";
      li.innerHTML = `
        <span class="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">${idx+1}</span>
        <span class="text-slate-700">${txt}</span>
      `;
      list.appendChild(li);
    });
    document.getElementById("planResult").classList.remove("hidden");
  });

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const lang = localStorage.getItem(STORAGE_KEY) || 'en';
      const msgBox = document.getElementById('feedbackMsg');
      const textInput = document.getElementById('feedbackText');
      const feedbackText = textInput.value.trim();

      if (feedbackText.length === 0) {
        msgBox.textContent = I18N[lang].footer.feedbackEmpty;
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/api/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: feedbackText })
        });

        if (!response.ok) {
          throw new Error('Failed to submit feedback');
        }

        msgBox.textContent = ✅ ${I18N[lang].footer.feedbackThanks};
        textInput.value = '';
      } catch (error) {
        console.error('Feedback submission error:', error);
        msgBox.textContent = "Error submitting feedback. Try again.";
      } finally {
        setTimeout(() => msgBox.textContent = '', 3000);
      }
    });
  }

});