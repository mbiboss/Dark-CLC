const translations = {
    en: {
        appTitle: 'Dark CLC Pro',
        advancedCalculator: 'Advanced Scientific Calculator',
        functions50: '50+ Functions',
        matrixTools: 'Matrix & Unit Tools',
        offlineReady: 'Offline Ready',
        tapContinue: 'Tap anywhere to continue',
        angleMode: 'Angle Mode',
        installApp: 'Install App',
        changeTheme: 'Change Theme',
        history: 'History',
        showSteps: 'Show Steps',
        help: 'Help',
        standardMode: 'Standard Mode',
        copyResult: 'Copy',
        copiedSuccess: 'Copied!',
        tabs: {
            basic: 'Basic',
            advanced: 'Advanced',
            programmer: 'Programmer',
            equations: 'Equations',
            statistics: 'Statistics',
            matrix: 'Matrix',
            constants: 'Constants',
            conversion: 'Conversion',
            formulas: 'Formulas',
            examples: 'Examples',
            geometry: 'Geometry',
            percentage: 'Percentage',
            fraction: 'Fraction'
        },
        quadraticSolver: 'Quadratic Equation Solver',
        coefficientA: 'Coefficient a:',
        coefficientB: 'Coefficient b:',
        coefficientC: 'Coefficient c:',
        solveEquation: 'Solve Equation',
        reset: 'Reset',
        statisticalAnalysis: 'Statistical Analysis',
        enterNumbers: 'Enter numbers (comma-separated):',
        calculate: 'Calculate',
        matrixCalculator: 'Matrix Calculator (2x2)',
        matrixA: 'Matrix A',
        matrixB: 'Matrix B',
        baseConverter: 'Base Converter',
        enterNumber: 'Enter number',
        bitwiseOperations: 'Bitwise Operations',
        selectTheme: 'Select Theme',
        close: 'Close',
        clearHistory: 'Clear History',
        noHistory: 'No calculation history yet',
        helpTitle: 'Calculator Help',
        languageToggle: 'বাংলা',
        learningMode: 'Learning Mode',
        studentFriendly: 'Student Friendly',
        educationalTools: 'Educational Tools',
        stepsTitle: 'Step-by-Step Solution',
        emptySteps: 'Perform a calculation to see step-by-step breakdown'
    },
    bn: {
        appTitle: 'Dark CLC Pro',
        advancedCalculator: 'উন্নত বৈজ্ঞানিক ক্যালকুলেটর',
        functions50: '৫০+ ফাংশন',
        matrixTools: 'ম্যাট্রিক্স ও ইউনিট টুলস',
        offlineReady: 'অফলাইন প্রস্তুত',
        tapContinue: 'চালিয়ে যেতে যেকোনো জায়গায় ট্যাপ করুন',
        angleMode: 'কোণ মোড',
        installApp: 'অ্যাপ ইনস্টল করুন',
        changeTheme: 'থিম পরিবর্তন করুন',
        history: 'ইতিহাস',
        showSteps: 'ধাপ দেখান',
        help: 'সাহায্য',
        standardMode: 'মানক মোড',
        copyResult: 'কপি',
        copiedSuccess: 'কপি হয়েছে!',
        tabs: {
            basic: 'মৌলিক',
            advanced: 'উন্নত',
            programmer: 'প্রোগ্রামার',
            equations: 'সমীকরণ',
            statistics: 'পরিসংখ্যান',
            matrix: 'ম্যাট্রিক্স',
            constants: 'ধ্রুবক',
            conversion: 'রূপান্তর',
            formulas: 'সূত্র',
            examples: 'উদাহরণ',
            geometry: 'জ্যামিতি',
            percentage: 'শতাংশ',
            fraction: 'ভগ্নাংশ'
        },
        quadraticSolver: 'দ্বিঘাত সমীকরণ সমাধানকারী',
        coefficientA: 'সহগ a:',
        coefficientB: 'সহগ b:',
        coefficientC: 'সহগ c:',
        solveEquation: 'সমীকরণ সমাধান করুন',
        reset: 'রিসেট',
        statisticalAnalysis: 'পরিসংখ্যান বিশ্লেষণ',
        enterNumbers: 'সংখ্যা লিখুন (কমা দিয়ে আলাদা):',
        calculate: 'গণনা করুন',
        matrixCalculator: 'ম্যাট্রিক্স ক্যালকুলেটর (২x২)',
        matrixA: 'ম্যাট্রিক্স A',
        matrixB: 'ম্যাট্রিক্স B',
        baseConverter: 'বেস রূপান্তরকারী',
        enterNumber: 'সংখ্যা লিখুন',
        bitwiseOperations: 'বিটওয়াইজ অপারেশন',
        selectTheme: 'থিম নির্বাচন করুন',
        close: 'বন্ধ করুন',
        clearHistory: 'ইতিহাস মুছুন',
        noHistory: 'এখনও কোনো গণনার ইতিহাস নেই',
        helpTitle: 'ক্যালকুলেটর সাহায্য',
        languageToggle: 'English',
        learningMode: 'শিক্ষা মোড',
        studentFriendly: 'শিক্ষার্থী বান্ধব',
        educationalTools: 'শিক্ষামূলক সরঞ্জাম',
        stepsTitle: 'ধাপে ধাপে সমাধান',
        emptySteps: 'ধাপে ধাপে বিভাজন দেখতে একটি গণনা করুন'
    }
};

class Calculator {
    constructor() {
        this.expression = '0';
        this.cursorPosition = 1;
        this.history = [];
        this.memory = 0;
        this.angleMode = 'DEG';
        this.lastAnswer = 0;
        this.currentTab = 'basic';
        this.theme = 'default';
        this.lastSteps = [];
        this.language = 'en';
        
        this.init();
        this.initMatrixRain();
        this.loadState();
        this.setupEventListeners();
        this.setupKeyboard();
        this.setupPWA();
        this.setupDisplayClick();
        this.updateLanguage();
    }
    
    initMatrixRain() {
        const canvas = document.getElementById('matrix-rain');
        const ctx = canvas.getContext('2d');
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        const fontSize = 14;
        let columns = Math.floor(canvas.width / fontSize);
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }
        
