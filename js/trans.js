document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('language-select');

    const translations = {
        en: {
            nav: {
                home: "Home",
                about: "About",
                projects: "Projects",
                certifications: "Certifications",
                education: "Education",
                contact: "Contact"
            },
            home: {
                title: "Hi, I'm <span>Sachin Sanap</span>",
                subtitle: "Python Developer | Web & Data Science Enthusiast | BCS Student",
                description: "Building web solutions with Python, PHP, and MySQL while diving into Data Science (Pandas, NumPy). Passionate about backend development, automation, and data-driven problem-solving. Open to collaborations and internships!",
                work:"Ready to work together?",
                contact_btn: "Get In Touch",
                cv_btn: "Download CV"
            },
            about: {
                title: "About Me",
                who: "Who I Am",
                who_text: "I'm a passionate developer specializing in Python, PHP, and full-stack web development, with hands-on experience in building responsive websites and backend systems. Currently pursuing my BCS degree, I thrive on transforming ideas into functional applications while continuously expanding my skills in Data Science and modern web technologies. <br><br>I love tackling challenges, experimenting with new tools, and refining my craft—one project at a time.",
                skills: "My Skills",
                frontend: "Frontend",
                backend: "Backend",
                other_tech: "Other Technologies",
                "Currently-learning": "Currently Learning",
                goals: "Career Goals",
                goals_text: "I aim to become a skilled Web Developer or Data Scientist. I enjoy building websites with Python, PHP, and JavaScript, and I’m also learning Data Science to work with data and machine learning. My goal is to grow in either field and create useful, real-world solutions."
            },
            projects: {
                title: "My Projects",
                project1: {
                    title: "Room Finder Platform",
                    description: "A web application where users can find and book rental rooms, as well as upload their own listings for others to rent."
                },
                project2: {
                    title: "Personal Portfolio Website",
                    description: "A professional online portfolio showcasing my web development skills and projects. This website highlights my expertise in creating responsive, user-friendly websites using modern technologies."
                },
                demo: "Live Demo",
                code: "Code"
            },
            certifications: {
                title: "Certifications",
                issued_by: "Issued by",
                cert1: {
                    title: "Masterclass: How OTT Platforms Handle Millions of Concurrent Viewers Using HLD",
                    date: "Completed: March 2025",
                    skills: "Skills: High-Level Design, Scalability"
                },
                cert2: {
                    title: "Career Counselling & Placement Program",
                    date: "Completed: January 2025",
                    skills: "Skills: Career Planning, Resume Building"
                }
            },
            education: {
                title: "Education",
                edu1: {
                    degree: "Secondary School Certificate (SSC)",
                    board: "Amravati Board",
                    completed: "Completed: 2020",
                    percentage: "Percentage: 78.60%"
                },
                edu2: {
                    degree: "Higher Secondary Certificate (HSC)",
                    board: "Amravati Board",
                    completed: "Completed: 2022",
                    percentage: "Percentage: 92%"
                },
                edu3: {
                    degree: "Bachelor of Computer Science (BCS)",
                    university: "Swami Ramanand Teerth Marathwada University, Nanded",
                    graduation: "Expected Graduation: 2025"
                }
            },
            contact: {
                title: "Get In Touch",
                info_title: "Contact Information",
                form: {
                    name: "Your Name",
                    email: "Your Email",
                    subject: "Subject",
                    message: "Your Message",
                    submit: "Send Message"
                }
            },
            footer: {
                copyright: "Sachin Sanap. All rights reserved."
            }
        },

        mr: {
            nav: {
                home: "मुख्यपृष्ठ",
                about: "माझ्याबद्दल",
                projects: "प्रकल्प",
                certifications: "प्रमाणपत्रे",
                education: "शिक्षण",
                contact: "संपर्क"
            },
            home: {
                title: "नमस्कार, मी <span>सचिन सनाप</span>",
                subtitle: "पायथन विकसक | वेब व डेटा सायन्स प्रेमी | बीसीएस विद्यार्थी",
                description: "Python, PHP आणि MySQL वापरून वेब सोल्यूशन्स तयार करत आहे आणि डेटा सायन्समध्ये (Pandas, NumPy) अनुभव घेत आहे. बॅकएंड डेव्हलपमेंट, ऑटोमेशन आणि डेटा-सेंट्रिक समस्यांचे निराकरण यामध्ये रुची आहे.",
                work: "एकत्र काम करण्यास तयार आहात का?",
                contact_btn: "संपर्क करा",
                cv_btn: "CV डाउनलोड करा"
            },
            about: {
                title: "माझ्याबद्दल",
                who: "मी कोण आहे",
                who_text: "मी एक उत्कट डेव्हलपर आहे जो Python, PHP आणि पूर्ण स्टॅक वेब डेव्हलपमेंटमध्ये माहिर आहे...",
                skills: "माझे कौशल्य",
                frontend: "फ्रंटएंड",
                backend: "बॅकएंड",
                other_tech: "इतर तंत्रज्ञान",
                "Currently-learning": "सध्या शिकत आहे",
                goals: "करिअर ध्येय",
                goals_text: "मी कुशल वेब डेव्हलपर किंवा डेटा सायंटिस्ट होण्याचे ध्येय ठेवतो..."
            },
            projects: {
                title: "माझे प्रकल्प",
                project1: {
                    title: "रूम फाइंडर प्लॅटफॉर्म",
                    description: "एक वेब अ‍ॅप्लिकेशन जिथे वापरकर्ते भाड्याने खोली शोधू शकतात आणि पोस्ट करू शकतात..."
                },
                project2: {
                    title: "वैयक्तिक पोर्टफोलिओ संकेतस्थळ",
                    description: "माझ्या वेब विकास कौशल्याचे आणि प्रकल्पांचे प्रदर्शन करणारे व्यावसायिक पोर्टफोलिओ..."
                },
                demo: "थेट डेमो",
                code: "कोड"
            },
            certifications: {
                title: "प्रमाणपत्रे",
                issued_by: "प्रदानकर्ता",
                cert1: {
                    title: "मास्टरक्लास: OTT प्लॅटफॉर्म्स उच्च प्रमाणात वापर कसे हाताळतात",
                    date: "पूर्ण: मार्च 2025",
                    skills: "कौशल्ये: हाय-लेव्हल डिझाईन, स्केलेबिलिटी"
                },
                cert2: {
                    title: "करिअर काउन्सेलिंग व प्लेसमेंट प्रोग्राम",
                    date: "पूर्ण: जानेवारी 2025",
                    skills: "कौशल्ये: करिअर नियोजन, रेज्युमे बिल्डिंग"
                }
            },
            education: {
                title: "शिक्षण",
                edu1: {
                    degree: "माध्यमिक शाळा प्रमाणपत्र (SSC)",
                    board: "अमरावती बोर्ड",
                    completed: "पूर्ण: 2020",
                    percentage: "टक्केवारी: 78.60%"
                },
                edu2: {
                    degree: "उच्च माध्यमिक प्रमाणपत्र (HSC)",
                    board: "अमरावती बोर्ड",
                    completed: "पूर्ण: 2022",
                    percentage: "टक्केवारी: 92%"
                },
                edu3: {
                    degree: "संगणक विज्ञान पदवी (BCS)",
                    university: "स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ, नांदेड",
                    graduation: "अपेक्षित पदवी प्राप्ती: 2025"
                }
            },
            contact: {
                title: "संपर्क साधा",
                info_title: "संपर्क माहिती",
                form: {
                    name: "तुमचे नाव",
                    email: "तुमचा ईमेल",
                    subject: "विषय",
                    message: "तुमचा संदेश",
                    submit: "संदेश पाठवा"
                }
            },
            footer: {
                copyright: "सचिन सनाप. सर्व हक्क राखीव."
            }
        }
    };

    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');

        elements.forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            let value = translations[lang];
            keys.forEach(k => value = value[k] || '');
            if (value) el.innerHTML = value;
        });

        placeholders.forEach(el => {
            const keys = el.getAttribute('data-i18n-placeholder').split('.');
            let value = translations[lang];
            keys.forEach(k => value = value[k] || '');
            if (value) el.setAttribute('placeholder', value);
        });
    }

    // Load the language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;

    // Apply the saved language when the page loads
    translatePage(savedLanguage);

    // Change language when selection changes
    languageSelect.addEventListener('change', function () {
        const selectedLanguage = this.value;
        // Save the selected language to localStorage
        localStorage.setItem('selectedLanguage', selectedLanguage);
        // Apply language change without reloading the page
        translatePage(selectedLanguage);
    });
});
