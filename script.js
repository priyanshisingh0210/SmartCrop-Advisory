const translations = {
      en: {
        logo: "KRISHI SAHAYIKA",
        search: "Search...",
        loginBtn: "Login",
        updates: "🌦️ Weather Alert: Heavy rains expected in Bihar tomorrow | 🌱 Govt Update: New subsidy scheme launched for small farmers",
        aim: "Aim",
        vision: "Vision",
        contact: "Contact",
        heroTitle: "Helping Farmers Grow with KRISHI SAHAYIKA",
        soilTitle: "Soil & Crop Advice",
        soilDesc: "Get crop and soil recommendations instantly.",
        checkNow: "Check Now",
        pestTitle: "Pest & Disease",
        pestDesc: "Detect pests & crop diseases quickly.",
        weatherTitle: "Weather Alerts",
        weatherDesc: "Stay updated with local weather info.",
        viewWeather: "View Weather",
        marketTitle: "Market Prices",
        marketDesc: "Check daily crop prices in local markets.",
        viewPrices: "View Prices",
        schemeTitle: "Govt. Schemes",
        schemeDesc: "Learn about support & subsidies.",
        viewSchemes: "View Schemes",
        footer: "© 2025 KRISHI SAHAYIKA | Designed for Farmers",
        loginTitle: "Login",
        username: "Username",
        password: "Password",
        loginBtnModal: "Login",
        chatHeader: "Chat with KRISHI SAHAYIKA",
        chatPlaceholder: "Type a message...",
        sendBtn: "Send",
        aimTitle: "Aim",
        aimDesc: "Empowering farmers with smart, simple, and multilingual guidance to grow better crops, fight pests, and boost income—anytime, anywhere.",
        visionTitle: "Vision",
        visionDesc: "To empower every farmer with simple, easy-to-use digital guidance.\nTo provide timely advice on crops, soil, weather, and pests.\nTo help farmers increase yields, reduce losses, and earn more.\nTo make technology accessible in local languages for everyone.\nTo create a smarter, stronger, and sustainable farming community across India.",
        contactTitle: "Contact",
        contactDesc: "\"S24 - TECH ELITES\""
      },
      hi: {
        logo: "कृषि सहायक",
        search: "खोजें...",
        loginBtn: "लॉगिन",
        updates: "🌦️ मौसम चेतावनी: कल बिहार में भारी वर्षा की संभावना | 🌱 सरकारी अपडेट: छोटे किसानों के लिए नई सब्सिडी योजना शुरू",
        aim: "उद्देश्य",
        vision: "दृष्टि",
        contact: "संपर्क",
        heroTitle: "किसानों की प्रगति में सहायक - कृषि सहायक",
        soilTitle: "मिट्टी एवं फसल सलाह",
        soilDesc: "तुरंत मिट्टी और फसल की सलाह प्राप्त करें।",
        checkNow: "जांचें",
        pestTitle: "कीट एवं रोग",
        pestDesc: "फसल में कीट और रोग जल्दी पहचानें।",
        weatherTitle: "मौसम चेतावनी",
        weatherDesc: "स्थानीय मौसम की जानकारी प्राप्त करें।",
        viewWeather: "मौसम देखें",
        marketTitle: "बाजार भाव",
        marketDesc: "स्थानीय बाजारों में दैनिक फसल भाव देखें।",
        viewPrices: "भाव देखें",
        schemeTitle: "सरकारी योजनाएँ",
        schemeDesc: "सहायता और सब्सिडी की जानकारी प्राप्त करें।",
        viewSchemes: "योजनाएँ देखें",
        footer: "© 2025 कृषि सहायक | किसानों के लिए बनाया गया",
        loginTitle: "लॉगिन",
        username: "उपयोगकर्ता नाम",
        password: "पासवर्ड",
        loginBtnModal: "लॉगिन",
        chatHeader: "कृषि सहायक से चैट करें",
        chatPlaceholder: "संदेश टाइप करें...",
        sendBtn: "भेजें",
        aimTitle: "उद्देश्य",
        aimDesc: "किसानों को स्मार्ट, सरल और बहुभाषी मार्गदर्शन देकर बेहतर फसल उगाने, कीटों से लड़ने और आय बढ़ाने में सक्षम बनाना—कभी भी, कहीं भी।",
        visionTitle: "दृष्टि",
        visionDesc: "हर किसान को सरल, उपयोग में आसान डिजिटल मार्गदर्शन प्रदान करना।\nफसल, मिट्टी, मौसम और कीटों पर समय पर सलाह देना।\nकिसानों को उत्पादन बढ़ाने, नुकसान कम करने और अधिक कमाई में मदद करना।\nहर किसी के लिए स्थानीय भाषाओं में तकनीक को सुलभ बनाना।\nभारत भर में एक स्मार्ट, मजबूत और टिकाऊ कृषि समुदाय का निर्माण करना।",
        contactTitle: "संपर्क",
        contactDesc: "\"S24 - टेक एलाइट्स\""
      }
    };

    function changeLanguage(lang) {
      document.querySelectorAll("[data-key]").forEach(el => {
        let key = el.getAttribute("data-key");
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translations[lang][key];
        } else {
          el.innerText = translations[lang][key];
        }
      });
    }

    function openModal(id) {
      document.getElementById(id).style.display = "block";
    }

    function closeModal(id) {
      document.getElementById(id).style.display = "none";
    }

    window.onclick = function(event) {
      const modals = document.querySelectorAll(".modal");
      modals.forEach(modal => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    }

    function toggleChatbot() {
      let box = document.getElementById("chatbot-box");
      box.style.display = box.style.display === "block" ? "none" : "block";
    }

    function sendMessage() {
      let input = document.getElementById("chatInput");
      let msg = input.value.trim();
      if (msg) {
        let chatBody = document.getElementById("chatBody");
        let userMsg = document.createElement("p");
        userMsg.textContent = "👤 " + msg;
        chatBody.appendChild(userMsg);

        let reply = document.createElement("p");
        if (msg.toLowerCase().includes("crop")) {
          reply.textContent = "🌱 Please enter your crop type for advice.";
        } else {
          reply.textContent = "🤖 Thanks for your message!";
        }
        chatBody.appendChild(reply);
        chatBody.scrollTop = chatBody.scrollHeight;
        input.value = "";
      }
    }