        const draw = () => {
            ctx.fillStyle = 'rgba(10, 14, 26, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'default';
            let matrixColor = '#00f5ff';
            
            if (currentTheme === 'emerald') matrixColor = '#10b981';
            else if (currentTheme === 'purple') matrixColor = '#a855f7';
            else if (currentTheme === 'crimson') matrixColor = '#ef4444';
            else if (currentTheme === 'amber') matrixColor = '#f59e0b';
            else if (currentTheme === 'white') matrixColor = '#f0f0f0';
            else if (currentTheme.startsWith('light')) matrixColor = '#0056d2';
            
            ctx.fillStyle = matrixColor;
            ctx.font = `${fontSize}px monospace`;
            
            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        
        setInterval(draw, 33);
        
        window.addEventListener('resize', () => {
            resizeCanvas();
            columns = Math.floor(canvas.width / fontSize);
            drops.length = 0;
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100;
            }
        });
    }

    init() {
        setTimeout(() => {
            const splashScreen = document.getElementById('splash-screen');
            splashScreen.addEventListener('click', () => {
                splashScreen.classList.remove('active');
                document.getElementById('app').classList.remove('hidden');
            });
        }, 100);
    }

    loadState() {
        const savedTheme = localStorage.getItem('calc-theme') || 'default';
        this.setTheme(savedTheme);

        const savedMemory = localStorage.getItem('calc-memory');
        if (savedMemory) this.memory = parseFloat(savedMemory);

        const savedAngle = localStorage.getItem('calc-angle');
        if (savedAngle) this.angleMode = savedAngle;

        const savedHistory = localStorage.getItem('calc-history');
        if (savedHistory) this.history = JSON.parse(savedHistory);

        const savedLanguage = localStorage.getItem('calc-language');
        if (savedLanguage) this.language = savedLanguage;

        this.updateMemoryDisplay();
        this.updateAngleDisplay();
        this.updateHistory();
        document.getElementById('modeInfo').textContent = `${this.angleMode} Mode`;
    }

    saveState() {
        localStorage.setItem('calc-theme', this.theme);
        localStorage.setItem('calc-memory', this.memory.toString());
        localStorage.setItem('calc-angle', this.angleMode);
        localStorage.setItem('calc-history', JSON.stringify(this.history));
        localStorage.setItem('calc-language', this.language);
    }

    toggleLanguage() {
        this.language = this.language === 'en' ? 'bn' : 'en';
        this.updateLanguage();
        this.saveState();
    }

    t(key) {
        const keys = key.split('.');
        let value = translations[this.language];
        for (const k of keys) {
            value = value[k];
            if (!value) return key;
        }
        return value;
    }

    updateLanguage() {
        document.querySelector('.app-title').textContent = this.t('appTitle');
        document.querySelector('.splash-subtitle').textContent = this.t('advancedCalculator');
        document.querySelector('.tap-continue').textContent = this.t('tapContinue');
        
        const badges = document.querySelectorAll('.badge');
        if (badges.length >= 3) {
            badges[0].textContent = this.t('functions50');
            badges[1].textContent = this.t('matrixTools');
            badges[2].textContent = this.t('offlineReady');
        }

        document.getElementById('angleModeBtn')?.setAttribute('title', this.t('angleMode'));
        document.getElementById('installBtn')?.setAttribute('title', this.t('installApp'));
        document.getElementById('themeBtn')?.setAttribute('title', this.t('changeTheme'));
        document.getElementById('historyBtn')?.setAttribute('title', this.t('history'));
        document.getElementById('stepsBtn')?.setAttribute('title', this.t('showSteps'));
        document.getElementById('helpBtn')?.setAttribute('title', this.t('help'));
        document.getElementById('langBtn')?.setAttribute('title', this.t('languageToggle'));

        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabs = ['basic', 'advanced', 'programmer', 'equations', 'statistics', 'matrix', 'constants', 'conversion', 'formulas', 'percentage', 'geometry', 'examples'];
        tabButtons.forEach((btn, idx) => {
            if (tabs[idx]) {
                btn.textContent = this.t(`tabs.${tabs[idx]}`);
            }
        });

        document.getElementById('copyResultBtn').textContent = this.t('copyResult');
        document.getElementById('modeInfo').textContent = this.t('standardMode');

        const quadHeader = document.querySelector('#equations-tab h3');
        if (quadHeader) quadHeader.textContent = this.t('quadraticSolver');

        const statsHeader = document.querySelector('#statistics-tab h3');
        if (statsHeader) statsHeader.textContent = this.t('statisticalAnalysis');

        const matrixHeader = document.querySelector('#matrix-tab h3');
        if (matrixHeader) matrixHeader.textContent = this.t('matrixCalculator');

        const baseHeader = document.querySelector('.base-section h3');
        if (baseHeader) baseHeader.textContent = this.t('baseConverter');

        const bitwiseHeader = document.querySelector('.bitwise-section h3');
        if (bitwiseHeader) bitwiseHeader.textContent = this.t('bitwiseOperations');

        const solveBtn = document.getElementById('solveQuadratic');
        if (solveBtn) solveBtn.textContent = this.t('solveEquation');

        const resetBtn = document.getElementById('resetQuadratic');
        if (resetBtn) resetBtn.textContent = this.t('reset');

        const calculateBtn = document.getElementById('calculateStats');
        if (calculateBtn) calculateBtn.textContent = this.t('calculate');

        const langText = document.getElementById('languageText');
        if (langText) langText.textContent = this.t('languageToggle');
    }

    setupEventListeners() {
        document.querySelectorAll('.calc-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleButton(btn));
        });

        document.querySelectorAll('.constant-card').forEach(btn => {
            btn.addEventListener('click', () => this.appendValue(btn.dataset.value));
        });

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        document.getElementById('angleModeBtn').addEventListener('click', () => this.toggleAngleMode());
        document.getElementById('languageBtn').addEventListener('click', () => this.toggleLanguage());
        document.getElementById('themeBtn').addEventListener('click', () => this.openThemeModal());
        document.getElementById('historyBtn').addEventListener('click', () => this.openHistory());
        document.getElementById('stepsBtn').addEventListener('click', () => this.openSteps());
        document.getElementById('helpBtn').addEventListener('click', () => this.openHelp());
        
        document.getElementById('closeHistoryBtn').addEventListener('click', () => this.closeHistory());
        document.getElementById('clearHistoryBtn').addEventListener('click', () => this.clearHistory());
        document.getElementById('closeStepsBtn').addEventListener('click', () => this.closeSteps());
        
        document.getElementById('closeHelpBtn').addEventListener('click', () => this.closeHelp());
        document.getElementById('closeThemeBtn').addEventListener('click', () => this.closeThemeModal());
        
        document.getElementById('showStepsHint')?.addEventListener('click', () => this.openSteps());

        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setTheme(btn.dataset.theme);
                this.closeThemeModal();
            });
        });

        this.setupConversions();
        this.setupBaseConverter();
        this.setupEquationSolver();
        this.setupStatistics();
        this.setupMatrix();
        this.setupCopyButton();
        this.setupPercentageCalculators();
        this.setupGeometryCalculators();
        this.setupAnimations();
    }

    setupAnimations() {
        // Ripple effect for all interactive buttons
        const rippleButtons = document.querySelectorAll('.calc-btn, .icon-btn, .solve-btn, .reset-btn, .matrix-btn, .calc-btn-secondary, .theme-option');
        
        rippleButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Success animation trigger
        this.showSuccessAnimation = () => {
            const resultDiv = document.getElementById('displayResult');
            if (resultDiv && resultDiv.textContent) {
                resultDiv.classList.add('success-check');
                setTimeout(() => {
                    resultDiv.classList.remove('success-check');
                }, 600);
            }
        };
    }

    setupBaseConverter() {
        const bases = ['dec', 'bin', 'oct', 'hex'];
        
        bases.forEach(base => {
            const input = document.getElementById(`base-${base}`);
            if (input) {
                input.addEventListener('input', (e) => {
                    const value = e.target.value.replace(/^(0b|0o|0x)/i, '');
                    let decimal;
                    
                    try {
                        if (base === 'dec') decimal = parseInt(value, 10);
                        else if (base === 'bin') decimal = parseInt(value, 2);
                        else if (base === 'oct') decimal = parseInt(value, 8);
                        else if (base === 'hex') decimal = parseInt(value, 16);
                        
                        if (!isNaN(decimal) && isFinite(decimal)) {
                            bases.forEach(b => {
                                if (b !== base) {
                                    const targetInput = document.getElementById(`base-${b}`);
                                    if (b === 'dec') targetInput.value = decimal.toString(10);
                                    else if (b === 'bin') targetInput.value = '0b' + decimal.toString(2);
                                    else if (b === 'oct') targetInput.value = '0o' + decimal.toString(8);
                                    else if (b === 'hex') targetInput.value = '0x' + decimal.toString(16).toUpperCase();
                                }
                            });
                        }
                    } catch (e) {}
                });
            }
        });
    }

    setupEquationSolver() {
        const solveBtn = document.getElementById('solveQuadratic');
        const resetBtn = document.getElementById('resetQuadratic');
        
        if (solveBtn) {
            solveBtn.addEventListener('click', () => this.solveQuadratic());
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetQuadratic());
        }
        
        // Sync inline inputs with detailed inputs
        const syncInputs = (fromId, toId) => {
            const from = document.getElementById(fromId);
            const to = document.getElementById(toId);
            if (from && to) {
                from.addEventListener('input', () => {
                    to.value = from.value;
                    this.updateEquationDisplay();
                });
            }
        };
        
        const syncInputsReverse = (fromId, toId) => {
            const from = document.getElementById(fromId);
            const to = document.getElementById(toId);
            if (from && to) {
                from.addEventListener('input', () => {
                    to.value = from.value;
                    this.updateEquationDisplay();
                });
            }
        };
        
        syncInputs('quad-a', 'quad-a-sync');
        syncInputs('quad-b', 'quad-b-sync');
        syncInputs('quad-c', 'quad-c-sync');
        
        syncInputsReverse('quad-a-sync', 'quad-a');
        syncInputsReverse('quad-b-sync', 'quad-b');
        syncInputsReverse('quad-c-sync', 'quad-c');
        
        // Auto-solve on Enter key
        ['quad-a', 'quad-b', 'quad-c', 'quad-a-sync', 'quad-b-sync', 'quad-c-sync'].forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.solveQuadratic();
                    }
                });
            }
        });
    }
    
    updateEquationDisplay() {
        const a = parseFloat(document.getElementById('quad-a').value) || 0;
        const b = parseFloat(document.getElementById('quad-b').value) || 0;
        const c = parseFloat(document.getElementById('quad-c').value) || 0;
        
        // Update operators based on signs
        const opB = document.getElementById('op-b');
        const opC = document.getElementById('op-c');
        
        if (opB) {
            opB.textContent = b >= 0 ? '+' : '−';
        }
        if (opC) {
            opC.textContent = c >= 0 ? '+' : '−';
        }
    }
    
    resetQuadratic() {
        document.getElementById('quad-a').value = '1';
        document.getElementById('quad-b').value = '0';
        document.getElementById('quad-c').value = '0';
        document.getElementById('quad-a-sync').value = '1';
        document.getElementById('quad-b-sync').value = '0';
        document.getElementById('quad-c-sync').value = '0';
        document.getElementById('quadResult').innerHTML = '';
        this.updateEquationDisplay();
    }

    solveQuadratic() {
        const a = parseFloat(document.getElementById('quad-a').value);
        const b = parseFloat(document.getElementById('quad-b').value);
        const c = parseFloat(document.getElementById('quad-c').value);
        const resultDiv = document.getElementById('quadResult');
        
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            resultDiv.innerHTML = '<p class="error">Please enter valid numbers for all coefficients!</p>';
            return;
        }
        
        if (a === 0) {
            resultDiv.innerHTML = '<p class="error">Coefficient "a" cannot be zero! This would not be a quadratic equation.</p>';
            return;
        }
        
        const discriminant = b * b - 4 * a * c;
        
        let html = '<div class="solution-steps">';
        
        // Step 1: Given equation
        html += `<div class="step-item">`;
        html += `<span class="step-number">1</span>`;
        html += `<strong>Given Equation</strong>`;
        html += `<div class="step-formula">${a}x² ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c} = 0</div>`;
        html += `<div class="step-description">Standard form: ax² + bx + c = 0 where a = ${a}, b = ${b}, c = ${c}</div>`;
        html += `</div>`;
        
        // Step 2: Quadratic formula
        html += `<div class="step-item">`;
        html += `<span class="step-number">2</span>`;
        html += `<strong>Quadratic Formula</strong>`;
        html += `<div class="step-formula">x = (-b ± √(b² - 4ac)) / (2a)</div>`;
        html += `<div class="step-description">Use the quadratic formula to find the roots</div>`;
        html += `</div>`;
        
        // Step 3: Calculate discriminant
        html += `<div class="step-item">`;
        html += `<span class="step-number">3</span>`;
        html += `<strong>Calculate Discriminant (Δ)</strong>`;
        html += `<div class="step-formula">Δ = b² - 4ac = (${b})² - 4(${a})(${c})</div>`;
        html += `<div class="step-formula">Δ = ${b * b} - ${4 * a * c} = ${discriminant}</div>`;
        
        if (discriminant > 0) {
            html += `<div class="step-description"><span class="success">✓ Δ > 0: Two distinct real solutions exist</span></div>`;
        } else if (discriminant === 0) {
            html += `<div class="step-description"><span class="success">✓ Δ = 0: One repeated real solution exists</span></div>`;
        } else {
            html += `<div class="step-description"><span class="warning">⚠ Δ < 0: Two complex conjugate solutions exist</span></div>`;
        }
        html += `</div>`;
        
        // Step 4: Solve
        html += `<div class="step-item">`;
        html += `<span class="step-number">4</span>`;
        html += `<strong>Find Solutions</strong>`;
        
        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            html += `<div class="step-formula">x₁ = (${-b} + √${discriminant}) / ${2 * a} = ${x1.toFixed(6)}</div>`;
            html += `<div class="step-formula">x₂ = (${-b} - √${discriminant}) / ${2 * a} = ${x2.toFixed(6)}</div>`;
            html += `<div class="step-result success">✓ Solutions: x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}</div>`;
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            html += `<div class="step-formula">x = ${-b} / ${2 * a} = ${x.toFixed(6)}</div>`;
            html += `<div class="step-result success">✓ Solution: x = ${x.toFixed(4)} (repeated root)</div>`;
        } else {
            const realPart = -b / (2 * a);
            const imagPart = Math.sqrt(-discriminant) / (2 * a);
            html += `<div class="step-formula">x = ${-b} / ${2 * a} ± i√${-discriminant} / ${2 * a}</div>`;
            html += `<div class="step-formula">x₁ = ${realPart.toFixed(4)} + ${imagPart.toFixed(4)}i</div>`;
            html += `<div class="step-formula">x₂ = ${realPart.toFixed(4)} - ${imagPart.toFixed(4)}i</div>`;
            html += `<div class="step-result warning">⚠ Complex Solutions: x₁ = ${realPart.toFixed(4)} + ${imagPart.toFixed(4)}i, x₂ = ${realPart.toFixed(4)} - ${imagPart.toFixed(4)}i</div>`;
        }
        html += `</div>`;
        
        html += '</div>';
        resultDiv.innerHTML = html;
    }

    setupStatistics() {
        const calcBtn = document.getElementById('calculateStats');
        if (calcBtn) {
            calcBtn.addEventListener('click', () => this.calculateStatistics());
        }
    }

    calculateStatistics() {
        const input = document.getElementById('statsData').value;
        const resultDiv = document.getElementById('statsResults');
        
        const numbers = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        
        if (numbers.length === 0) {
            resultDiv.innerHTML = '<p class="error">Please enter valid numbers!</p>';
            return;
        }
        
        numbers.sort((a, b) => a - b);
        
        const sum = numbers.reduce((a, b) => a + b, 0);
        const mean = sum / numbers.length;
        
        const median = numbers.length % 2 === 0
            ? (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2
            : numbers[Math.floor(numbers.length / 2)];
        
        const freq = {};
        numbers.forEach(n => freq[n] = (freq[n] || 0) + 1);
        const maxFreq = Math.max(...Object.values(freq));
        const modes = Object.keys(freq).filter(k => freq[k] === maxFreq);
        const mode = modes.length === numbers.length ? 'No mode' : modes.join(', ');
        
        const variance = numbers.reduce((sum, n) => sum + Math.pow(n - mean, 2), 0) / numbers.length;
        const stdDev = Math.sqrt(variance);
        
        let html = '<div class="stats-result-grid">';
        html += `<div class="stat-item"><span>Count:</span><strong>${numbers.length}</strong></div>`;
        html += `<div class="stat-item"><span>Sum:</span><strong>${sum.toFixed(4)}</strong></div>`;
        html += `<div class="stat-item"><span>Mean (μ):</span><strong>${mean.toFixed(4)}</strong></div>`;
        html += `<div class="stat-item"><span>Median:</span><strong>${median.toFixed(4)}</strong></div>`;
        html += `<div class="stat-item"><span>Mode:</span><strong>${mode}</strong></div>`;
        html += `<div class="stat-item"><span>Min:</span><strong>${numbers[0]}</strong></div>`;
        html += `<div class="stat-item"><span>Max:</span><strong>${numbers[numbers.length - 1]}</strong></div>`;
        html += `<div class="stat-item"><span>Range:</span><strong>${(numbers[numbers.length - 1] - numbers[0]).toFixed(4)}</strong></div>`;
        html += `<div class="stat-item"><span>Variance (σ²):</span><strong>${variance.toFixed(4)}</strong></div>`;
        html += `<div class="stat-item"><span>Std Dev (σ):</span><strong>${stdDev.toFixed(4)}</strong></div>`;
        html += '</div>';
        
        resultDiv.innerHTML = html;
    }

    setupMatrix() {
        const operations = ['Add', 'Subtract', 'Multiply', 'Determinant', 'Inverse', 'Transpose'];
        operations.forEach(op => {
            const btn = document.getElementById(`matrix${op}`);
            if (btn) {
                btn.addEventListener('click', () => this.performMatrixOperation(op.toLowerCase()));
            }
        });
    }

    performMatrixOperation(operation) {
        const getMatrix = (prefix) => {
            return [
                [parseFloat(document.getElementById(`${prefix}11`).value), parseFloat(document.getElementById(`${prefix}12`).value)],
                [parseFloat(document.getElementById(`${prefix}21`).value), parseFloat(document.getElementById(`${prefix}22`).value)]
            ];
        };
        
        const A = getMatrix('a');
        const B = getMatrix('b');
        const resultDiv = document.getElementById('matrixResult');
        let result;
        
        try {
            if (operation === 'add') {
                result = [
                    [A[0][0] + B[0][0], A[0][1] + B[0][1]],
                    [A[1][0] + B[1][0], A[1][1] + B[1][1]]
                ];
            } else if (operation === 'subtract') {
                result = [
                    [A[0][0] - B[0][0], A[0][1] - B[0][1]],
                    [A[1][0] - B[1][0], A[1][1] - B[1][1]]
                ];
            } else if (operation === 'multiply') {
                result = [
                    [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
                    [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]]
                ];
            } else if (operation === 'determinant') {
                const det = A[0][0] * A[1][1] - A[0][1] * A[1][0];
                resultDiv.innerHTML = `<div class="matrix-display"><p><strong>Determinant of A:</strong> ${det.toFixed(4)}</p></div>`;
                return;
            } else if (operation === 'inverse') {
                const det = A[0][0] * A[1][1] - A[0][1] * A[1][0];
                if (det === 0) {
                    resultDiv.innerHTML = '<p class="error">Matrix is singular (determinant = 0), no inverse exists!</p>';
                    return;
                }
                result = [
                    [A[1][1] / det, -A[0][1] / det],
                    [-A[1][0] / det, A[0][0] / det]
                ];
            } else if (operation === 'transpose') {
                result = [
                    [A[0][0], A[1][0]],
                    [A[0][1], A[1][1]]
                ];
            }
            
            let html = '<div class="matrix-display">';
            html += '<div class="result-matrix">';
            html += `<div class="matrix-row">${result[0][0].toFixed(4)} ${result[0][1].toFixed(4)}</div>`;
            html += `<div class="matrix-row">${result[1][0].toFixed(4)} ${result[1][1].toFixed(4)}</div>`;
            html += '</div>';
            html += '</div>';
            
            resultDiv.innerHTML = html;
        } catch (e) {
            resultDiv.innerHTML = '<p class="error">Error performing matrix operation!</p>';
        }
    }

    setupCopyButton() {
        const copyBtn = document.getElementById('copyResultBtn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                const result = this.expression;
                navigator.clipboard.writeText(result).then(() => {
                    copyBtn.textContent = '✓ Copied!';
                    setTimeout(() => {
                        copyBtn.textContent = '📋 Copy';
                    }, 2000);
                });
            });
        }
    }

    setupConversions() {
        const conversions = ['length', 'temperature', 'weight', 'volume'];
        
        conversions.forEach(type => {
            const input = document.getElementById(`${type}-input`);
            const fromSelect = document.getElementById(`${type}-from`);
            const toSelect = document.getElementById(`${type}-to`);
            
            if (input && fromSelect && toSelect) {
                input.addEventListener('input', () => this.convert(type));
                fromSelect.addEventListener('change', () => this.convert(type));
                toSelect.addEventListener('change', () => this.convert(type));
                
                this.convert(type);
            }
        });
    }

    setupDisplayClick() {
        const displayExpr = document.getElementById('displayExpression');
        displayExpr.style.cursor = 'text';
        displayExpr.addEventListener('click', (e) => {
            const text = this.expression;
            const element = e.target;
            const rect = element.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            
            // Estimate cursor position based on click location
            const charWidth = rect.width / text.length;
            this.cursorPosition = Math.min(Math.max(0, Math.round(clickX / charWidth)), text.length);
            this.updateDisplay();
        });
    }

    convert(type) {
        const input = document.getElementById(`${type}-input`);
        const output = document.getElementById(`${type}-output`);
        const fromSelect = document.getElementById(`${type}-from`);
        const toSelect = document.getElementById(`${type}-to`);
        
        const value = parseFloat(input.value) || 0;
        
        if (type === 'temperature') {
            const fromUnit = fromSelect.value;
            const toUnit = toSelect.value;
            
            let celsius;
            if (fromUnit === 'C') celsius = value;
            else if (fromUnit === 'F') celsius = (value - 32) * 5/9;
            else if (fromUnit === 'K') celsius = value - 273.15;
            
            let result;
            if (toUnit === 'C') result = celsius;
            else if (toUnit === 'F') result = celsius * 9/5 + 32;
            else if (toUnit === 'K') result = celsius + 273.15;
            
            output.value = result.toFixed(2);
        } else {
            const fromFactor = parseFloat(fromSelect.value);
            const toFactor = parseFloat(toSelect.value);
            const result = (value * fromFactor) / toFactor;
            output.value = result.toFixed(6).replace(/\.?0+$/, '');
        }
    }

    setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            // Don't interfere with input fields - let them handle their own keyboard events
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            const key = e.key;
            
            if (key >= '0' && key <= '9') {
                this.appendValue(key);
                e.preventDefault();
            } else if (key === '.') {
                this.appendValue('.');
                e.preventDefault();
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                this.appendValue(key);
                e.preventDefault();
            } else if (key === '(' || key === ')') {
                this.appendValue(key);
                e.preventDefault();
            } else if (key === 'Enter') {
                this.calculate();
                e.preventDefault();
            } else if (key === 'Escape') {
                this.clear();
                e.preventDefault();
            } else if (key === 'Backspace') {
                this.backspace();
                e.preventDefault();
            } else if (key === 'Delete') {
                this.deleteAtCursor();
                e.preventDefault();
            } else if (key === 'ArrowLeft') {
                this.moveCursor(-1);
                e.preventDefault();
            } else if (key === 'ArrowRight') {
                this.moveCursor(1);
                e.preventDefault();
            } else if (key === 'Home') {
                this.cursorPosition = 0;
                this.updateDisplay();
                e.preventDefault();
            } else if (key === 'End') {
                this.cursorPosition = this.expression.length;
                this.updateDisplay();
                e.preventDefault();
            } else if (key === '?') {
                this.openHelp();
                e.preventDefault();
            }
        });
    }

    setupPWA() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('Service Worker registered'))
                .catch(err => console.log('Service Worker registration failed'));
        }

        let deferredPrompt;
        const installBtn = document.getElementById('installBtn');

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            installBtn.style.display = 'flex';
        });

        installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                deferredPrompt = null;
                installBtn.style.display = 'none';
            }
        });
    }

    handleButton(btn) {
        const action = btn.dataset.action;
        const value = btn.dataset.value;

        if (action === 'clear') {
            this.clear();
        } else if (action === 'delete') {
            this.backspace();
        } else if (action === 'equals') {
            this.calculate();
        } else if (action === 'mc') {
            this.memory = 0;
            this.updateMemoryDisplay();
            this.saveState();
        } else if (action === 'mr') {
            this.expression = this.memory.toString();
            this.updateDisplay();
        } else if (action === 'm+') {
            this.memory += this.evaluateExpression(this.expression);
            this.updateMemoryDisplay();
            this.saveState();
        } else if (action === 'm-') {
            this.memory -= this.evaluateExpression(this.expression);
            this.updateMemoryDisplay();
            this.saveState();
        } else if (action === 'ans') {
            this.appendValue(this.lastAnswer.toString());
        } else if (action === 'rand') {
            this.appendValue(Math.random().toString());
        } else if (value) {
            this.appendValue(value);
        }
    }

    appendValue(value) {
        if (this.expression === '0' && value !== '.') {
            this.expression = value;
            this.cursorPosition = value.length;
        } else {
            const before = this.expression.slice(0, this.cursorPosition);
            const after = this.expression.slice(this.cursorPosition);
            this.expression = before + value + after;
            this.cursorPosition += value.length;
        }
        this.updateDisplay(true);
        this.calculatePreview();
    }

    formatDisplayExpression(expr) {
        // Replace ^2 and ^3 with superscript characters for display
        let formatted = expr.replace(/\^2/g, '²').replace(/\^3/g, '³');
        
        // Replace inverse trig functions with superscript -1
        formatted = formatted.replace(/asin\(/g, 'sin⁻¹(');
        formatted = formatted.replace(/acos\(/g, 'cos⁻¹(');
        formatted = formatted.replace(/atan\(/g, 'tan⁻¹(');
        
        // Replace other exponents with superscript characters
        const superscripts = {
            '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
            '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
            '-': '⁻', '+': '⁺', '(': '⁽', ')': '⁾'
        };
        
        // Replace ^(expression) or ^digit with superscript
        formatted = formatted.replace(/\^([0-9\-\+\(\)]+)/g, (match, exp) => {
            return exp.split('').map(char => superscripts[char] || char).join('');
        });
        
        return formatted;
    }

    clear() {
        const displayExpr = document.getElementById('displayExpression');
        displayExpr.style.opacity = '0';
        displayExpr.style.transform = 'scale(0.8)';
        displayExpr.style.transition = 'all 0.2s ease';
        
        setTimeout(() => {
            this.expression = '0';
            this.cursorPosition = 1;
            this.updateDisplay();
            document.getElementById('displayResult').textContent = '';
            displayExpr.style.opacity = '1';
            displayExpr.style.transform = 'scale(1)';
            
            setTimeout(() => {
                displayExpr.style.transition = '';
            }, 200);
        }, 200);
    }

    backspace() {
        if (this.cursorPosition > 0) {
            this.updateDisplay(false, true);
            
            setTimeout(() => {
                const before = this.expression.slice(0, this.cursorPosition - 1);
                const after = this.expression.slice(this.cursorPosition);
                this.expression = before + after;
                this.cursorPosition--;
                
                if (this.expression === '') {
                    this.expression = '0';
                    this.cursorPosition = 1;
                }
                
                this.updateDisplay();
                this.calculatePreview();
            }, 150);
        }
    }

    deleteAtCursor() {
        if (this.cursorPosition < this.expression.length) {
            const displayExpr = document.getElementById('displayExpression');
            const charToDelete = this.expression.charAt(this.cursorPosition);
            const before = this.expression.slice(0, this.cursorPosition);
            const after = this.expression.slice(this.cursorPosition + 1);
            
            displayExpr.innerHTML = before + `<span class="display-char-delete">${charToDelete}</span>` + '<span class="cursor"></span>' + after;
            
            setTimeout(() => {
                this.expression = before + after;
                
                if (this.expression === '') {
                    this.expression = '0';
                    this.cursorPosition = 1;
                }
                
                this.updateDisplay();
                this.calculatePreview();
            }, 150);
        }
    }

    moveCursor(direction) {
        this.cursorPosition = Math.max(0, Math.min(this.expression.length, this.cursorPosition + direction));
        this.updateDisplay();
    }

    calculate() {
        const originalExpr = this.expression;
        const displayExpr = document.getElementById('displayExpression');
        const displayResult = document.getElementById('displayResult');
        
        // Add calculating shimmer effect
        displayExpr.classList.add('calculating');
        displayResult.innerHTML = '<span class="loading-spinner"></span>';
        
        // Simulate brief calculation time for visual feedback
        setTimeout(() => {
            try {
                this.lastSteps = this.generateSteps(originalExpr);
                const result = this.evaluateExpression(originalExpr);
                
                this.history.unshift({
                    expression: originalExpr,
                    result: result.toString(),
                    timestamp: Date.now()
                });
                
                if (this.history.length > 50) {
                    this.history = this.history.slice(0, 50);
                }
                
                this.lastAnswer = result;
                document.getElementById('displayHistory').textContent = originalExpr;
                this.expression = this.formatNumber(result);
                this.cursorPosition = this.expression.length;
                
                // Remove calculating effect
                displayExpr.classList.remove('calculating');
                this.updateDisplay();
                displayResult.textContent = '';
                
                // Show success animation if available
                if (this.showSuccessAnimation) {
                    this.showSuccessAnimation();
                }
                
                document.getElementById('showStepsHint').style.display = 'block';
                
                this.saveState();
                this.updateHistory();
            } catch (error) {
                // Remove calculating effect first
                displayExpr.classList.remove('calculating');
                displayExpr.classList.add('error-shake');
                displayResult.textContent = 'Error';
                displayResult.classList.add('error');
                
                setTimeout(() => {
                    displayExpr.classList.remove('error-shake');
                    displayResult.classList.remove('error');
                }, 500);
            }
        }, 300);
    }

    generateSteps(expr) {
        const steps = [];
        
        // Step 1: Initial Expression
        steps.push({
            description: 'Initial Expression',
            formula: this.formatDisplayExpression(expr),
            explanation: 'Mathematical expression to be evaluated',
            note: 'We will break this down step-by-step following mathematical order of operations'
        });

        // Detect and explain trigonometric functions
        if (expr.includes('sin(') || expr.includes('cos(') || expr.includes('tan(')) {
            const angleConversions = {
                'DEG': { name: 'Degrees', factor: 'π/180', example: '90° = π/2 rad' },
                'RAD': { name: 'Radians', factor: '1', example: 'π rad = 180°' },
                'GRAD': { name: 'Gradians', factor: 'π/200', example: '100 grad = 90°' }
            };
            const mode = angleConversions[this.angleMode];
            
            steps.push({
                description: `Trigonometric Functions (${mode.name} Mode)`,
                explanation: `All angle measurements are interpreted as ${mode.name.toLowerCase()}`,
                formula: `Conversion factor: ${mode.factor} radians`,
                note: `Example: ${mode.example}\nTrigonometric ratios: sin(θ) = opposite/hypotenuse, cos(θ) = adjacent/hypotenuse, tan(θ) = opposite/adjacent`
            });
        }

        // Detect inverse trigonometric functions
        if (expr.includes('asin(') || expr.includes('acos(') || expr.includes('atan(')) {
            steps.push({
                description: 'Inverse Trigonometric Functions',
                explanation: 'These functions return the angle whose trigonometric ratio equals the input',
                note: 'Domain restrictions: arcsin & arccos require input ∈ [-1, 1]\narctan accepts all real numbers\nOutputs are in current angle mode'
            });
        }

        // Detect hyperbolic functions
        if (expr.includes('sinh(') || expr.includes('cosh(') || expr.includes('tanh(')) {
            steps.push({
                description: 'Hyperbolic Functions',
                explanation: 'Analogous to trigonometric functions but for hyperbolas instead of circles',
                formula: 'sinh(x) = (eˣ - e⁻ˣ)/2, cosh(x) = (eˣ + e⁻ˣ)/2, tanh(x) = sinh(x)/cosh(x)',
                note: 'Used extensively in calculus, physics (relativity), and engineering (catenary curves)'
            });
        }

        // Factorial explanation
        if (expr.includes('!')) {
            const factMatch = expr.match(/(\d+)!/);
            if (factMatch) {
                const n = parseInt(factMatch[1]);
                const result = this.factorial(n);
                let calculation = '';
                if (n <= 6) {
                    calculation = Array.from({length: n}, (_, i) => n - i).join(' × ');
                } else {
                    calculation = `${n} × ${n-1} × ${n-2} × ... × 2 × 1`;
                }
                
                steps.push({
                    description: `Factorial: ${n}!`,
                    formula: `${n}! = ${calculation}`,
                    result: `= ${result}`,
                    explanation: `The product of all positive integers from 1 to ${n}`,
                    note: `Factorial grows extremely fast: 10! = 3,628,800\nUsed in: permutations, combinations, probability, Taylor series\n0! = 1 by definition`
                });
            }
        }

        // Exponentiation
        if (expr.includes('^')) {
            steps.push({
                description: 'Exponentiation (Power Operations)',
                explanation: 'Raising a base to an exponent: baseⁿ means base multiplied by itself n times',
                formula: 'xⁿ = x × x × x × ... × x (n times)',
                note: 'Properties: xᵃ · xᵇ = xᵃ⁺ᵇ, (xᵃ)ᵇ = xᵃᵇ, x⁰ = 1, x⁻ⁿ = 1/xⁿ\nSpecial cases: x² (squared), x³ (cubed)'
            });
        }

        // Square root
        if (expr.includes('sqrt(')) {
            steps.push({
                description: 'Square Root (√)',
                explanation: 'The square root of x is the number that, when multiplied by itself, equals x',
                formula: '√x = x^(1/2), where (√x)² = x',
                note: 'Properties: √(ab) = √a · √b, √(a/b) = √a / √b\n√x² = |x| (absolute value)\nOnly real solutions for x ≥ 0'
            });
        }

        // Cube root
        if (expr.includes('cbrt(')) {
            steps.push({
                description: 'Cube Root (∛)',
                explanation: 'The cube root of x is the number that, when cubed, equals x',
                formula: '∛x = x^(1/3), where (∛x)³ = x',
                note: 'Unlike square roots, cube roots of negative numbers are real: ∛(-8) = -2'
            });
        }

        // Logarithms (base 10)
        if (expr.includes('log(')) {
            steps.push({
                description: 'Common Logarithm (log₁₀)',
                explanation: 'The logarithm base 10: log₁₀(x) asks "10 to what power equals x?"',
                formula: 'If y = log₁₀(x), then 10ʸ = x',
                note: 'Properties: log(ab) = log(a) + log(b), log(a/b) = log(a) - log(b)\nlog(xⁿ) = n·log(x), log(10) = 1, log(1) = 0\nExamples: log(100) = 2 (since 10² = 100), log(1000) = 3'
            });
        }

        // Natural logarithm
        if (expr.includes('ln(')) {
            steps.push({
                description: 'Natural Logarithm (ln or logₑ)',
                explanation: 'The logarithm base e (Euler\'s number ≈ 2.71828)',
                formula: 'If y = ln(x), then eʸ = x',
                note: 'Properties: ln(ab) = ln(a) + ln(b), ln(a/b) = ln(a) - ln(b)\nln(eˣ) = x, e^(ln(x)) = x, ln(e) = 1, ln(1) = 0\nThe derivative of ln(x) is 1/x, making it fundamental in calculus'
            });
        }

        // Exponential function
        if (expr.includes('exp(') || expr.includes('10^') || expr.includes('Math.E')) {
            steps.push({
                description: 'Exponential Functions',
                explanation: 'Functions of the form aˣ where the variable is in the exponent',
                formula: 'eˣ = 1 + x + x²/2! + x³/3! + ... (Taylor series)',
                note: 'e ≈ 2.71828 is Euler\'s number, the base of natural logarithms\nProperty: (eˣ)′ = eˣ (derivative equals itself)\nUsed in: compound interest, population growth, radioactive decay'
            });
        }

        // Absolute value
        if (expr.includes('abs(')) {
            steps.push({
                description: 'Absolute Value |x|',
                explanation: 'The distance of a number from zero, always non-negative',
                formula: '|x| = x if x ≥ 0, |x| = -x if x < 0',
                note: 'Properties: |ab| = |a|·|b|, |a/b| = |a|/|b|\n|a + b| ≤ |a| + |b| (triangle inequality)'
            });
        }

        // Rounding functions
        if (expr.includes('floor(') || expr.includes('ceil(') || expr.includes('round(')) {
            steps.push({
                description: 'Rounding Functions',
                explanation: 'Different methods of approximating to the nearest integer',
                formula: '⌊x⌋ (floor) = largest integer ≤ x\n⌈x⌉ (ceiling) = smallest integer ≥ x\nround(x) = nearest integer',
                note: 'Examples: ⌊3.7⌋ = 3, ⌈3.2⌉ = 4, round(3.5) = 4\nFor negative numbers: ⌊-2.3⌋ = -3, ⌈-2.3⌉ = -2'
            });
        }

        // GCD and LCM
        if (expr.includes('gcd(') || expr.includes('lcm(')) {
            steps.push({
                description: 'GCD & LCM',
                explanation: 'GCD (Greatest Common Divisor): largest number that divides both numbers\nLCM (Least Common Multiple): smallest number divisible by both numbers',
                formula: 'GCD(a,b) × LCM(a,b) = a × b',
                note: 'Euclidean algorithm for GCD: repeatedly divide and take remainder\nUsed in: fraction simplification, solving Diophantine equations, cryptography'
            });
        }

        // Constants substitution
        let processedExpr = expr;
        let constantsUsed = [];
        
        if (processedExpr.includes('Math.PI') || processedExpr.includes('π')) {
            constantsUsed.push('π ≈ 3.14159265359 (ratio of circle\'s circumference to diameter)');
            processedExpr = processedExpr.replace(/Math\.PI/g, Math.PI.toFixed(8));
            processedExpr = processedExpr.replace(/π/g, Math.PI.toFixed(8));
        }
        
        if (processedExpr.includes('Math.E')) {
            constantsUsed.push('e ≈ 2.71828182846 (Euler\'s number, base of natural logarithm)');
            processedExpr = processedExpr.replace(/Math\.E/g, Math.E.toFixed(8));
        }
        
        if (constantsUsed.length > 0) {
            steps.push({
                description: 'Mathematical Constants',
                explanation: constantsUsed.join('\n'),
                formula: processedExpr !== expr ? this.formatDisplayExpression(processedExpr) : undefined,
                note: 'These are irrational numbers (infinite non-repeating decimals) fundamental to mathematics'
            });
        }

        // Order of operations
        if (expr.match(/[\+\-\*\/]/) || expr.match(/[\(\)]/)) {
            steps.push({
                description: 'Order of Operations (PEMDAS/BODMAS)',
                explanation: 'Mathematical operations must be performed in a specific order',
                formula: '1. Parentheses (Brackets)\n2. Exponents (Orders)\n3. Multiplication & Division (left to right)\n4. Addition & Subtraction (left to right)',
                note: 'Mnemonic: Please Excuse My Dear Aunt Sally\nOperations at the same level are evaluated left to right\nParentheses can override this order'
            });
        }

        // Final calculation
        try {
            const result = this.evaluateExpression(expr);
            const formattedResult = this.formatNumber(result);
            
            steps.push({
                description: 'Final Computation',
                result: formattedResult,
                explanation: 'After applying all mathematical rules and operations',
                note: result > 1e10 || (Math.abs(result) < 1e-6 && result !== 0) 
                    ? 'Result shown in scientific notation for clarity' 
                    : 'Result is displayed with appropriate precision'
            });

            // Add context for the result
            if (!isNaN(result) && isFinite(result)) {
                let resultContext = [];
                
                if (Math.abs(result) < 0.001 && result !== 0) {
                    resultContext.push('Very small number, approaching zero');
                } else if (Math.abs(result) > 1000000) {
                    resultContext.push('Very large number');
                }
                
                if (Number.isInteger(result) && result >= 0 && result <= 100) {
                    resultContext.push(`Percentage interpretation: ${result}%`);
                }
                
                if (resultContext.length > 0) {
                    steps.push({
                        description: 'Result Context',
                        explanation: resultContext.join('\n'),
                        note: 'Understanding the magnitude and meaning of your result'
                    });
                }
            }
        } catch (e) {
            steps.push({
                description: 'Error in Calculation',
                explanation: 'The expression could not be evaluated',
                note: 'Common causes: division by zero, invalid input for function (e.g., √(-1)), syntax error'
            });
        }

        return steps;
    }

    calculatePreview() {
        try {
            const result = this.evaluateExpression(this.expression);
            if (!isNaN(result) && isFinite(result)) {
                document.getElementById('displayResult').textContent = '= ' + this.formatNumber(result);
            }
        } catch (error) {
            document.getElementById('displayResult').textContent = '';
        }
    }

    evaluateExpression(expr) {
        let processedExpr = expr;
        
        processedExpr = processedExpr.replace(/π/g, 'Math.PI');
        processedExpr = processedExpr.replace(/e(?![x0-9])/g, 'Math.E');
        processedExpr = processedExpr.replace(/×/g, '*');
        processedExpr = processedExpr.replace(/÷/g, '/');
        processedExpr = processedExpr.replace(/−/g, '-');
        
        processedExpr = processedExpr.replace(/(\d+)!/g, (match, n) => {
            return this.factorial(parseInt(n));
        });
        
        processedExpr = processedExpr.replace(/(\d+\.?\d*)\^2/g, 'Math.pow($1,2)');
        processedExpr = processedExpr.replace(/(\d+\.?\d*)\^3/g, 'Math.pow($1,3)');
        processedExpr = processedExpr.replace(/(\d+\.?\d*)\^(\d+\.?\d*)/g, 'Math.pow($1,$2)');
        
        processedExpr = processedExpr.replace(/10\^/g, 'Math.pow(10,');
        
        processedExpr = processedExpr.replace(/sin\(/g, 'this.sin(');
        processedExpr = processedExpr.replace(/cos\(/g, 'this.cos(');
        processedExpr = processedExpr.replace(/tan\(/g, 'this.tan(');
        processedExpr = processedExpr.replace(/asin\(/g, 'this.asin(');
        processedExpr = processedExpr.replace(/acos\(/g, 'this.acos(');
        processedExpr = processedExpr.replace(/atan\(/g, 'this.atan(');
        
        processedExpr = processedExpr.replace(/sinh\(/g, 'Math.sinh(');
        processedExpr = processedExpr.replace(/cosh\(/g, 'Math.cosh(');
        processedExpr = processedExpr.replace(/tanh\(/g, 'Math.tanh(');
        processedExpr = processedExpr.replace(/asinh\(/g, 'Math.asinh(');
        processedExpr = processedExpr.replace(/acosh\(/g, 'Math.acosh(');
        processedExpr = processedExpr.replace(/atanh\(/g, 'Math.atanh(');
        
        processedExpr = processedExpr.replace(/log\(/g, 'Math.log10(');
        processedExpr = processedExpr.replace(/ln\(/g, 'Math.log(');
        processedExpr = processedExpr.replace(/sqrt\(/g, 'Math.sqrt(');
        processedExpr = processedExpr.replace(/cbrt\(/g, 'Math.cbrt(');
        processedExpr = processedExpr.replace(/exp\(/g, 'Math.exp(');
        processedExpr = processedExpr.replace(/abs\(/g, 'Math.abs(');
        processedExpr = processedExpr.replace(/floor\(/g, 'Math.floor(');
        processedExpr = processedExpr.replace(/ceil\(/g, 'Math.ceil(');
        processedExpr = processedExpr.replace(/round\(/g, 'Math.round(');
        
        processedExpr = processedExpr.replace(/gcd\((\d+),(\d+)\)/g, (match, a, b) => {
            return this.gcd(parseInt(a), parseInt(b));
        });
        
        processedExpr = processedExpr.replace(/lcm\((\d+),(\d+)\)/g, (match, a, b) => {
            return this.lcm(parseInt(a), parseInt(b));
        });
        
        const result = Function('"use strict"; return (' + processedExpr + ')').call(this);
        return result;
    }

    sin(x) {
        return Math.sin(this.toRadians(x));
    }

    cos(x) {
        return Math.cos(this.toRadians(x));
    }

    tan(x) {
        return Math.tan(this.toRadians(x));
    }

    asin(x) {
        return this.fromRadians(Math.asin(x));
    }

    acos(x) {
        return this.fromRadians(Math.acos(x));
    }

    atan(x) {
        return this.fromRadians(Math.atan(x));
    }

    toRadians(degrees) {
        if (this.angleMode === 'DEG') {
            return degrees * Math.PI / 180;
        } else if (this.angleMode === 'RAD') {
            return degrees;
        } else {
            return degrees * Math.PI / 200;
        }
    }

    fromRadians(radians) {
        if (this.angleMode === 'DEG') {
            return radians * 180 / Math.PI;
        } else if (this.angleMode === 'RAD') {
            return radians;
        } else {
            return radians * 200 / Math.PI;
        }
    }

    factorial(n) {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }

    lcm(a, b) {
        return Math.abs(a * b) / this.gcd(a, b);
    }

    formatNumber(num) {
        if (Math.abs(num) > 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
            return num.toExponential(6);
        }
        
        const str = num.toString();
        if (str.length > 12) {
            return parseFloat(num.toPrecision(10)).toString();
        }
        return str;
    }

    updateDisplay(animateNew = false, animateDelete = false) {
        const displayExpr = document.getElementById('displayExpression');
        const before = this.formatDisplayExpression(this.expression.slice(0, this.cursorPosition));
        const after = this.formatDisplayExpression(this.expression.slice(this.cursorPosition));
        
        if (animateNew && this.cursorPosition > 0) {
            const lastChar = before.slice(-1);
            const beforeWithoutLast = before.slice(0, -1);
            displayExpr.innerHTML = beforeWithoutLast + `<span class="display-char">${lastChar}</span>` + '<span class="cursor"></span>' + after;
        } else if (animateDelete && this.cursorPosition > 0) {
            const charToDelete = before.slice(-1);
            const beforeWithoutLast = before.slice(0, -1);
            displayExpr.innerHTML = beforeWithoutLast + `<span class="display-char-delete">${charToDelete}</span>` + '<span class="cursor"></span>' + after;
        } else {
            displayExpr.innerHTML = before + '<span class="cursor"></span>' + after;
        }
    }

    updateMemoryDisplay() {
        const indicator = document.getElementById('memoryIndicator');
        if (this.memory !== 0) {
            indicator.textContent = 'M';
        } else {
            indicator.textContent = '';
        }
    }

    updateAngleDisplay() {
        document.getElementById('angleModeText').textContent = this.angleMode;
        document.getElementById('modeInfo').textContent = `${this.angleMode} Mode`;
    }

    toggleAngleMode() {
        const modes = ['DEG', 'RAD', 'GRAD'];
        const currentIndex = modes.indexOf(this.angleMode);
        this.angleMode = modes[(currentIndex + 1) % modes.length];
        this.updateAngleDisplay();
        this.saveState();
    }

    switchTab(tab) {
        this.currentTab = tab;
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
        
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tab}-tab`).classList.add('active');
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-theme="${theme}"]`)?.classList.add('active');
        
        this.saveState();
    }

    openHistory() {
        document.getElementById('historyPanel').classList.add('open');
    }

    closeHistory() {
        document.getElementById('historyPanel').classList.remove('open');
    }

    openSteps() {
        this.updateSteps();
        document.getElementById('stepsPanel').classList.add('open');
    }

    closeSteps() {
        document.getElementById('stepsPanel').classList.remove('open');
    }

    updateSteps() {
        const content = document.getElementById('stepsContent');
        
        // Update panel title
        const stepsHeader = document.querySelector('#stepsPanel .panel-header h2');
        if (stepsHeader) stepsHeader.textContent = this.t('stepsTitle');
        
        if (this.lastSteps.length === 0) {
            content.innerHTML = `<p class="empty-message">${this.t('emptySteps')}</p>`;
            return;
        }
        
        content.innerHTML = this.lastSteps.map((step, index) => `
            <div class="step-item">
                <div>
                    <span class="step-number">${index + 1}</span>
                    <strong>${step.description}</strong>
                </div>
                ${step.formula ? `<div class="step-formula">${step.formula}</div>` : ''}
                ${step.result ? `<div class="step-result">${step.result}</div>` : ''}
                ${step.explanation ? `<div class="step-description">${step.explanation}</div>` : ''}
                ${step.note ? `<div class="step-description"><em>Note: ${step.note}</em></div>` : ''}
            </div>
        `).join('');
    }

    updateHistory() {
        const content = document.getElementById('historyContent');
        
        if (this.history.length === 0) {
            content.innerHTML = '<p class="empty-message">No history yet</p>';
            return;
        }
        
        content.innerHTML = this.history.map(item => `
            <div class="history-item" onclick="calc.useHistoryItem('${item.expression}')">
                <div class="history-expression">${item.expression}</div>
                <div class="history-result">= ${item.result}</div>
            </div>
        `).join('');
    }

    useHistoryItem(expression) {
        this.expression = expression;
        this.cursorPosition = this.expression.length;
        this.updateDisplay();
        this.closeHistory();
    }

    clearHistory() {
        if (confirm('Clear all history?')) {
            this.history = [];
            this.updateHistory();
            this.saveState();
        }
    }

    openHelp() {
        document.getElementById('helpModal').classList.add('open');
    }

    closeHelp() {
        document.getElementById('helpModal').classList.remove('open');
    }

    openThemeModal() {
        document.getElementById('themeModal').classList.add('open');
    }

    closeThemeModal() {
        document.getElementById('themeModal').classList.remove('open');
    }

    setupPercentageCalculators() {
        document.getElementById('calcPct1')?.addEventListener('click', () => {
            const x = parseFloat(document.getElementById('pct-x1').value);
            const y = parseFloat(document.getElementById('pct-y1').value);
            const result = (x / 100) * y;
            document.getElementById('pctResult1').innerHTML = `<strong>${x}% of ${y} = ${result.toFixed(2)}</strong>`;
        });

        document.getElementById('calcPct2')?.addEventListener('click', () => {
            const x = parseFloat(document.getElementById('pct-x2').value);
            const y = parseFloat(document.getElementById('pct-y2').value);
            const result = (x / y) * 100;
            document.getElementById('pctResult2').innerHTML = `<strong>${x} is ${result.toFixed(2)}% of ${y}</strong>`;
        });

        document.getElementById('calcPct3')?.addEventListener('click', () => {
            const from = parseFloat(document.getElementById('pct-from').value);
            const to = parseFloat(document.getElementById('pct-to').value);
            const change = ((to - from) / from) * 100;
            const changeType = change >= 0 ? 'increase' : 'decrease';
            document.getElementById('pctResult3').innerHTML = `<strong>${Math.abs(change).toFixed(2)}% ${changeType}</strong><br>From ${from} to ${to}`;
        });
    }

    setupGeometryCalculators() {
        document.getElementById('calcCircle')?.addEventListener('click', () => {
            const r = parseFloat(document.getElementById('circle-r').value);
            const area = Math.PI * r * r;
            const circumference = 2 * Math.PI * r;
            document.getElementById('circleResults').innerHTML = `
                <div><strong>Area:</strong> ${area.toFixed(2)}</div>
                <div><strong>Circumference:</strong> ${circumference.toFixed(2)}</div>
            `;
        });

        document.getElementById('calcRect')?.addEventListener('click', () => {
            const l = parseFloat(document.getElementById('rect-l').value);
            const w = parseFloat(document.getElementById('rect-w').value);
            const area = l * w;
            const perimeter = 2 * (l + w);
            document.getElementById('rectResults').innerHTML = `
                <div><strong>Area:</strong> ${area.toFixed(2)}</div>
                <div><strong>Perimeter:</strong> ${perimeter.toFixed(2)}</div>
            `;
        });

        document.getElementById('calcTri')?.addEventListener('click', () => {
            const b = parseFloat(document.getElementById('tri-b').value);
            const h = parseFloat(document.getElementById('tri-h').value);
            const area = 0.5 * b * h;
            document.getElementById('triResults').innerHTML = `
                <div><strong>Area:</strong> ${area.toFixed(2)}</div>
            `;
        });

        document.getElementById('calcSphere')?.addEventListener('click', () => {
            const r = parseFloat(document.getElementById('sphere-r').value);
            const volume = (4/3) * Math.PI * Math.pow(r, 3);
            const surfaceArea = 4 * Math.PI * r * r;
            document.getElementById('sphereResults').innerHTML = `
                <div><strong>Volume:</strong> ${volume.toFixed(2)}</div>
                <div><strong>Surface Area:</strong> ${surfaceArea.toFixed(2)}</div>
            `;
        });

        document.getElementById('calcCyl')?.addEventListener('click', () => {
            const r = parseFloat(document.getElementById('cyl-r').value);
            const h = parseFloat(document.getElementById('cyl-h').value);
            const volume = Math.PI * r * r * h;
            const surfaceArea = 2 * Math.PI * r * (r + h);
            document.getElementById('cylResults').innerHTML = `
                <div><strong>Volume:</strong> ${volume.toFixed(2)}</div>
                <div><strong>Surface Area:</strong> ${surfaceArea.toFixed(2)}</div>
            `;
        });

        document.getElementById('calcCube')?.addEventListener('click', () => {
            const a = parseFloat(document.getElementById('cube-a').value);
            const volume = Math.pow(a, 3);
            const surfaceArea = 6 * a * a;
            document.getElementById('cubeResults').innerHTML = `
                <div><strong>Volume:</strong> ${volume.toFixed(2)}</div>
                <div><strong>Surface Area:</strong> ${surfaceArea.toFixed(2)}</div>
            `;
        });
    }
}

const calc = new Calculator();
