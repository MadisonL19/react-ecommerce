const Products = [
    {
        id: 1,
        name: "Ever Cropped Long Sleeve",
        description: "Designed with our Buttery-Soft, Nulu Fabric. Four-way stretch. Lightweight. Sweat-wicking.",
        price: 97.99,
        gender: "women",
        type: "long-sleeve",
        img: 'https://images.lululemon.com/is/image/lululemon/LW3DMSS_043612_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: true
    },
    {
        id: 2,
        name: "Align Tank",
        description: "Designed with our Buttery-Soft, Nulu Fabric. Four-way stretch. Lightweight. Sweat-wicking.",
        price: 54.99,
        gender: "women",
        type: "tank-top",
        img: 'https://images.lululemon.com/is/image/lululemon/LW1CRTS_0002_2?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: false
    },
    {
        id: 3,
        name: "All Tied Up Tank",
        description: "Designed with our Super-Soft, Pima Cotton Fabric. Four-way stretch. Soft. Breathable.",
        price: 48.99,
        gender: "women",
        type: "tank-top",
        img: 'https://images.lululemon.com/is/image/lululemon/LW1CK1S_044256_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: true
    },
    {
        id: 4,
        name: "Quick Pace Short Sleeve",
        description: "Designed with Sweat-Wicking Fabric to keep your workouts cool. Quick-drying. UV-protective. Breathable.",
        price: 68.99,
        gender: "women",
        type: "short-sleeve",
        img: 'https://images.lululemon.com/is/image/lululemon/LW3CHIS_0002_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: true
    },
    {
        id: 5,
        name: "Heart Open Long Sleeve",
        description: "Designed with Vitasea Fabric. Layered look without the fuss.",
        price: 78.99,
        gender: "women",
        type: "long-sleeve",
        img: 'https://images.lululemon.com/is/image/lululemon/LW3DPPS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: true
    },
    {
        id: 6,
        name: "Cut-It-Out Crop Tank",
        description: "Designed with our Super-Soft, Pima Cotton Fabric. Four-way stretch. Soft. Breathable.",
        price: 37.99,
        gender: "women",
        type: "tank-top",
        img: 'https://images.lululemon.com/is/image/lululemon/LW1CBCS_0002_3?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "tops",
        highlight: true
    },
    {
        id: 7,
        name: "Wunder Dream High-Rise Tight 28\x22",
        description: "Designed with our Smooth, Luxtreme Fabric. Sweat-wicking. Four-way stretch. Breathable.",
        price: 98.99,
        gender: "women",
        type: "pants",
        img: 'https://images.lululemon.com/is/image/lululemon/LW5CQSS_045102_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true
    },
    {
        id: 8,
        name: "Invigorate Me High-Rish Tight 25\x22",
        description: "Designed with our Ultra Quick-Drying, Everlux Fabric. Ultra-fast drying. Highly breathable. Supportive.",
        price: 138.99,
        gender: "women",
        type: "pants",
        img: 'https://images.lululemon.com/is/image/lululemon/LW5CR9S_043989_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true
    },
    {
        id: 9,
        name: "All the Right Places Crop 23\x22",
        description: "Designed with our Smooth, Luxtreme Fabric. Sweat-wicking. Four-way stretch. Breathable.",
        price: 118.99,
        gender: "women",
        type: "capris",
        img: 'https://images.lululemon.com/is/image/lululemon/LW6AMYS_026950_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true
    },
    {
        id: 10,
        name: "Sunday Revival High-Rise Crop 22\x22",
        description: "Designed with our Smooth, Luxtreme Fabric. Sweat-wicking. Four-way stretch. Breathable.",
        price: 88.99,
        gender: "women",
        type: "capris",
        img: 'https://images.lululemon.com/is/image/lululemon/LW6BAVS_026083_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true
    },
    {
        id: 11,
        name: "Dance Queen Studio Jogger",
        description: "Designed with our Lightweight, Swift Fabric. Two-way stetch. Lightweight. Easy layering.",
        price: 98.99,
        gender: "women",
        type: "pants",
        img: 'https://images.lululemon.com/is/image/lululemon/LW5BPJS_0001_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true
    },
    {
        id: 12,
        name: "LA Sweat Pant 26\x22",
        description: "Designed with our Premium Cotton Blend. Breathable. Soft. Versatile.",
        price: 108.99,
        gender: "women",
        type: "pants",
        img: 'https://images.lululemon.com/is/image/lululemon/LW5DADS_047311_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bottoms",
        highlight: true
    },
    {
        id: 13,
        name: "Free to Be Bra Long Line",
        description: "Designed with our Smooth, Luxtreme Fabric. Four-way stretch. Sweat-wicking. Breathable.",
        price: 38.99,
        gender: "women",
        type: "light-support",
        img: 'https://images.lululemon.com/is/image/lululemon/LW2BHSS_036303_5?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bras",
        highlight: false
    },
    {
        id: 14,
        name: "Free to Be Bra Regular",
        description: "Designed with our Smooth, Luxtreme Fabric. Four-way stretch. Sweat-wicking. Breathable.",
        price: 48.99,
        gender: "women",
        type: "light-support",
        img: 'https://images.lululemon.com/is/image/lululemon/LW2C82S_022921_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bras",
        highlight: false
    },
    {
        id: 15,
        name: "Ebb to Train Bra",
        description: "Designed for a No-Chafe, Seamless experience. Four-way stretch. Sweat-wicking. Soft.",
        price: 68.99,
        gender: "women",
        type: "medium-support",
        img: 'https://images.lululemon.com/is/image/lululemon/LW2BLGS_037013_1?$image_carousel$&wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
        category: "bras",
        highlight: false
    }


];

export default Products;