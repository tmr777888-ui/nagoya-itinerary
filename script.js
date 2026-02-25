// Itinerary Data
const itineraryData = [
    {
        day: "Day 1",
        title: "市區巡禮與浪漫夜景",
        description: "抵達中部國際機場，感受名古屋的繁華與現代。漫步於綠洲 21 的宇宙船造型建築，俯瞰市區夜色。",
        highlights: ["中部國際機場抵達", "榮町商圈 (Sakae) 購物", "綠洲 21 (Oasis 21) 水之宇宙船", "中部電力 MIRAI TOWER 夜景"]
    },
    {
        day: "Day 2",
        title: "大河劇歷史與初春賞櫻",
        description: "深入了解戰國三傑的歷史。適逢 3 月下旬，名古屋城與公園的粉紅早櫻將成為最美的背景。",
        highlights: ["名古屋城天守閣與本丸御殿", "品嚐名物：矢場豬排", "熱田神宮參拜", "德川園優雅庭園漫步"]
    },
    {
        day: "Day 3",
        title: "日本產業的驕傲與港區風光",
        description: "探索日本汽車工業與高速鐵道的心臟地帶，下午轉往充滿海洋氣息的港灣區。",
        highlights: ["豐田產業技術紀念館", "SCMaglev 磁浮鐵道館", "名古屋港水族館看海豚秀"]
    },
    {
        day: "Day 4",
        title: "合掌村與飛驒高山一日遊",
        description: "遠離市區，搭乘專車前往童話般的白川鄉，並在小京都「高山」品嚐頂級飛驒牛。",
        highlights: ["世界遺產：白川鄉合掌造聚落", "飛驒高山老街巡禮", "飛驒牛握壽司與烤肉", "品嚐當地傳統日本酒"]
    },
    {
        day: "Day 5",
        title: "大須文化、科普與百花齊放",
        description: "結合平民美食、購物與科學探索的一天。傍晚前往市民最愛的賞花勝地，沉浸在春日氛圍中。",
        highlights: ["大須觀音與大須商店街", "大須當地小吃：唐揚雞、鯛魚燒", "名古屋市科學館 (巨型巨蛋星象儀)", "鶴舞公園賞櫻/梅花"]
    },
    {
        day: "Day 6",
        title: "自然晨光與滿載而歸",
        description: "在返家前，於廣大的動植物園享受悠閒早晨，最後在機場進行最後的伴手禮掃貨。",
        highlights: ["東山動植物園早晨散策", "名古屋車站周邊百貨最後血拼", "購買蝦餅等知名伴手禮", "搭機充滿回憶賦歸"]
    }
];

// Render Timeline
const timelineContainer = document.getElementById('timeline');

itineraryData.forEach((item, index) => {
    // Generate HTML for highlights
    const highlightsHTML = item.highlights.map(h => `<li>${h}</li>`).join('');
    
    // Determine left or right alignment for timeline card
    const alignment = index % 2 === 0 ? 'left' : 'right';

    // Create container
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${alignment}`;

    // Inner Content
    timelineItem.innerHTML = `
        <div class="content">
            <span class="day-badge">${item.day}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <ul class="highlights">
                ${highlightsHTML}
            </ul>
        </div>
    `;

    timelineContainer.appendChild(timelineItem);
});

// Scroll Animation using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    // Observe all timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
});
