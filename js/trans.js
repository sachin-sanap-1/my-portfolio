// Language translation functionality
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.certifications": "Certifications",
        "nav.education": "Education",
        "nav.contact": "Contact",
        "home.title": "Hi, I'm <span>Sachin Sanap</span>",
        "home.subtitle": "Python Enthusiast & Web Developer (Fresher)",
        "home.description": "I build responsive websites and explore backend development with Python and PHP. Always learning and ready to take on new challenges.",
        "home.contact_btn": "Get In Touch",
        "home.cv_btn": "Download CV",
        "about.title": "About Me",
        "about.who": "Who I Am",
        "about.who_text": "I'm an aspiring full-stack web developer with a strong foundation in HTML, CSS, JavaScript, Python, and PHP. Currently pursuing my BCS, I'm passionate about turning ideas into real-world web applications. I enjoy learning new technologies, building projects, and growing my skills with every line of code.",
        "about.skills": "My Skills",
        "about.frontend": "Frontend",
        "about.backend": "Backend",
        "about.other_tech": "Other Technologies",
        "about.goals": "Career Goals",
        "about.goals_text": "My goal is to become a versatile full-stack developer who creates impactful web applications. I'm driven by a passion for coding, a desire to keep learning new technologies, and a commitment to contributing to meaningful projects that make a difference.",
        "projects.title": "My Projects",
        "projects.project1.title": "Room Finder Platform",
        "projects.project1.description": "A web application where users can find and book rental rooms, as well as upload their own listings for others to rent.",
        "projects.project2.title": "Personal Portfolio Website",
        "projects.project2.description": "A professional online portfolio showcasing my web development skills and projects. This website highlights my expertise in creating responsive, user-friendly websites using modern technologies.",
        "projects.demo": "Live Demo",
        "projects.code": "Code",
        "certifications.title": "Certifications",
        "certifications.issued_by": "Issued by: ",
        "certifications.cert1.title": "Masterclass: How OTT Platforms Handle Millions of Concurrent Viewers Using HLD",
        "certifications.cert1.date": "Completed: March 2025",
        "certifications.cert1.skills": "Skills: High-Level Design, Scalability",
        "certifications.cert2.title": "Career Counselling & Placement Program",
        "certifications.cert2.date": "Completed: January 2025",
        "certifications.cert2.skills": "Skills: Career Planning, Resume Building",
        "education.title": "Education",
        "education.edu1.degree": "Secondary School Certificate (SSC)",
        "education.edu1.board": "Amravati Board",
        "education.edu1.completed": "Completed: 2020",
        "education.edu1.percentage": "Percentage: 78.60%",
        "education.edu2.degree": "Higher Secondary Certificate (HSC)",
        "education.edu2.board": "Amravati Board",
        "education.edu2.completed": "Completed: 2022",
        "education.edu2.percentage": "Percentage: 92%",
        "education.edu3.degree": "Bachelor of Computer Science (BCS)",
        "education.edu3.university": "Swami Ramanand Teerth Marathwada University, Nanded",
        "education.edu3.graduation": "Expected Graduation: 2025",
        "contact.title": "Get In Touch",
        "contact.info_title": "Contact Information",
        "contact.form.name": "Your Name",
        "contact.form.email": "Your Email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your Message",
        "contact.form.submit": "Send Message",
        "footer.copyright": "Sachin Sanap. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service"
    },

    mr: {
        "nav.home": "होम",
        "nav.about": "माझ्याविषयी",
        "nav.projects": "प्रकल्प",
        "nav.certifications": "प्रमाणपत्रे",
        "nav.education": "शिक्षण",
        "nav.contact": "संपर्क",
        "home.title": "नमस्कार, मी सचिन सानप आहे",
        "home.subtitle": "पायथन उत्साही आणि वेब डेव्हलपर (फ्रेशर)",
        "home.description": "मी रिस्पॉन्सिव वेबसाइट्स तयार करतो आणि पायथन व PHP सह बॅकएंड डेव्हलपमेंट एक्सप्लोर करतो. नेहमी शिकत आहे आणि नवीन आव्हानांसाठी तयार आहे.",
        "home.contact_btn": "संपर्क साधा",
        "home.cv_btn": "सीव्ही डाउनलोड",
        "about.title": "माझ्याविषयी",
        "about.who": "मी कोण आहे",
        "about.who_text": "मी एक आकांक्षी फुल-स्टॅक वेब डेव्हलपर आहे ज्याला HTML, CSS, JavaScript, Python आणि PHP ची पक्की माहिती आहे. सध्या BCS करत आहे, मला कल्पनांना वास्तविक वेब अॅप्लिकेशनमध्ये रूपांतरित करण्याची आवड आहे. मला नवीन तंत्रज्ञान शिकणे, प्रकल्प तयार करणे आणि प्रत्येक कोड ओळीसह माझे कौशल्य वाढवणे आवडते.",
        "about.skills": "माझी कौशल्ये",
        "about.frontend": "फ्रंटएंड",
        "about.backend": "बॅकएंड",
        "about.other_tech": "इतर तंत्रज्ञान",
        "about.goals": "करिअर ध्येय",
        "about.goals_text": "माझे ध्येय एक बहुमुखी फुल-स्टॅक डेव्हलपर बनणे आहे जो परिणामकारक वेब अॅप्लिकेशन तयार करतो. मी कोडिंगच्या आवडीने, नवीन तंत्रज्ञान शिकण्याच्या इच्छेने आणि अर्थपूर्ण प्रकल्पांमध्ये योगदान देण्याच्या वचनबद्धतेने प्रेरित आहे.",
        "projects.title": "माझे प्रकल्प",
        "projects.project1.title": "रूम फाइंडर प्लॅटफॉर्म",
        "projects.project1.description": "एक वेब अॅप्लिकेशन जिथे वापरकर्ते भाड्याने खोल्या शोधू शकतात आणि बुक करू शकतात, तसेच इतरांसाठी भाड्याने देण्यासाठी स्वतःच्या याद्या अपलोड करू शकतात.",
        "projects.project2.title": "वैयक्तिक पोर्टफोलिओ वेबसाइट",
        "projects.project2.description": "माझे वेब डेव्हलपमेंट कौशल्य आणि प्रकल्प दर्शविणारे एक व्यावसायिक ऑनलाइन पोर्टफोलिओ. ही वेबसाइट आधुनिक तंत्रज्ञान वापरून रिस्पॉन्सिव, वापरकर्ता-मैत्रीपूर्ण वेबसाइट्स तयार करण्यातील माझे कौशल्य हायलाइट करते.",
        "projects.demo": "लाइव्ह डेमो",
        "projects.code": "कोड",
        "certifications.title": "प्रमाणपत्रे",
        "certifications.issued_by": "प्रदाता: ",
        "certifications.cert1.title": "मास्टरक्लास: OTT प्लॅटफॉर्म HLD वापरून लाखो समवर्ती प्रेक्षकांना कसे हाताळतात",
        "certifications.cert1.date": "पूर्ण: मार्च 2025",
        "certifications.cert1.skills": "कौशल्य: हाय-लेव्हल डिझाइन, स्केलेबिलिटी",
        "certifications.cert2.title": "करिअर कौन्सेलिंग आणि प्लेसमेंट प्रोग्राम",
        "certifications.cert2.date": "पूर्ण: जानेवारी 2025",
        "certifications.cert2.skills": "कौशल्य: करिअर नियोजन, रिज्यूम तयार करणे",
        "education.title": "शिक्षण",
        "education.edu1.degree": "सेकंडरी स्कूल सर्टिफिकेट (SSC)",
        "education.edu1.board": "अमरावती बोर्ड",
        "education.edu1.completed": "पूर्ण: 2020",
        "education.edu1.percentage": "टक्केवारी: 78.60%",
        "education.edu2.degree": "हायर सेकंडरी सर्टिफिकेट (HSC)",
        "education.edu2.board": "अमरावती बोर्ड",
        "education.edu2.completed": "पूर्ण: 2022",
        "education.edu2.percentage": "टक्केवारी: 92%",
        "education.edu3.degree": "बॅचलर ऑफ कॉम्प्युटर सायन्स (BCS)",
        "education.edu3.university": "स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ, नांदेड",
        "education.edu3.graduation": "अपेक्षित पदवी: 2025",
        "contact.title": "संपर्क साधा",
        "contact.info_title": "संपर्क माहिती",
        "contact.form.name": "तुमचे नाव",
        "contact.form.email": "तुमचा ईमेल",
        "contact.form.subject": "विषय",
        "contact.form.message": "तुमचा संदेश",
        "contact.form.submit": "संदेश पाठवा",
        "footer.copyright": "सचिन सनप. सर्व हक्क राखीव.",
        "footer.privacy": "गोपनीयता धोरण",
        "footer.terms": "सेवा अटी"
    }
};

// Language switcher functionality
document.getElementById('language-select').addEventListener('change', function() {
    const lang = this.value;
    changeLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n], [data-i18n-placeholder]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n') || element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', translations[lang][key]);
            } else if (element.hasAttribute('data-i18n-innerhtml')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}
// Apply saved language on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en'; // default to English
    document.getElementById('language-select').value = savedLang;
    changeLanguage(savedLang);
});
