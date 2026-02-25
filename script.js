// Itinerary Data - Structured for the new card layout
const itineraryData = [
    {
        id: "day-1",
        num: "1",
        title: "抵達與市區夜景之旅",
        events: [
            {
                timeTitle: "抵達中部國際機場",
                description: "抵達後，建議入住 名古屋站 (Nagoya Station) 或 榮 (Sakae) 區域，方便首日休整與欣賞繁華市景。",
                image: "https://picsum.photos/id/1018/600/400",
                icon: "✈️"
            },
            {
                timeTitle: "下午：綠洲 21 (Oasis 21) 與榮町商圈",
                description: "漫步在奇特宇宙船造型的綠洲21，底層有商場與美食，周邊則是熱鬧的榮町商圈，適合第一天採買與逛街。",
                image: "https://picsum.photos/id/1029/600/400",
                icon: "🛍️"
            },
            {
                timeTitle: "晚餐與夜景：中部電力 MIRAI TOWER",
                description: "在塔下的公園享用晚餐後，登上展望台俯瞰名古屋璀璨夜景。",
                image: "https://picsum.photos/id/122/600/400",
                icon: "🌃"
            }
        ]
    },
    {
        id: "day-2",
        num: "2",
        title: "歷史名城與初春賞櫻",
        events: [
            {
                timeTitle: "上午：名古屋城與本丸御殿",
                description: "參觀日本百大名城之一。3月下旬正值初春，城牆周邊綻放的粉白早櫻絕對是拍照重點，感受戰國時代的磅礴氣息。",
                image: "https://picsum.photos/id/1042/600/400",
                icon: "🏯"
            },
            {
                timeTitle: "午餐：山本屋總本家 (味噌烏龍麵)",
                description: "品嚐名古屋特有的硬麵條與濃郁赤味噌熬煮而成的味噌烏龍麵。",
                image: "https://picsum.photos/id/1080/600/400",
                icon: "🍜"
            },
            {
                timeTitle: "下午：熱田神宮",
                description: "參拜供奉日本三大神器之一的古老神宮，漫步於巨大的楠木林中吸收芬多精。",
                image: "https://picsum.photos/id/1015/600/400",
                icon: "⛩️"
            }
        ]
    },
    {
        id: "day-3",
        num: "3",
        title: "產業科技的驕傲",
        events: [
            {
                timeTitle: "上午：豐田產業技術紀念館",
                description: "見證日本製造業的發明與進步。從紡織機起家到現今的汽車帝國，豐富的動態展示非常精彩。",
                image: "https://picsum.photos/id/1070/600/400",
                icon: "🚗"
            },
            {
                timeTitle: "下午：SCMaglev 磁浮鐵道館",
                description: "搭乘青波線來到港區，參觀紀錄日本鐵道歷史的博物館，親眼見到各式新幹線與磁浮列車實體。",
                image: "https://picsum.photos/id/132/600/400",
                icon: "🚄"
            }
        ]
    },
    {
        id: "day-4",
        num: "4",
        title: "童話世界合掌村與高山",
        events: [
            {
                timeTitle: "上午：白川鄉合掌村",
                description: "搭乘專車前往世界文化遺產白川鄉，欣賞如童話般獨特的「合掌造」傳統茅草屋。",
                image: "https://picsum.photos/id/1036/600/400",
                icon: "❄️"
            },
            {
                timeTitle: "下午：飛驒高山老街",
                description: "漫步在有「小京都」之稱的高山老街，品嚐頂級的飛驒牛握壽司與當地特色美食。",
                image: "https://picsum.photos/id/1060/600/400",
                icon: "🍢"
            }
        ]
    },
    {
        id: "day-5",
        num: "5",
        title: "大須文化與浪漫百花齊放",
        events: [
            {
                timeTitle: "上午：大須觀音與商店街",
                description: "參拜大須觀音後，在充滿活力的大須商店街尋寶，品嚐唐揚雞與鯛魚燒等平民美食。",
                image: "https://picsum.photos/id/1074/600/400",
                icon: "🛍️"
            },
            {
                timeTitle: "下午：名古屋市科學館",
                description: "館內擁有超巨大的球體星象儀，並且有許多有趣的科學互動體驗，非常適合探索。",
                image: "https://picsum.photos/id/1075/600/400",
                icon: "🔭"
            },
            {
                timeTitle: "傍晚：鶴舞公園賞櫻/賞梅",
                description: "這裡是名古屋在地人最愛的賞花勝地，三月下旬可以欣賞到美麗的粉櫻與點點梅花。",
                image: "https://picsum.photos/id/1054/600/400",
                icon: "🌸"
            }
        ]
    },
    {
        id: "day-6",
        num: "6",
        title: "自然晨光與滿載而歸",
        events: [
            {
                timeTitle: "上午：東山動植物園早晨散策",
                description: "在廣大的園區內悠閒散步，享受清新的自然風光與可愛動物。春季時植物園也會有美麗的花卉。",
                image: "https://picsum.photos/id/1056/600/400",
                icon: "🌿"
            },
            {
                timeTitle: "下午：採買伴手禮與搭機歸國",
                description: "回到名古屋車站周邊百貨進行最後的血拼，購買知名蝦餅等伴手禮後，搭機帶著滿滿的美好回憶平安歸國。",
                image: "https://picsum.photos/id/111/600/400",
                icon: "🎁"
            }
        ]
    }
];

// 1. Render Itinerary Content Dynamically
const container = document.getElementById('itinerary-content');

itineraryData.forEach(day => {
    // Create Day Wrapper
    const daySection = document.createElement('section');
    daySection.className = 'day-block';
    daySection.id = day.id;

    // Create Day Header
    daySection.innerHTML = `
        <div class="day-header">
            <div class="day-circle">${day.num}</div>
            <h2>${day.title}</h2>
        </div>
    `;

    // Create Events
    day.events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <img src="${event.image}" alt="${event.timeTitle}" class="event-img">
            <div class="event-details">
                <h4 class="event-title">
                    <span class="icon">${event.icon}</span> 
                    ${event.timeTitle}
                </h4>
                <p class="event-desc">${event.description}</p>
            </div>
        `;
        daySection.appendChild(card);
    });

    container.appendChild(daySection);
});

// 2. Sticky Navigation Active State Logic
const sections = document.querySelectorAll('.day-block');
const navLinks = document.querySelectorAll('.day-list a');

window.addEventListener('scroll', () => {
    let current = '';

    // Determine which section we are currently viewing
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjust for offset of sticky nav height
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    // Remove active class from all links, and add to the current one
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current) && current !== '') {
            link.classList.add('active');

            // Auto scroll nav menu horizontally if item is out of view (for mobile)
            const navMenu = document.getElementById('day-nav');
            const linkLeft = link.offsetLeft;
            navMenu.scrollTo({
                left: linkLeft - 20,
                behavior: 'smooth'
            });
        }
    });
});
