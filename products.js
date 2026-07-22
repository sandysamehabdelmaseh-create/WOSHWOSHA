const allProducts = [
    // --- 1. قسم نيلز (nails) ---
    { 
        id: 101, 
        name: "طقم مناكير ألوان زاهية", 
        price: 120, 
        category: "nails",
        images: ["https://images.unsplash.com/photo-1632345031435-8777f6b9ae8c?auto=format&fit=crop&w=600&q=80"],
        description: "أطقم مناكير بألوان عصرية وثبات عالي."
    },

    // --- 2. قسم مكياج (makeup) ---
    { 
        id: 201, 
        name: "باكيت مكياج متكامل", 
        price: 350, 
        category: "makeup",
        images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"],
        description: "مجموعة مكياج أساسية لإطلالة يومية ساحرة."
    },

    // --- 3. قسم برفانات (perfumes) ---
    {
        id: 301,
        name: "برفان فانيليا الفاخر - WOSHWOSHA",
        price: 180,
        category: "perfumes",
        images: ["https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80"],
        description: "عطر برائحة الفانيليا الساحرة والدافئة، يدوم طويلاً."
    },

    // --- 4. قسم فرش الشعر (hair-brushes) ---
    { 
        id: 401, 
        name: "فرشاة شعر مساج لتنشيط الدورة الدموية", 
        price: 90, 
        category: "hair-brushes",
        images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"],
        description: "فرشاة عملية ومريحة لفك تشابك الشعر."
    },

    // --- 5. قسم عناية بالشعر (hair-care) ---
    { 
        id: 501, 
        name: "حمام كريم بالحليب والبروتين المغذي", 
        price: 140, 
        category: "hair-care",
        images: [
            "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1608248597359-99427b3b320d?auto=format&fit=crop&w=600&q=80"
        ],
        description: "حمام كريم غني بالحليب والبروتينات لتغذية الشعر التالف."
    },
    { 
        id: 502, 
        name: "سيروم الأرجان المعالج للشعر المتضرر", 
        price: 195, 
        category: "hair-care",
        images: ["https://images.unsplash.com/photo-1608248597359-99427b3b320d?auto=format&fit=crop&w=600&q=80"],
        description: "سيروم بزيت الأرجان النقي المعالج للأطراف المتقصفة."
    },

    // --- 6. قسم عناية بالجسم (body-care) ---
    { 
        id: 601, 
        name: "لوشن مرطب للجسم برائحة اللافندر", 
        price: 160, 
        category: "body-care",
        images: ["https://images.unsplash.com/photo-1608248597359-99427b3b320d?auto=format&fit=crop&w=600&q=80"],
        description: "ترطيب عميق يدوم طوال اليوم مع نعومة فائقة."
    },

    // --- 7. قسم كريمات وعناية بالبشرة (skincare) ---
    { 
        id: 701, 
        name: "كريم ترطيب مرطب للوجه", 
        price: 130, 
        category: "skincare",
        images: ["https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"],
        description: "كريم مغذي يناسب جميع أنواع البشرة."
    },

    // --- 8. قسم الأطفال (kids) ---
    { 
        id: 801, 
        name: "شامبو الأطفال اللطيف", 
        price: 85, 
        category: "kids",
        images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"],
        description: "تركيبة لطيفة لا تسبب دموع للأطفال."
    },

    // --- 9. قسم الورقيات (paper) ---
    { 
        id: 901, 
        name: "رول مناديل مطبخ الكبيرة", 
        price: 45, 
        category: "paper",
        images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"],
        description: "رول مناديل مطبخ كبيرة عالية الجودة وعالية الامتصاص."
    }
];

// حفظ المنتجات الافتراضية في الـ LocalStorage تلقائياً إذا لم تكن موجودة مسبقاً
if (!localStorage.getItem('woshwosha_products')) {
    localStorage.setItem('woshwosha_products', JSON.stringify(allProducts));
}