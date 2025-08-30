// Multi-language support system
class I18n {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.translations = {};
        this.loadTranslations();
    }

    detectLanguage() {
        // Check URL parameter first
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && this.isValidLanguage(langParam)) {
            return langParam;
        }

        // Check localStorage
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && this.isValidLanguage(savedLang)) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.isValidLanguage(browserLang)) {
            return browserLang;
        }

        // Default to English (changed from Chinese)
        return 'en';
    }

    isValidLanguage(lang) {
        return ['en', 'zh', 'es', 'fr', 'de', 'ja', 'ko'].includes(lang);
    }

    loadTranslations() {
        this.translations = {
            en: {
                // Header
                'site.title': 'IP Security Score',
                'site.tagline': 'Professional IP Security Assessment Platform',
                'nav.myip': 'My IP',
                'nav.api': 'API',
                'nav.history': 'History',
                'input.placeholder': 'Enter IP address to check',
                'button.check': 'Check',

                // Loading
                'loading.title': 'Scanning Your IP...',
                'loading.steps': {
                    0: 'Initializing security engine...',
                    1: 'Fetching IP address information...',
                    2: 'Checking threat intelligence databases...',
                    3: 'Analyzing network fingerprint...',
                    4: 'Performing proxy detection...',
                    5: 'Verifying geographic location...',
                    6: 'Generating security score...',
                    7: 'Preparing detailed report...'
                },

                // Main Cards
                'card.ip.title': 'Your IP Address',
                'card.ip.howto': 'How to change IP?',
                'card.score.title': 'Security Score',
                'card.score.evaluating': 'Evaluating...',

                // Security Status
                'status.excellent': 'Excellent Security',
                'status.good': 'Good Security',
                'status.average': 'Average Security',
                'status.poor': 'Security Risk',

                // Threat Intelligence
                'card.threats.title': '🛡️ Threat Intelligence Detection',
                'threats.malware': 'Malware Database',
                'threats.spam': 'Spam Lists',
                'threats.botnet': 'Botnet',
                'threats.attack': 'Attack Source IP',
                'threats.phishing': 'Phishing Websites',
                'status.checking': 'Checking',
                'status.clear': 'Clear',
                'status.threat': 'Threat',

                // Proxy Detection
                'card.proxy.title': '🔍 Proxy/VPN Detection',
                'proxy.type': 'Type:',
                'proxy.anonymity': 'Anonymity Level:',
                'proxy.protocol': 'Proxy Protocol:',
                'proxy.risk': 'Risk Level:',
                'proxy.direct': 'Direct',
                'proxy.high': 'High',
                'proxy.medium': 'Medium',
                'proxy.low': 'Low',
                'proxy.none': 'None',

                // Location Info
                'card.location.title': '📍 Geographic Location',
                'location.ip': 'IP:',
                'location.country': 'Country:',
                'location.state': 'State:',
                'location.city': 'City:',
                'location.zip': 'ZIP:',
                'location.timezone': 'Timezone:',
                'location.org': 'Organization:',
                'location.isp': 'ISP:',
                'location.asn': 'ASN:',

                // Network Info
                'card.network.title': '🌐 Network Information',
                'network.dns': 'DNS Servers',
                'network.timezone': 'Timezone Information',
                'network.performance': 'Network Performance',
                'network.localtime': 'Local time:',
                'network.browsertime': 'Browser time:',
                'network.latency': 'Latency:',
                'network.mtu': 'MTU:',

                // Device Fingerprint
                'card.fingerprint.title': '🔬 Device Fingerprint Analysis',
                'fingerprint.browser': 'Browser Information',
                'fingerprint.useragent': 'User Agent:',
                'fingerprint.webdriver': 'WebDriver:',
                'fingerprint.language': 'Language:',
                'fingerprint.colordepth': 'Color Depth:',
                'fingerprint.memory': 'Device Memory:',
                'fingerprint.concurrency': 'Concurrency:',
                'fingerprint.resolution': 'Resolution:',

                // Advanced Checks
                'card.advanced.title': '⚡ Advanced Security Checks',
                'advanced.webrtc': 'WebRTC Detection',
                'advanced.portscan': 'Port Scan',
                'advanced.tips': 'Security Recommendations',
                'button.startscan': 'Start Scan',
                'button.rescan': 'Rescan',
                'portscan.testing': 'Testing network connectivity...',
                'portscan.progress': 'Detection progress:',
                'portscan.note': 'Note: Due to browser security restrictions, this shows service reachability tests rather than actual port scanning.',

                // Debug Panel
                'debug.title': '🔍 Scoring Debug Information',
                'debug.overview': '📈 Score Overview',
                'debug.initial': 'Initial Score:',
                'debug.final': 'Final Score:',
                'debug.risks': 'Risk Factors:',
                'debug.deductions': '🔍 Deduction Details',
                'debug.norisk': '✅ No risk factors found, maintaining perfect score!',
                'debug.status': '📋 Detection Status',
                'debug.threats': 'Threat Intelligence:',
                'debug.proxy': 'Proxy/VPN Detection:',
                'debug.geo': 'Geographic Detection:',
                'debug.isp': 'ISP Analysis:',
                'debug.comparison': '💡 Comparison Analysis',
                'debug.ipscore': 'ip-score.com score:',
                'debug.ourscore': 'Our score:',
                'debug.difference': 'Difference reason:',
                'debug.consistent': 'Scores are consistent',
                'debug.hasdeductions': 'Deductions exist as shown above',

                // Security Tips
                'tips.vpn': 'Consider using VPN services to improve network security',
                'tips.risks': 'Your IP has security risks, consider changing network environment',
                'tips.automation': 'Automation tools detected, may affect privacy security',
                'tips.safe': 'Your network environment is relatively safe, maintain good habits',

                // Proxy Types
                'proxytype.datacenter': 'Data Center',
                'proxytype.cloud': 'Cloud Server',
                'proxytype.vpn': 'VPN Service',
                'proxytype.hosting': 'Hosting Service',
                'proxytype.overseas': 'Overseas Hosting',
                'proxytype.direct': 'Direct Connection',

                // Geographic Status
                'geo.consistent': 'Location Consistent',
                'geo.inconsistent': 'Location Anomaly',
                'geo.severe': 'Severe Location Anomaly',

                // ISP Analysis
                'isp.normal': 'Normal ISP',
                'isp.cloud': 'Cloud Provider IP',
                'isp.hosting': 'Hosting Provider IP',

                // Common
                'common.unknown': 'Unknown',
                'common.detecting': 'Detecting...',
                'common.na': 'N/A',
                'common.none': 'None',
                'common.retest': '🔄 Retest',
                'common.loading': 'Loading...',

                // Footer
                'footer.text': '© 2024 IP Security Score. Professional IP Security Assessment Service | Protecting Your Network Security'
            },

            zh: {
                // Header  
                'site.title': 'IP安全评分',
                'site.tagline': '专业的IP安全威胁评估平台',
                'nav.myip': '我的IP',
                'nav.api': 'API',
                'nav.history': '检测历史',
                'input.placeholder': '输入IP地址检测',
                'button.check': '检测',

                // Loading
                'loading.title': '正在扫描您的IP...',
                'loading.steps': {
                    0: '初始化安全引擎...',
                    1: '获取IP地址信息...',  
                    2: '检查威胁情报数据库...',
                    3: '分析网络指纹...',
                    4: '执行代理检测...',
                    5: '验证地理位置...',
                    6: '生成安全评分...',
                    7: '准备详细报告...'
                },

                // Main Cards
                'card.ip.title': '您的IP地址',
                'card.ip.howto': '如何修改IP？',
                'card.score.title': '安全评分',
                'card.score.evaluating': '评分中...',

                // Security Status
                'status.excellent': '安全优秀',
                'status.good': '安全良好',
                'status.average': '安全一般',
                'status.poor': '存在风险',

                // Threat Intelligence
                'card.threats.title': '🛡️ 威胁情报检测',
                'threats.malware': '恶意软件数据库',
                'threats.spam': '垃圾邮件列表',
                'threats.botnet': '僵尸网络',
                'threats.attack': '攻击源IP',
                'threats.phishing': '钓鱼网站',
                'status.checking': '检测中',
                'status.clear': '安全',
                'status.threat': '威胁',

                // Proxy Detection
                'card.proxy.title': '🔍 代理/VPN检测',
                'proxy.type': '类型:',
                'proxy.anonymity': '匿名级别:',
                'proxy.protocol': '代理协议:',
                'proxy.risk': '风险等级:',
                'proxy.direct': '直连',
                'proxy.high': '高',
                'proxy.medium': '中',
                'proxy.low': '低',
                'proxy.none': '无',

                // Location Info
                'card.location.title': '📍 地理位置信息',
                'location.ip': 'IP:',
                'location.country': '国家:',
                'location.state': '省/州:',
                'location.city': '城市:',
                'location.zip': '邮编:',
                'location.timezone': '时区:',
                'location.org': '组织:',
                'location.isp': 'ISP:',
                'location.asn': 'ASN:',

                // Network Info
                'card.network.title': '🌐 网络信息',
                'network.dns': 'DNS服务器',
                'network.timezone': '时区信息',
                'network.performance': '网络性能',
                'network.localtime': '本地时间:',
                'network.browsertime': '浏览器时间:',
                'network.latency': '延迟:',
                'network.mtu': 'MTU:',

                // Device Fingerprint
                'card.fingerprint.title': '🔬 设备指纹分析',
                'fingerprint.browser': '浏览器信息',
                'fingerprint.useragent': 'User Agent:',
                'fingerprint.webdriver': 'WebDriver:',
                'fingerprint.language': '语言:',
                'fingerprint.colordepth': '颜色深度:',
                'fingerprint.memory': '设备内存:',
                'fingerprint.concurrency': '并发数:',
                'fingerprint.resolution': '分辨率:',

                // Advanced Checks
                'card.advanced.title': '⚡ 高级安全检测',
                'advanced.webrtc': 'WebRTC检测',
                'advanced.portscan': '端口扫描',
                'advanced.tips': '安全建议',
                'button.startscan': '开始扫描',
                'button.rescan': '重新扫描',

                // Debug Panel
                'debug.title': '🔍 评分调试信息',

                // Common
                'common.unknown': '未知',
                'common.detecting': '检测中...',
                'common.na': '不适用',
                'common.none': '无',
                'common.retest': '🔄 重新检测',
                'common.loading': '加载中...',

                'footer.text': '© 2024 IP Security Score. 专业的IP安全评估服务 | 保护您的网络安全'
            }
        };
    }

    t(key, params = {}) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        
        // Navigate through nested object structure
        for (const k of keys) {
            if (value && typeof value === 'object' && value.hasOwnProperty(k)) {
                value = value[k];
            } else {
                value = undefined;
                break;
            }
        }

        // Fallback to English if translation not found
        if (value === undefined && this.currentLang !== 'en') {
            let fallbackValue = this.translations.en;
            for (const k of keys) {
                if (fallbackValue && typeof fallbackValue === 'object' && fallbackValue.hasOwnProperty(k)) {
                    fallbackValue = fallbackValue[k];
                } else {
                    fallbackValue = undefined;
                    break;
                }
            }
            value = fallbackValue;
        }

        // If still no value found, return the key itself
        if (value === undefined) {
            return key;
        }

        // Replace parameters if value is a string
        if (typeof value === 'string') {
            Object.keys(params).forEach(param => {
                value = value.replace(`{${param}}`, params[param]);
            });
        }

        return value;
    }

    setLanguage(lang) {
        console.log('i18n.setLanguage called with:', lang);
        console.log('Is valid language:', this.isValidLanguage(lang));
        
        if (this.isValidLanguage(lang)) {
            console.log('Setting language from', this.currentLang, 'to', lang);
            this.currentLang = lang;
            localStorage.setItem('preferred-language', lang);
            document.documentElement.lang = lang;
            this.updatePageLanguage();
            console.log('Language set to:', this.currentLang);
        } else {
            console.error('Invalid language:', lang);
        }
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    updatePageLanguage() {
        console.log('updatePageLanguage called for language:', this.currentLang);
        
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        console.log('Found', elements.length, 'elements with data-i18n attribute');
        
        elements.forEach((element, index) => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            console.log(`Element ${index}: key="${key}", translation="${translation}"`);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update meta tags
        document.title = this.t('site.title') + ' - Professional IP Security Assessment Platform';
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            if (this.currentLang === 'zh') {
                metaDescription.content = '专业的IP地址安全检测平台，提供实时威胁情报分析、代理VPN检测、地理位置验证、设备指纹识别等多维度IP安全评估服务。';
            } else {
                metaDescription.content = 'Professional IP address security detection platform providing real-time threat intelligence analysis, proxy/VPN detection, geographic verification, device fingerprinting and multi-dimensional IP security assessment services.';
            }
        }
    }

    getAvailableLanguages() {
        return [
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'zh', name: '中文', flag: '🇨🇳' },
            { code: 'es', name: 'Español', flag: '🇪🇸' },
            { code: 'fr', name: 'Français', flag: '🇫🇷' },
            { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
            { code: 'ja', name: '日本語', flag: '🇯🇵' },
            { code: 'ko', name: '한국어', flag: '🇰🇷' }
        ];
    }
}

// Global i18n instance
window.i18n = new I18n();