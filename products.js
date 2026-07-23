// ملف المنتجات الرئيسي للمتجر - WOSHWOSHA

const defaultProducts = [
    {
        id: 1,
        name: "عطر رويال الفاخر",
        price: 350,
        category: "per",
        images: ["https://via.placeholder.com/150"],
        description: "عطر فاخر يدوم طويلاً."
    },
    {
        id: 2,
        name: "أحمر شفاه مات فابت",
        price: 180,
        category: "mackup",
        images: ["https://via.placeholder.com/150"],
        description: "أحمر شفاه ثابت ومقاوم للماء."
    },
    {
        id: 3,
        name: "سيروم العناية بالبشرة",
        price: 250,
        category: "cream",
        images: ["https://via.placeholder.com/150"],
        description: "سيروم مرطب ومنعم للبشرة."
    },
    {
        id: 4,
        name: "لوشن العناية بالجسم",
        price: 200,
        category: "cairboudy",
        images: ["https://via.placeholder.com/150"],
        description: "ترطيب عميق يدوم طوال اليوم."
    }
];

let allProducts = JSON.parse(localStorage.getItem('woshwosha_products'));

if (!allProducts || allProducts.length === 0) {
    allProducts = defaultProducts;
    localStorage.setItem('woshwosha_products', JSON.stringify(allProducts));
}