// 平假名数据 - 分组排列
const hiraganaData = [
    // 元音
    [
        { kana: 'あ', romaji: 'a' },
        { kana: 'い', romaji: 'i' },
        { kana: 'う', romaji: 'u' },
        { kana: 'え', romaji: 'e' },
        { kana: 'お', romaji: 'o' }
    ],
    // K行
    [
        { kana: 'か', romaji: 'ka' },
        { kana: 'き', romaji: 'ki' },
        { kana: 'く', romaji: 'ku' },
        { kana: 'け', romaji: 'ke' },
        { kana: 'こ', romaji: 'ko' }
    ],
    // S行
    [
        { kana: 'さ', romaji: 'sa' },
        { kana: 'し', romaji: 'shi' },
        { kana: 'す', romaji: 'su' },
        { kana: 'せ', romaji: 'se' },
        { kana: 'そ', romaji: 'so' }
    ],
    // T行
    [
        { kana: 'た', romaji: 'ta' },
        { kana: 'ち', romaji: 'chi' },
        { kana: 'つ', romaji: 'tsu' },
        { kana: 'て', romaji: 'te' },
        { kana: 'と', romaji: 'to' }
    ],
    // N行
    [
        { kana: 'な', romaji: 'na' },
        { kana: 'に', romaji: 'ni' },
        { kana: 'ぬ', romaji: 'nu' },
        { kana: 'ね', romaji: 'ne' },
        { kana: 'の', romaji: 'no' }
    ],
    // H行
    [
        { kana: 'は', romaji: 'ha' },
        { kana: 'ひ', romaji: 'hi' },
        { kana: 'ふ', romaji: 'fu' },
        { kana: 'へ', romaji: 'he' },
        { kana: 'ほ', romaji: 'ho' }
    ],
    // M行
    [
        { kana: 'ま', romaji: 'ma' },
        { kana: 'み', romaji: 'mi' },
        { kana: 'む', romaji: 'mu' },
        { kana: 'め', romaji: 'me' },
        { kana: 'も', romaji: 'mo' }
    ],
    // Y行
    [
        { kana: 'や', romaji: 'ya' },
        { kana: 'ゆ', romaji: 'yu' },
        { kana: 'よ', romaji: 'yo' }
    ],
    // R行
    [
        { kana: 'ら', romaji: 'ra' },
        { kana: 'り', romaji: 'ri' },
        { kana: 'る', romaji: 'ru' },
        { kana: 'れ', romaji: 're' },
        { kana: 'ろ', romaji: 'ro' }
    ],
    // W行和N
    [
        { kana: 'わ', romaji: 'wa' },
        { kana: 'を', romaji: 'wo' },
        { kana: 'ん', romaji: 'n' }
    ],
    // 浊音G行
    [
        { kana: 'が', romaji: 'ga' },
        { kana: 'ぎ', romaji: 'gi' },
        { kana: 'ぐ', romaji: 'gu' },
        { kana: 'げ', romaji: 'ge' },
        { kana: 'ご', romaji: 'go' }
    ],
    // 浊音Z行
    [
        { kana: 'ざ', romaji: 'za' },
        { kana: 'じ', romaji: 'ji' },
        { kana: 'ず', romaji: 'zu' },
        { kana: 'ぜ', romaji: 'ze' },
        { kana: 'ぞ', romaji: 'zo' }
    ],
    // 浊音D行
    [
        { kana: 'だ', romaji: 'da' },
        { kana: 'ぢ', romaji: 'ji' },
        { kana: 'づ', romaji: 'zu' },
        { kana: 'で', romaji: 'de' },
        { kana: 'ど', romaji: 'do' }
    ],
    // 浊音B行
    [
        { kana: 'ば', romaji: 'ba' },
        { kana: 'び', romaji: 'bi' },
        { kana: 'ぶ', romaji: 'bu' },
        { kana: 'べ', romaji: 'be' },
        { kana: 'ぼ', romaji: 'bo' }
    ],
    // 半浊音P行
    [
        { kana: 'ぱ', romaji: 'pa' },
        { kana: 'ぴ', romaji: 'pi' },
        { kana: 'ぷ', romaji: 'pu' },
        { kana: 'ぺ', romaji: 'pe' },
        { kana: 'ぽ', romaji: 'po' }
    ],
    // 拗音KY行
    [
        { kana: 'きゃ', romaji: 'kya' },
        { kana: 'きゅ', romaji: 'kyu' },
        { kana: 'きょ', romaji: 'kyo' }
    ],
    // 拗音SH行
    [
        { kana: 'しゃ', romaji: 'sha' },
        { kana: 'しゅ', romaji: 'shu' },
        { kana: 'しょ', romaji: 'sho' }
    ],
    // 拗音CH行
    [
        { kana: 'ちゃ', romaji: 'cha' },
        { kana: 'ちゅ', romaji: 'chu' },
        { kana: 'ちょ', romaji: 'cho' }
    ],
    // 拗音NY行
    [
        { kana: 'にゃ', romaji: 'nya' },
        { kana: 'にゅ', romaji: 'nyu' },
        { kana: 'にょ', romaji: 'nyo' }
    ],
    // 拗音HY行
    [
        { kana: 'ひゃ', romaji: 'hya' },
        { kana: 'ひゅ', romaji: 'hyu' },
        { kana: 'ひょ', romaji: 'hyo' }
    ],
    // 拗音MY行
    [
        { kana: 'みゃ', romaji: 'mya' },
        { kana: 'みゅ', romaji: 'myu' },
        { kana: 'みょ', romaji: 'myo' }
    ],
    // 拗音RY行
    [
        { kana: 'りゃ', romaji: 'rya' },
        { kana: 'りゅ', romaji: 'ryu' },
        { kana: 'りょ', romaji: 'ryo' }
    ],
    // 拗音GY行
    [
        { kana: 'ぎゃ', romaji: 'gya' },
        { kana: 'ぎゅ', romaji: 'gyu' },
        { kana: 'ぎょ', romaji: 'gyo' }
    ],
    // 拗音J行
    [
        { kana: 'じゃ', romaji: 'ja' },
        { kana: 'じゅ', romaji: 'ju' },
        { kana: 'じょ', romaji: 'jo' }
    ],
    // 拗音BY行
    [
        { kana: 'びゃ', romaji: 'bya' },
        { kana: 'びゅ', romaji: 'byu' },
        { kana: 'びょ', romaji: 'byo' }
    ],
    // 拗音PY行
    [
        { kana: 'ぴゃ', romaji: 'pya' },
        { kana: 'ぴゅ', romaji: 'pyu' },
        { kana: 'ぴょ', romaji: 'pyo' }
    ]
];

