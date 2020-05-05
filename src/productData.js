const Products = [
    {
        id: 1,
        name: "Ever Cropped Long Sleeve",
        purpose: 'Designed for Yoga',
        desc_heading: 'Buttery-Soft, Nulu Fabric',
        description: "Designed with our buttery-soft, sweat-wicking Nulu Fabric for a lightweight, barely there experience. With added Lycra fibre, this top offers a four-way stretch and superior shape.",
        fit: 'Tight Fit, Cropped Length',
        material: '81% Nylon, 18% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 97.99,
        gender: "women",
        type: "long-sleeve",
        img: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_043612_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'Ballet',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_043612_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_043612_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_043612_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_043612_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_043612_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Black',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW3DMTS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW3DMTS_0001_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW3DMTS_0001_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW3DMTS_0001_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW3DMTS_0001_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 3,
            colorName: 'Lavender',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_037013_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_037013_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_037013_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_037013_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_037013_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }
        ],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_043612_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 2,
        name: "Align Tank",
        purpose: 'Designed for Yoga',
        desc_heading: 'Buttery-Soft, Nulu Fabric',
        description: "Designed with our buttery-soft, sweat-wicking Nulu Fabric for a lightweight, barely there experience. With added Lycra fibre, this top offers a four-way stretch and superior shape.",
        fit: 'Light Support, Best for A/B Cup Sizes',
        material: '89% Nylon, 11% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 54.99,
        gender: "women",
        type: "tank-top",
        img: 'https://images.lululemon.com/is/image/lululemon/LW1CRTS_0002_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: false,
        colors: [{
            colorId: 1,
            colorName: 'White',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW1CRTS_0002_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW1CRTS_0002_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW1CRTS_0002_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Black',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW1BSWS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW1CRTS_0002_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 3,
        name: "All Tied Up Tank",
        purpose: 'Designed for Yoga',
        desc_heading: 'Super-Soft, Pima Cotton Fabric',
        description: "Designed with our super-soft Pima Fabric. Added Lycra Fabric offers four-way stretch fabric mixed with maximum breathability.",
        fit: 'Classic Fit, Hip Length',
        material: '92% Pima Cotton, 8% Lycra Elastane',
        care: ['Turn garment inside out', 'Wash seperately', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 48.99,
        gender: "women",
        type: "tank-top",
        img: 'https://images.lululemon.com/is/image/lululemon/LW1CK1S_044256_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'Washed Red',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW1CK1S_044256_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW1CK1S_044256_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW1CK1S_044256_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW1CK1S_044256_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW1CK1S_044256_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'White',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW1BX8S_0002_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW1BX8S_0002_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW1BX8S_0002_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW1BX8S_0002_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW1BX8S_0002_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW1CK1S_044256_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 4,
        name: "Quick Pace Short Sleeve",
        purpose: 'Designed for Running',
        desc_heading: 'Sweat-Wicking Fabric',
        description: "Designed with sweat-wicking, quick-drying fabric and added UV protection so you perform your best. With added Lycra fibre, this top offers a four-way stretch and superior shape.",
        fit: 'Relaxed Fit, Hip Length',
        material: '82% Nylon, 18% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 68.99,
        gender: "women",
        type: "short-sleeve",
        img: 'https://images.lululemon.com/is/image/lululemon/LW3CHIS_0002_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'White',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW3CHIS_0002_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW3CHIS_0002_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW3CHIS_0002_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW3CHIS_0002_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW3CHIS_0002_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Black',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW3CHIS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 3,
            colorName: 'Camo Coal',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW3DR6S_031691_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }
        ],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW3CHIS_0002_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 5,
        name: "Heart Open Long Sleeve",
        purpose: 'Designed for On the Move',
        desc_heading: 'Soft, Breathable Vitasea Fabric',
        description: "Designed with our breathable Vitasea Fabric for layered look without the fuss. Added Lycra for a four-way stretch and shape retention",
        fit: 'Tight Fit, Cropped Length',
        material: '81% Nylon, 18% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 78.99,
        gender: "women",
        type: "long-sleeve",
        img: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'Black',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_0001_1?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_0001_2?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_0001_3?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_0001_4?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_0001_5?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Lunar',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_034268_1?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_034268_2?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_034268_3?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_034268_4?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_034268_5?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 3,
            colorName: 'Porcelain',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_030437_1?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_030437_2?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_030437_3?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_030437_4?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_030437_5?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_0001_4?$image_carousel$&wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 6,
        name: "Daily Tank",
        purpose: 'Designed for Yoga',
        desc_heading: 'Smooth, Luxtreme Fabric',
        description: "Designed with smooth, sweat-wicking Luxtreme Fabric for a lightweight, cool feel. With added Lycra fibre, this top offers a four-way stretch and superior shape.",
        fit: 'Tight Fit, Cropped Length',
        material: '72% Nylon, 28% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 37.99,
        gender: "women",
        type: "tank-top",
        img: 'https://images.lululemon.com/is/image/lululemon/LW1BUAS_033454_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'Ivory',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW1BUAS_033454_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW1BUAS_033454_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW1BUAS_033454_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW1BUAS_033454_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW1BUAS_033454_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Wine',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW1BTOS_026950_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 3,
            colorName: 'Black',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW1BTOS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }
        ],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW1BUAS_033454_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 7,
        name: "Wunder Dream High-Rise Tight 28\x22",
        purpose: 'Designed for Yoga',
        desc_heading: 'Smooth, Luxtreme Fabric',
        description: "Designed with breathable, sweat-wicking Luxtreme Fabric for a smooth, cool feel. With added Lycra fibre, this pants offer a four-way stretch and superior shape.",
        fit: 'High Rise, 28\x22 Inseam',
        material: '74% Nylon, 26% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 98.99,
        gender: "women",
        type: "pants",
        img: 'https://images.lululemon.com/is/image/lululemon/LW5CQSS_045102_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'White Camo',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW5CQSS_045102_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW5CQSS_045102_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW5CQSS_045102_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW5CQSS_045102_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW5CQSS_045102_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Soft Grey',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW5CDCS_024921_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 3,
            colorName: 'Space Grey',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW5BXJS_1966_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }
        ],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW5CQSS_045102_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 8,
        name: "Invigorate Me High-Rish Tight 25\x22",
        purpose: 'Designed for Training',
        desc_heading: 'Quick-Drying Everlux Fabric',
        description: "Designed with our ultra quick-drying, Everlux Fabric for a supportive, highly breathable experience. This sweat-wicking fabric offers a dual sensation of cooling inside and soft outside. With added Lycra fibre, these pants offer a four-way stretch and superior shape.",
        fit: 'High Rise, 25\x22 Inseam',
        material: '77% Nylon, 23% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 138.99,
        gender: "women",
        type: "pants",
        img: 'https://images.lululemon.com/is/image/lululemon/LW5CR9S_043989_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'Naval Blue',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW5CR9S_043989_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW5CR9S_043989_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW5CR9S_043989_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW5CR9S_043989_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW5CR9S_043989_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW5CR9S_043989_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 9,
        name: "All the Right Places Crop 23\x22",
        purpose: 'Designed for Running',
        desc_heading: 'Sweat-wicking, Luxtreme Fabric',
        description: "Designed with breathable, sweat-wicking Luxtreme Fabric for a smooth, cool feel. With added Lycra fibre, this pants offer a four-way stretch and superior shape.",
        fit: 'High Rise, 23\x22 Inseam',
        material: '77% Nylon, 23% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 118.99,
        gender: "women",
        type: "capris",
        img: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_026950_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'Burgundy',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_026950_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_026950_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_026950_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_026950_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_026950_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Ink Blue',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_043629_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_043629_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_043629_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_043629_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_043629_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 3,
            colorName: 'Graphite',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_030210_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 4,
            colorName: 'Olive',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_026083_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }
        ],
        sizes: [2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_026950_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 10,
        name: "Sunday Revival High-Rise Crop 22\x22",
        purpose: 'Designed for Running',
        desc_heading: 'Sweat-wicking, Luxtreme Fabric',
        description: "Designed with breathable, sweat-wicking Luxtreme Fabric for a smooth, cool feel. With added Lycra fibre, this pants offer a four-way stretch and superior shape.",
        fit: 'High Rise, 22\x22 Inseam',
        material: '69% Nylon, 31% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 88.99,
        gender: "women",
        type: "capris",
        img: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_026083_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'Olive',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_026083_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_026083_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_026083_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_026083_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_026083_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Camo Coal',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW6BEJS_042744_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 3,
            colorName: 'Wine',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_026950_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 4,
            colorName: 'Navy',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_031382_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 5,
            colorName: 'Black',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }
        ],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_026083_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 11,
        name: "Dance Queen Studio Jogger",
        purpose: 'Designed for On the Move',
        desc_heading: 'Lightweight, Swift Fabric',
        description: "Designed with our lightweight, Swift Fabric for a breathable, two-way stretch.",
        fit: 'Relaxed Fit, Full Length',
        material: '94% Nylon, 6% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 98.99,
        gender: "women",
        type: "pants",
        img: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'Black',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_0001_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_0001_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_0001_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_0001_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Navy',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_031382_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_031382_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_031382_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_031382_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_031382_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_0001_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 12,
        name: "LA Sweat Pant 26\x22",
        purpose: 'Designed for On the Move',
        desc_heading: 'Soft, Cotton Blend',
        description: "Designed with our soft Cotton blend for a naturally breathable, soft experience.",
        fit: 'High Rise, 26\x22 Inseam',
        material: '92% Nylon, 8% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 108.99,
        gender: "women",
        type: "pants",
        img: 'https://images.lululemon.com/is/image/lululemon/LW5DADS_047311_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true,
        colors: [{
            colorId: 1,
            colorName: 'Key Lime',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW5DADS_047311_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW5DADS_047311_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW5DADS_047311_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Stargaze',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW5DADS_047310_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW5DADS_047310_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW5DADS_047310_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }],
        sizes: [0, 2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW5DADS_047311_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 13,
        name: "Free to Be Bra Long Line",
        purpose: 'Designed for Yoga',
        desc_heading: 'Smooth, Luxtreme Fabric',
        description: "Designed with breathable, sweat-wicking Luxtreme Fabric for a smooth, cool feel. With added Lycra fibre, this bra offers a four-way stretch and superior shape, as well as light support for an A/B cup.",
        fit: 'Light Support, A/B Cup',
        material: '89% Nylon, 11% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 38.99,
        gender: "women",
        type: "light-support",
        img: 'https://images.lululemon.com/is/image/lululemon/LW2BHSS_036303_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bras",
        highlight: false,
        colors: [{
            colorId: 1,
            colorName: 'Jade Grey',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW2BHSS_036303_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW2BHSS_036303_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW2BHSS_036303_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW2BHSS_036303_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW2BHSS_036303_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }],
        sizes: [2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW2BHSS_036303_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 14,
        name: "Free to Be Bra Regular",
        purpose: 'Designed for Yoga',
        desc_heading: 'Buttery-Soft, Nulu Fabric',
        description: "Designed with our buttery-soft, sweat-wicking Nulu Fabric for a lightweight, barely there experience. With added Lycra fibre, this bra offers a four-way stretch and superior shape.",
        fit: 'Tight Fit, Cropped Length',
        material: '81% Nylon, 18% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 48.99,
        gender: "women",
        type: "light-support",
        img: 'https://images.lululemon.com/is/image/lululemon/LW2C82S_022921_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bras",
        highlight: false,
        colors: [{
            colorId: 1,
            colorName: 'Silver Stripe',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW2C82S_022921_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW2C82S_022921_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW2C82S_022921_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW2C82S_022921_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW2C82S_022921_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Porcelain',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW2731S_037015_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 3,
            colorName: 'Algae',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW2670S_044329_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 4,
            colorName: 'Black',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW2670S_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }
        ],
        sizes: [2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW2C82S_022921_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    },
    {
        id: 15,
        name: "Ebb to Train Bra",
        purpose: 'Designed for Training',
        desc_heading: 'No-Chafe, Seamless Construction',
        description: "Designed with our buttery-soft, sweat-wicking Fabric for a soft, zero-chafe experience. With added Lycra fibre, this bra offers a four-way stretch and superior shape.",
        fit: 'Medium Support, C/D Cup',
        material: '85% Nylon, 15% Lycra Elastane',
        care: ['Wash with like colours', 'Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean'],
        price: 68.99,
        gender: "women",
        type: "medium-support",
        img: 'https://images.lululemon.com/is/image/lululemon/LW2BLGS_037013_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bras",
        highlight: false,
        colors: [{
            colorId: 1,
            colorName: 'Lavender',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW2BLGS_037013_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img2: 'https://images.lululemon.com/is/image/lululemon/LW2BLGS_037013_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img3: 'https://images.lululemon.com/is/image/lululemon/LW2BLGS_037013_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img4: 'https://images.lululemon.com/is/image/lululemon/LW2BLGS_037013_4?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
            img5: 'https://images.lululemon.com/is/image/lululemon/LW2BLGS_037013_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }, {
            colorId: 2,
            colorName: 'Algae',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW2BLGS_043608_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        },
        {
            colorId: 3,
            colorName: 'Black',
            img1: 'https://images.lululemon.com/is/image/lululemon/LW2BLGS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
        }
        ],
        sizes: [2, 4, 6, 8, 10, 12, 14],
        hover1: 'https://images.lululemon.com/is/image/lululemon/LW2BLGS_037013_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    }


];

export default Products;