// 片假名数据 - 分组排列
const katakanaData = [
    // 元音
    [
        { kana: 'ア', romaji: 'a' },
        { kana: 'イ', romaji: 'i' },
        { kana: 'ウ', romaji: 'u' },
        { kana: 'エ', romaji: 'e' },
        { kana: 'オ', romaji: 'o' }
    ],
    // K行
    [
        { kana: 'カ', romaji: 'ka' },
        { kana: 'キ', romaji: 'ki' },
        { kana: 'ク', romaji: 'ku' },
        { kana: 'ケ', romaji: 'ke' },
        { kana: 'コ', romaji: 'ko' }
    ],
    // S行
    [
        { kana: 'サ', romaji: 'sa' },
        { kana: 'シ', romaji: 'shi' },
        { kana: 'ス', romaji: 'su' },
        { kana: 'セ', romaji: 'se' },
        { kana: 'ソ', romaji: 'so' }
    ],
    // T行
    [
        { kana: 'タ', romaji: 'ta' },
        { kana: 'チ', romaji: 'chi' },
        { kana: 'ツ', romaji: 'tsu' },
        { kana: 'テ', romaji: 'te' },
        { kana: 'ト', romaji: 'to' }
    ],
    // N行
    [
        { kana: 'ナ', romaji: 'na' },
        { kana: 'ニ', romaji: 'ni' },
        { kana: 'ヌ', romaji: 'nu' },
        { kana: 'ネ', romaji: 'ne' },
        { kana: 'ノ', romaji: 'no' }
    ],
    // H行
    [
        { kana: 'ハ', romaji: 'ha' },
        { kana: 'ヒ', romaji: 'hi' },
        { kana: 'フ', romaji: 'fu' },
        { kana: 'ヘ', romaji: 'he' },
        { kana: 'ホ', romaji: 'ho' }
    ],
    // M行
    [
        { kana: 'マ', romaji: 'ma' },
        { kana: 'ミ', romaji: 'mi' },
        { kana: 'ム', romaji: 'mu' },
        { kana: 'メ', romaji: 'me' },
        { kana: 'モ', romaji: 'mo' }
    ],
    // Y行
    [
        { kana: 'ヤ', romaji: 'ya' },
        { kana: 'ユ', romaji: 'yu' },
        { kana: 'ヨ', romaji: 'yo' }
    ],
    // R行
    [
        { kana: 'ラ', romaji: 'ra' },
        { kana: 'リ', romaji: 'ri' },
        { kana: 'ル', romaji: 'ru' },
        { kana: 'レ', romaji: 're' },
        { kana: 'ロ', romaji: 'ro' }
    ],
    // W行和N
    [
        { kana: 'ワ', romaji: 'wa' },
        { kana: 'ヲ', romaji: 'wo' },
        { kana: 'ン', romaji: 'n' }
    ],
    // 浊音G行
    [
        { kana: 'ガ', romaji: 'ga' },
        { kana: 'ギ', romaji: 'gi' },
        { kana: 'グ', romaji: 'gu' },
        { kana: 'ゲ', romaji: 'ge' },
        { kana: 'ゴ', romaji: 'go' }
    ],
    // 浊音Z行
    [
        { kana: 'ザ', romaji: 'za' },
        { kana: 'ジ', romaji: 'ji' },
        { kana: 'ズ', romaji: 'zu' },
        { kana: 'ゼ', romaji: 'ze' },
        { kana: 'ゾ', romaji: 'zo' }
    ],
    // 浊音D行
    [
        { kana: 'ダ', romaji: 'da' },
        { kana: 'ヂ', romaji: 'ji' },
        { kana: 'ヅ', romaji: 'zu' },
        { kana: 'デ', romaji: 'de' },
        { kana: 'ド', romaji: 'do' }
    ],
    // 浊音B行
    [
        { kana: 'バ', romaji: 'ba' },
        { kana: 'ビ', romaji: 'bi' },
        { kana: 'ブ', romaji: 'bu' },
        { kana: 'ベ', romaji: 'be' },
        { kana: 'ボ', romaji: 'bo' }
    ],
    // 半浊音P行
    [
        { kana: 'パ', romaji: 'pa' },
        { kana: 'ピ', romaji: 'pi' },
        { kana: 'プ', romaji: 'pu' },
        { kana: 'ペ', romaji: 'pe' },
        { kana: 'ポ', romaji: 'po' }
    ],
    // 拗音KY行
    [
        { kana: 'キャ', romaji: 'kya' },
        { kana: 'キュ', romaji: 'kyu' },
        { kana: 'キョ', romaji: 'kyo' }
    ],
    // 拗音SH行
    [
        { kana: 'シャ', romaji: 'sha' },
        { kana: 'シュ', romaji: 'shu' },
        { kana: 'ショ', romaji: 'sho' }
    ],
    // 拗音CH行
    [
        { kana: 'チャ', romaji: 'cha' },
        { kana: 'チュ', romaji: 'chu' },
        { kana: 'チョ', romaji: 'cho' }
    ],
    // 拗音NY行
    [
        { kana: 'ニャ', romaji: 'nya' },
        { kana: 'ニュ', romaji: 'nyu' },
        { kana: 'ニョ', romaji: 'nyo' }
    ],
    // 拗音HY行
    [
        { kana: 'ヒャ', romaji: 'hya' },
        { kana: 'ヒュ', romaji: 'hyu' },
        { kana: 'ヒョ', romaji: 'hyo' }
    ],
    // 拗音MY行
    [
        { kana: 'ミャ', romaji: 'mya' },
        { kana: 'ミュ', romaji: 'myu' },
        { kana: 'ミョ', romaji: 'myo' }
    ],
    // 拗音RY行
    [
        { kana: 'リャ', romaji: 'rya' },
        { kana: 'リュ', romaji: 'ryu' },
        { kana: 'リョ', romaji: 'ryo' }
    ],
    // 拗音GY行
    [
        { kana: 'ギャ', romaji: 'gya' },
        { kana: 'ギュ', romaji: 'gyu' },
        { kana: 'ギョ', romaji: 'gyo' }
    ],
    // 拗音J行
    [
        { kana: 'ジャ', romaji: 'ja' },
        { kana: 'ジュ', romaji: 'ju' },
        { kana: 'ジョ', romaji: 'jo' }
    ],
    // 拗音BY行
    [
        { kana: 'ビャ', romaji: 'bya' },
        { kana: 'ビュ', romaji: 'byu' },
        { kana: 'ビョ', romaji: 'byo' }
    ],
    // 拗音PY行
    [
        { kana: 'ピャ', romaji: 'pya' },
        { kana: 'ピュ', romaji: 'pyu' },
        { kana: 'ピョ', romaji: 'pyo' }
    ]
];

// 全局变量
let selectedKana = []; // 存储用户选择的假名
let currentKana = null; // 当前正在练习的假名
let stats = {
    completed: 0,
    correct: 0,
    wrong: 0
};
let timerInterval = null; // 计时器间隔
let startTime = null; // 开始时间
let elapsedTime = 0; // 已经过的时间（秒）
let practiceTimeLimit = 0; // 练习时间限制（秒），0表示不限时
let isCountdown = false; // 是否为倒计时模式
let lastCorrectTime = null; // 上次正确输入的时间
let currentSpeed = 0; // 当前输入速度（每分钟正确数）
let isRealtimeCheck = true; // 是否实时检查输入
let weaknessStats = {}; // 存储用户错误输入的假名及次数

// DOM 元素引用
const hiraganaGroup = document.getElementById('hiragana-group');
const katakanaGroup = document.getElementById('katakana-group');
const selectAllButton = document.getElementById('select-all');
const deselectAllButton = document.getElementById('deselect-all');
const startPracticeButton = document.getElementById('start-practice');
const showHideKanaButton = document.getElementById('show-hide-kana');
const kanaSelectionSection = document.querySelector('.kana-selection-section');
const practiceSection = document.querySelector('.practice-section');
const currentKanaElement = document.querySelector('.current-kana');
const romajiInput = document.getElementById('romaji-input');
const skipKanaButton = document.getElementById('skip-kana');
const feedbackElement = document.querySelector('.feedback');
const feedbackTextElement = document.querySelector('.feedback-text');
const completedCountElement = document.getElementById('completed-count');
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const resetStatsButton = document.getElementById('reset-stats');
const backToSelectionButton = document.getElementById('back-to-selection');
const timerElement = document.getElementById('timer');
const timerLabelElement = document.getElementById('timer-label');
const scoreElement = document.getElementById('score');
const correctPerMinuteElement = document.getElementById('correct-per-minute');
const wrongPerMinuteElement = document.getElementById('wrong-per-minute');
const currentSpeedElement = document.getElementById('current-speed');
const kanaContent = document.querySelector('.kana-content');
const timerButtons = document.querySelectorAll('.timer-btn');
const realtimeCheckInput = document.getElementById('realtime-check');

// 初始化函数
function init() {
    // 动态生成平假名和片假名列表
    generateKanaList(hiraganaData, hiraganaGroup, 'hiragana');
    generateKanaList(katakanaData, katakanaGroup, 'katakana');

    // 添加事件监听器
    addEventListeners();
    
    // 默认全选所有假名
    selectAllKana();
    
    // 确保第一个timer按钮（3分钟）是激活状态，并设置对应的时间
    const activeButton = document.querySelector('.timer-btn.active');
    if (activeButton) {
        practiceTimeLimit = parseInt(activeButton.dataset.time);
        isCountdown = practiceTimeLimit > 0;
        
        // 更新显示的初始时间
        if (isCountdown) {
            timerElement.textContent = practiceTimeLimit.toString().padStart(3, '0');
        }
    }
}

// 生成假名列表
function generateKanaList(kanaData, container, type) {
    container.innerHTML = '';
    
    kanaData.forEach((row, rowIndex) => {
        const kanaRow = document.createElement('div');
        kanaRow.classList.add('kana-row');
        
        // 创建行选择器
        const rowSelector = document.createElement('div');
        rowSelector.classList.add('row-selector');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${type}-row-${rowIndex}`;
        
        const label = document.createElement('label');
        label.htmlFor = `${type}-row-${rowIndex}`;
        label.textContent = `第${rowIndex + 1}行`;
        
        rowSelector.appendChild(checkbox);
        rowSelector.appendChild(label);
        
        // 创建假名容器
        const kanaItems = document.createElement('div');
        kanaItems.classList.add('kana-items');
        
        // 将假名添加到容器
        row.forEach(item => {
            const kanaItem = document.createElement('div');
            kanaItem.classList.add('kana-item');
            kanaItem.dataset.kana = item.kana;
            kanaItem.dataset.romaji = item.romaji;
            
            const kanaChar = document.createElement('div');
            kanaChar.classList.add('kana-char');
            kanaChar.textContent = item.kana;
            
            const kanaRomaji = document.createElement('div');
            kanaRomaji.classList.add('kana-romaji');
            kanaRomaji.textContent = item.romaji;
            
            kanaItem.appendChild(kanaChar);
            kanaItem.appendChild(kanaRomaji);
            kanaItems.appendChild(kanaItem);
            
            // 添加点击事件来选择/取消选择假名
            kanaItem.addEventListener('click', () => {
                kanaItem.classList.toggle('selected');
                updateRowCheckboxState(checkbox, kanaItems);
            });
        });
        
        // 为行选择器添加事件
        checkbox.addEventListener('change', () => {
            const items = kanaItems.querySelectorAll('.kana-item');
            items.forEach(item => {
                if (checkbox.checked) {
                    item.classList.add('selected');
                } else {
                    item.classList.remove('selected');
                }
            });
        });
        
        kanaRow.appendChild(rowSelector);
        kanaRow.appendChild(kanaItems);
        container.appendChild(kanaRow);
    });
}

// 更新行选择器的状态
function updateRowCheckboxState(checkbox, kanaItems) {
    const allItems = kanaItems.querySelectorAll('.kana-item');
    const selectedItems = kanaItems.querySelectorAll('.kana-item.selected');
    
    if (selectedItems.length === 0) {
        checkbox.checked = false;
        checkbox.indeterminate = false;
    } else if (selectedItems.length === allItems.length) {
        checkbox.checked = true;
        checkbox.indeterminate = false;
    } else {
        checkbox.indeterminate = true;
    }
}

// 添加事件监听器
function addEventListeners() {
    // 全选按钮
    selectAllButton.addEventListener('click', selectAllKana);
    
    // 取消全选按钮
    deselectAllButton.addEventListener('click', deselectAllKana);
    
    // 显示/隐藏假名列表按钮
    showHideKanaButton.addEventListener('click', toggleKanaVisibility);
    
    // 开始练习按钮
    startPracticeButton.addEventListener('click', startPractice);
    
    // 实时检查输入选项
    if (realtimeCheckInput) {
        realtimeCheckInput.addEventListener('change', (e) => {
            isRealtimeCheck = e.target.checked;
            console.log(`实时检查模式: ${isRealtimeCheck ? '开启' : '关闭'}`);
        });
    }
    
    // 跳过按钮事件
    if (skipKanaButton) {
        skipKanaButton.addEventListener('click', () => {
            if (!currentKana) return;
            
            // 计为错误
            stats.wrong++;
            
            // 记录错误的假名
            recordWeakness(currentKana);
            
            updateStats();
            
            // 显示正确答案
            showCorrectAnswer(currentKana.romaji);
            
            // 清空输入框并聚焦
            if (romajiInput) {
                romajiInput.value = '';
                romajiInput.focus();
            }
        });
    }
    
    // 重置统计按钮
    resetStatsButton.addEventListener('click', resetStats);
    
    // 返回选择按钮
    backToSelectionButton.addEventListener('click', backToSelection);
    
    // 练习时间选择按钮
    timerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有按钮的active类
            timerButtons.forEach(b => b.classList.remove('active'));
            // 为当前按钮添加active类
            btn.classList.add('active');
            
            // 设置练习时间限制
            practiceTimeLimit = parseInt(btn.dataset.time);
            isCountdown = practiceTimeLimit > 0;
        });
    });
}

// 全选所有假名
function selectAllKana() {
    document.querySelectorAll('.kana-item').forEach(item => {
        item.classList.add('selected');
    });
    
    document.querySelectorAll('.row-selector input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = true;
        checkbox.indeterminate = false;
    });
}

// 取消全选所有假名
function deselectAllKana() {
    document.querySelectorAll('.kana-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    document.querySelectorAll('.row-selector input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.indeterminate = false;
    });
}

// 显示/隐藏假名列表
function toggleKanaVisibility() {
    kanaContent.classList.toggle('hidden');
    
    if (kanaContent.classList.contains('hidden')) {
        showHideKanaButton.textContent = '显示假名列表';
    } else {
        showHideKanaButton.textContent = '隐藏假名列表';
    }
}

// 设置输入处理
function setupInputHandling() {
    if (!romajiInput) return;
    
    // 清除旧事件
    romajiInput.removeEventListener('keydown', handleKeyDown);
    romajiInput.removeEventListener('input', handleInput);
    
    // 设置新事件 - 同时使用按键和输入事件
    romajiInput.addEventListener('keydown', handleKeyDown);
    
    // 仅在实时检查模式下添加input事件
    if (isRealtimeCheck) {
        romajiInput.addEventListener('input', handleInput);
    }
}

// 处理按键事件
function handleKeyDown(event) {
    if (!currentKana) return;
    
    // 如果按下Enter键，检查答案
    if (event.key === 'Enter') {
        const userInput = romajiInput.value.trim().toLowerCase();
        const correctRomaji = currentKana.romaji;
        
        console.log(`检查答案 - 用户输入: "${userInput}", 正确答案: "${correctRomaji}"`);
        
        if (userInput === correctRomaji) {
            // 输入正确
            stats.correct++;
            stats.completed++;
            
            // 更新当前输入速度
            updateCurrentSpeed(true);
            
            // 更新统计并进入下一题
            updateStats();
            showNextKana();
        } else {
            // 输入错误
            stats.wrong++;
            
            // 记录错误的假名
            recordWeakness(currentKana);
            
            updateStats();
            
            // 显示正确答案
            showCorrectAnswer(correctRomaji);
            
            // 清空输入框并聚焦
            romajiInput.value = '';
            romajiInput.focus();
        }
        
        // 阻止默认行为（如表单提交）
        event.preventDefault();
    }
}

// 处理输入事件 - 实时检查
function handleInput(event) {
    if (!currentKana) return;
    
    const userInput = event.target.value.trim().toLowerCase();
    const correctRomaji = currentKana.romaji;
    
    console.log(`实时检查 - 用户输入: "${userInput}", 正确答案: "${correctRomaji}"`);
    
    // 如果输入为空，不做任何处理
    if (userInput.length === 0) return;
    
    // 特殊处理：对于wo，o也是正确答案；对于fu，hu也是正确答案
    const isCorrect = userInput === correctRomaji || 
                     (correctRomaji === 'wo' && userInput === 'o') ||
                     (correctRomaji === 'fu' && userInput === 'hu');
    
    if (isCorrect) {
        console.log("输入正确，进入下一题");
        
        // 输入正确
        stats.correct++;
        stats.completed++;
        
        // 更新当前输入速度
        updateCurrentSpeed(true);
        
        // 更新统计并进入下一题
        updateStats();
        showNextKana();
        return;
    }
    
    // 检查是否输入了错误字符
    if (!correctRomaji.startsWith(userInput)) {
        console.log("输入错误字符");
        
        // 记录错误
        stats.wrong++;
        
        // 记录错误的假名
        recordWeakness(currentKana);
        
        updateStats();
        
        // 显示正确答案
        showCorrectAnswer(correctRomaji);
        
        // 清空输入框并聚焦
        romajiInput.value = '';
        romajiInput.focus();
        return;
    }
    
    // 检查是否输入完整但不正确
    if (userInput.length >= correctRomaji.length && userInput !== correctRomaji) {
        console.log("输入完整但不正确");
        
        // 记录错误
        stats.wrong++;
        
        // 记录错误的假名
        recordWeakness(currentKana);
        
        updateStats();
        
        // 显示正确答案
        showCorrectAnswer(correctRomaji);
        
        // 清空输入框并聚焦
        romajiInput.value = '';
        romajiInput.focus();
        return;
    }
}

// 显示正确答案
function showCorrectAnswer(correctRomaji) {
    // 如果有反馈元素，直接使用
    if (feedbackElement) {
        const correctAnswerElement = feedbackElement.querySelector('.correct-answer');
        if (correctAnswerElement) {
            correctAnswerElement.textContent = correctRomaji;
        } else {
            feedbackElement.innerHTML = `<div class="feedback-text">正确答案: <span class="correct-answer">${correctRomaji}</span></div>`;
        }
        feedbackElement.style.display = 'block';
    } else {
        // 如果没有反馈元素，创建一个
        feedbackElement = document.createElement('div');
        feedbackElement.className = 'feedback';
        feedbackElement.innerHTML = `<div class="feedback-text">正确答案: <span class="correct-answer">${correctRomaji}</span></div>`;
        feedbackElement.style.display = 'block';
        
        const practiceDisplay = document.querySelector('.practice-display');
        if (practiceDisplay) {
            // 插入到当前假名和输入区域之间
            const currentKanaElement = practiceDisplay.querySelector('.current-kana');
            const inputArea = practiceDisplay.querySelector('.input-area');
            if (currentKanaElement && inputArea) {
                practiceDisplay.insertBefore(feedbackElement, inputArea);
            } else {
                practiceDisplay.appendChild(feedbackElement);
            }
        }
    }
}

// 更新当前输入速度
function updateCurrentSpeed(isCorrect) {
    const now = new Date();
    
    if (isCorrect) {
        if (lastCorrectTime) {
            // 计算两次正确输入之间的时间间隔（秒）
            const timeDiff = (now - lastCorrectTime) / 1000;
            
            // 计算当前速度（每分钟输入的正确数量）
            if (timeDiff > 0) {
                // 使用移动平均值以平滑波动
                const newSpeed = 60 / timeDiff;
                currentSpeed = (currentSpeed === 0) ? newSpeed : (currentSpeed * 0.7 + newSpeed * 0.3);
            }
        }
        lastCorrectTime = now;
    }
    
    // 更新显示
    currentSpeedElement.textContent = Math.round(currentSpeed);
}

// 显示下一个随机假名
function showNextKana() {
    console.log("显示下一个假名");
    
    // 隐藏反馈区域
    if (feedbackElement) {
        feedbackElement.style.display = 'none';
    }
    
    // 如果没有选中的假名，返回选择界面
    if (!selectedKana || selectedKana.length === 0) {
        console.log("没有选中的假名，返回选择界面");
        backToSelection();
        return;
    }
    
    // 随机选择一个假名
    const randomIndex = Math.floor(Math.random() * selectedKana.length);
    currentKana = selectedKana[randomIndex];
    
    console.log(`选择了假名: ${currentKana.kana}, 罗马音: ${currentKana.romaji}`);
    
    // 显示当前假名
    if (currentKanaElement) {
        currentKanaElement.textContent = currentKana.kana;
    } else {
        console.error("找不到currentKanaElement元素");
    }
    
    // 重置输入框并聚焦
    if (romajiInput) {
        // 重新设置输入处理
        setupInputHandling();
        
        // 清空输入
        romajiInput.value = '';
        
        // 设置placeholder为空（第一题后不再显示提示）
        if (stats.completed > 0) {
            romajiInput.placeholder = '';
        }
        
        // 确保输入框获得焦点
        romajiInput.focus();
    } else {
        console.error("找不到romajiInput元素");
    }
}

// 开始练习
function startPractice() {
    // 收集所有选中的假名
    selectedKana = [];
    const selectedItems = document.querySelectorAll('.kana-item.selected');
    
    if (selectedItems.length === 0) {
        alert('请至少选择一个假名进行练习！');
        return;
    }
    
    selectedItems.forEach(item => {
        selectedKana.push({
            kana: item.dataset.kana,
            romaji: item.dataset.romaji
        });
    });
    
    // 隐藏选择区域，显示练习区域
    kanaSelectionSection.style.display = 'none';
    practiceSection.style.display = 'block';
    
    // 重置统计数据
    resetStats();
    
    // 隐藏成绩评估和薄弱环节分析
    if (scoreElement) {
        scoreElement.style.display = 'none';
    }
    const weaknessReportElement = document.getElementById('weakness-report');
    const weaknessTitleElement = document.querySelector('.weakness-title');
    if (weaknessReportElement) {
        weaknessReportElement.style.display = 'none';
    }
    if (weaknessTitleElement) {
        weaknessTitleElement.style.display = 'none';
    }
    
    // 重置薄弱环节统计
    weaknessStats = {};
    
    // 重置当前速度和上次正确时间
    currentSpeed = 0;
    lastCorrectTime = null;
    currentSpeedElement.textContent = '0';
    
    // 启动计时器
    startTimer();
    
    // 设置输入处理
    setupInputHandling();
    
    // 显示第一个随机假名
    showNextKana();
    
    // 确保输入框获得焦点
    if (romajiInput) {
        romajiInput.focus();
    }
}

// 启动计时器
function startTimer() {
    // 清除可能存在的上一个计时器
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // 重置计时和成绩
    startTime = new Date();
    elapsedTime = isCountdown ? practiceTimeLimit : 0;
    updateTimer();
    updateScore();
    
    // 设置计时器，每秒更新一次
    timerInterval = setInterval(() => {
        if (isCountdown) {
            // 倒计时模式
            elapsedTime = practiceTimeLimit - Math.floor((new Date() - startTime) / 1000);
            
            // 时间到，返回选择界面
            if (elapsedTime <= 0) {
                elapsedTime = 0;
                updateTimer();
                updateScore();
                stopTimer(); // 停止计时器
                
                // 计算并显示最终成绩
                if (scoreElement) {
                    scoreElement.textContent = calculateFinalScore();
                    scoreElement.style.display = 'block';
                }
                
                // 生成并显示薄弱环节分析报告
                const weaknessReportElement = document.getElementById('weakness-report');
                const weaknessTitleElement = document.querySelector('.weakness-title');
                
                if (weaknessReportElement) {
                    weaknessReportElement.textContent = generateWeaknessReport();
                    weaknessReportElement.style.display = 'block';
                }
                
                if (weaknessTitleElement) {
                    weaknessTitleElement.style.display = 'block';
                }
                
                // 清空当前假名和输入框
                currentKana = null;
                if (romajiInput) {
                    romajiInput.removeEventListener('keydown', handleKeyDown);
                    romajiInput.removeEventListener('input', handleInput);
                    romajiInput.value = '';
                    romajiInput.placeholder = '请输入罗马音...';
                }
                
                // 添加返回按钮
                const backButton = document.createElement('button');
                backButton.textContent = '返回主页面';
                backButton.className = 'back-button';
                backButton.style.cssText = 'margin-top: 20px; padding: 10px 20px; font-size: 16px; cursor: pointer;';
                backButton.onclick = () => {
                    practiceSection.style.display = 'none';
                    kanaSelectionSection.style.display = 'block';
                };
                
                // 将返回按钮添加到练习区域
                practiceSection.appendChild(backButton);
                return;
            }
        } else {
            // 正计时模式
            elapsedTime = Math.floor((new Date() - startTime) / 1000);
        }
        
        updateTimer();
        updateScore();
    }, 1000);
}

// 停止计时器
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// 更新计时器显示
function updateTimer() {
    const seconds = elapsedTime;
    timerElement.textContent = `${seconds.toString().padStart(3, '0')}`;
    
    // 更新计时器标签
    timerLabelElement.textContent = isCountdown ? '剩余时间(秒)' : '已用时间(秒)';
}

// 计算并更新成绩
function updateScore() {
    // 在练习过程中不需要显示这些统计信息，已经在HTML中移除了
    // correctPerMinuteElement.textContent = correctPerMinute;
    // wrongPerMinuteElement.textContent = wrongPerMinute;
    
    // 练习过程中不显示成绩评估
    if (scoreElement) {
        scoreElement.style.display = 'none';
    }
}

// 计算最终成绩并显示
function calculateFinalScore() {
    let minutesElapsed;
    
    if (isCountdown) {
        // 倒计时模式，使用总练习时间
        minutesElapsed = practiceTimeLimit / 60;
    } else {
        // 正计时模式
        minutesElapsed = elapsedTime / 60;
    }
    
    // 如果时间太短，返回"时间太短"
    if (minutesElapsed < 0.15) { // 少于10秒
        return '练习时间太短';
    }
    
    const correctPerMinute = minutesElapsed > 0 ? Math.round(stats.correct / minutesElapsed) : 0;
    const wrongPerMinute = minutesElapsed > 0 ? Math.round(stats.wrong / minutesElapsed) : 0;
    
    // 基准：60分 = 每分钟正确辨识100个假名，错误5个以内
    // 1. 正确率影响 (70%)
    const correctWeight = 0.7;
    const correctScore = Math.min(correctPerMinute / 100 * 60, 60) * correctWeight;
    
    // 2. 错误率影响 (30%)，错误越多分数越低
    const wrongWeight = 0.3;
    let wrongPenalty = 0;
    if (wrongPerMinute <= 5) {
        wrongPenalty = 0; // 错误在5个以内，不扣分
    } else if (wrongPerMinute <= 10) {
        wrongPenalty = (wrongPerMinute - 5) * 2; // 5-10个错误，每个扣2分
    } else {
        wrongPenalty = 10 + (wrongPerMinute - 10) * 3; // 10个以上错误，每个扣3分
    }
    
    const wrongScore = Math.max(0, 60 - wrongPenalty) * wrongWeight;
    
    // 总分
    const score = correctScore + wrongScore;
    
    // 成绩等级
    let grade = '';
    if (score >= 90) {
        grade = '优秀';
    } else if (score >= 80) {
        grade = '良好';
    } else if (score >= 60) {
        grade = '合格';
    } else {
        grade = '不及格';
    }
    
    // 计算正确率
    const accuracy = stats.completed > 0 ? Math.round((stats.correct / stats.completed) * 100) : 0;
    
    // 显示评分标准
    const scoreText = 
        `练习总结：\n` +
        `----------------------------------------\n` +
        `总用时：${Math.round(minutesElapsed)}分钟\n` +
        `练习假名：${stats.completed}个\n` +
        `正确识别：${stats.correct}个\n` +
        `错误识别：${stats.wrong}个\n` +
        `正确率：${accuracy}%\n` +
        `平均速度：${correctPerMinute}个/分钟\n` +
        `----------------------------------------\n` +
        `最终得分：${Math.round(score)}分（${grade}）\n` +
        `----------------------------------------\n` +
        `评分标准：\n` +
        `- 基准：60分=每分钟正确100个，错误≤5个\n` +
        `- 正确率占70%，错误率占30%\n` +
        `- 优秀：≥90分，良好：80-89分\n` +
        `- 合格：60-79分，不及格：<60分`;
    
    return scoreText;
}

// 记录错误的假名
function recordWeakness(kana) {
    if (!kana) return;
    
    const key = `${kana.kana}:${kana.romaji}`;
    if (!weaknessStats[key]) {
        weaknessStats[key] = { 
            kana: kana.kana, 
            romaji: kana.romaji, 
            errorCount: 0 
        };
    }
    weaknessStats[key].errorCount++;
}

// 返回选择界面
function backToSelection() {
    console.log("返回选择界面");
    
    // 停止计时器
    stopTimer();
    
    // 计算并显示最终成绩
    if (scoreElement) {
        scoreElement.textContent = calculateFinalScore();
        scoreElement.style.display = 'block'; // 显示成绩评估
    }
    
    // 生成并显示薄弱环节分析报告
    const weaknessReportElement = document.getElementById('weakness-report');
    const weaknessTitleElement = document.querySelector('.weakness-title');
    
    if (weaknessReportElement) {
        weaknessReportElement.textContent = generateWeaknessReport();
        weaknessReportElement.style.display = 'block';
    }
    
    if (weaknessTitleElement) {
        weaknessTitleElement.style.display = 'block';
    }
    
    // 清空当前假名和输入框
    currentKana = null;
    if (romajiInput) {
        // 移除事件监听
        romajiInput.removeEventListener('keydown', handleKeyDown);
        romajiInput.removeEventListener('input', handleInput);
        
        // 清空输入并恢复placeholder
        romajiInput.value = '';
        romajiInput.placeholder = '请输入罗马音...';
    }
    
    // 隐藏练习区域，显示选择区域
    practiceSection.style.display = 'none';
    kanaSelectionSection.style.display = 'block';
}

// 显示薄弱环节分析报告
function displayWeaknessReport() {
    // 获取报告容器和标题
    const weaknessReportElement = document.getElementById('weakness-report');
    const weaknessTitleElement = document.querySelector('.weakness-title');
    
    if (!weaknessReportElement) return;
    
    // 生成并显示报告
    weaknessReportElement.textContent = generateWeaknessReport();
    weaknessReportElement.style.display = 'block';
    
    // 显示标题
    if (weaknessTitleElement) {
        weaknessTitleElement.style.display = 'block';
    }
}

// 生成薄弱环节分析报告
function generateWeaknessReport() {
    // 如果没有错误记录，返回空字符串
    if (Object.keys(weaknessStats).length === 0) {
        return '本次练习表现良好，没有特别薄弱的假名。';
    }
    
    // 将错误记录按错误次数排序
    const sortedWeaknesses = Object.values(weaknessStats).sort((a, b) => b.errorCount - a.errorCount);
    
    // 只保留前10个错误最多的假名
    const topWeaknesses = sortedWeaknesses.slice(0, 10);
    
    // 计算错误率
    const totalErrors = topWeaknesses.reduce((sum, item) => sum + item.errorCount, 0);
    const errorRate = (totalErrors / stats.wrong * 100).toFixed(1);
    
    // 生成报告
    let report = `薄弱假名分析报告\n` +
                 `----------------------------------------\n` +
                 `前10个错误最多的假名（占错误总数${errorRate}%）：\n\n`;
    
    topWeaknesses.forEach((item, index) => {
        const percentage = ((item.errorCount / stats.wrong) * 100).toFixed(1);
        report += `${index + 1}. 假名: ${item.kana}  罗马音: ${item.romaji}\n` +
                 `   错误次数: ${item.errorCount} (${percentage}%)\n`;
    });
    
    report += `\n----------------------------------------\n` +
              `建议：\n` +
              `1. 重点关注错误率最高的假名\n` +
              `2. 建议每天花5-10分钟专门练习这些假名\n` +
              `3. 可以使用记忆卡片或书写练习来加强记忆\n` +
              `4. 下次练习时可以选择这些假名进行针对性训练`;
    
    return report;
}

// 重置统计
function resetStats() {
    stats = {
        completed: 0,
        correct: 0,
        wrong: 0
    };
    updateStats();
    
    // 重置薄弱环节统计
    weaknessStats = {};
    
    // 重新开始计时
    if (practiceSection.style.display !== 'none') {
        startTimer();
    }
}

// 更新统计显示
function updateStats() {
    completedCountElement.textContent = stats.completed;
    correctCountElement.textContent = stats.correct;
    wrongCountElement.textContent = stats.wrong;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init); 