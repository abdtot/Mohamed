/* ===== بيانات تجريبية للتطبيق ===== */
window.DB = {
  cities: ["كل المدن", "بغداد", "البصرة", "أربيل", "النجف", "كربلاء", "الموصل"],

  properties: [
    {
      id: 1,
      title: "شقة فاخرة مطلة على النهر",
      city: "بغداد",
      district: "الكرادة",
      price: 450000,
      area: 140,
      rooms: 3,
      baths: 2,
      floor: 5,
      furnished: true,
      tag: "مميز",
      desc: "شقة عصرية واسعة بإطلالة بانورامية على النهر، تشطيب فاخر مع مطبخ مجهز بالكامل وتكييف مركزي. قريبة من المولات والخدمات الأساسية.",
      phone: "07701234567",
      owner: "أحمد العبيدي",
      amenities: ["مكيف مركزي", "مفروشة", "مصعد", "موقف سيارة", "إنترنت"],
      images: ["images/prop1.png", "images/prop3.png", "images/prop4.png", "images/prop5.png"],
      lat: 33.3152, lng: 44.3661
    },
    {
      id: 2,
      title: "شقة حديثة في برج سكني",
      city: "أربيل",
      district: "عنكاوا",
      price: 600000,
      area: 165,
      rooms: 3,
      baths: 2,
      floor: 9,
      furnished: false,
      tag: "جديد",
      desc: "شقة في برج سكني حديث مع خدمات متكاملة وأمن على مدار الساعة. تصميم مفتوح وإضاءة طبيعية ممتازة.",
      phone: "07509876543",
      owner: "سيوان رشيد",
      amenities: ["مصعد", "أمن 24 ساعة", "موقف سيارة", "صالة رياضية"],
      images: ["images/prop2.png", "images/prop6.png", "images/prop1.png"],
      lat: 36.2360, lng: 43.9930
    },
    {
      id: 3,
      title: "ستوديو مفروش بالكامل",
      city: "البصرة",
      district: "العشار",
      price: 250000,
      area: 65,
      rooms: 1,
      baths: 1,
      floor: 2,
      furnished: true,
      tag: null,
      desc: "ستوديو أنيق ومفروش بالكامل مناسب للعزاب أو الأزواج الجدد. موقع حيوي قريب من الأسواق ووسائل النقل.",
      phone: "07801112233",
      owner: "أحمد العبيدي",
      amenities: ["مفروشة", "مكيف", "إنترنت"],
      images: ["images/prop6.png", "images/prop3.png", "images/prop4.png"],
      lat: 30.5085, lng: 47.7804
    },
    {
      id: 4,
      title: "شقة عائلية واسعة",
      city: "النجف",
      district: "حي السلام",
      price: 350000,
      area: 120,
      rooms: 2,
      baths: 2,
      floor: 3,
      furnished: false,
      tag: null,
      desc: "شقة عائلية مريحة بمساحة جيدة وغرف واسعة، مناسبة للعائلات الصغيرة. بيئة هادئة وقريبة من المدارس.",
      phone: "07703334455",
      owner: "حسين الكعبي",
      amenities: ["مكيف", "موقف سيارة", "حديقة"],
      images: ["images/prop5.png", "images/prop1.png", "images/prop3.png"],
      lat: 32.0000, lng: 44.3350
    },
    {
      id: 5,
      title: "بنتهاوس بإطلالة المدينة",
      city: "بغداد",
      district: "المنصور",
      price: 850000,
      area: 220,
      rooms: 4,
      baths: 3,
      floor: 12,
      furnished: true,
      tag: "مميز",
      desc: "بنتهاوس فاخر بإطلالة خلابة على المدينة، تشطيبات راقية وتراس واسع. مثالي لمن يبحث عن الرفاهية والخصوصية.",
      phone: "07705556677",
      owner: "سيوان رشيد",
      amenities: ["مكيف مركزي", "مفروشة", "مصعد", "موقف سيارة", "تراس", "أمن 24 ساعة"],
      images: ["images/prop5.png", "images/prop4.png", "images/prop1.png", "images/prop6.png"],
      lat: 33.3100, lng: 44.3300
    },
    {
      id: 6,
      title: "شقة اقتصادية مرتبة",
      city: "كربلاء",
      district: "حي الحسين",
      price: 200000,
      area: 80,
      rooms: 2,
      baths: 1,
      floor: 1,
      furnished: false,
      tag: null,
      desc: "شقة اقتصادية نظيفة ومرتبة بسعر مناسب، قريبة من المرافق الخدمية والأسواق الشعبية.",
      phone: "07707778899",
      owner: "حسين الكعبي",
      amenities: ["مكيف", "إنترنت"],
      images: ["images/prop3.png", "images/prop6.png"],
      lat: 32.6160, lng: 44.0240
    }
  ],

  ads: [
    { img: "images/banner1.png", title: "اعثر على شقة أحلامك", sub: "أكثر من 500 شقة متاحة للإيجار الآن" },
    { img: "images/prop5.png", title: "عروض حصرية", sub: "شقق فاخرة بأسعار تنافسية" },
    { img: "images/prop2.png", title: "أبراج سكنية حديثة", sub: "خدمات متكاملة وأمان على مدار الساعة" }
  ],

  bookings: [
    { id: 101, propId: 1, status: "confirmed", date: "2026-06-18", customer: "علي محمود", customerPhone: "07701110000" },
    { id: 102, propId: 3, status: "pending", date: "2026-06-22", customer: "مريم صالح", customerPhone: "07502220000" },
    { id: 103, propId: 5, status: "cancelled", date: "2026-06-10", customer: "كرم حيدر", customerPhone: "07803330000" }
  ],

  ownerBookings: [
    { id: 201, propId: 1, status: "pending", date: "2026-06-23", customer: "زيد عماد", customerPhone: "07701234999" },
    { id: 202, propId: 5, status: "pending", date: "2026-06-22", customer: "نور الهدى", customerPhone: "07509998888" },
    { id: 203, propId: 1, status: "confirmed", date: "2026-06-15", customer: "علي محمود", customerPhone: "07701110000" }
  ],

  notifications: [
    { id: 1, type: "ok", title: "تم قبول طلب الحجز", body: "وافق مالك العقار على طلب حجزك لشقة «شقة فاخرة مطلة على النهر». تواصل معه على 07701234567.", time: "قبل 10 دقائق", unread: true },
    { id: 2, type: "warn", title: "طلب حجز قيد الانتظار", body: "تم إرسال طلب حجزك لشقة «ستوديو مفروش بالكامل» وهو الآن بانتظار موافقة المالك.", time: "قبل ساعة", unread: true },
    { id: 3, type: "bad", title: "تم رفض طلب الحجز", body: "اعتذر المالك عن قبول طلب حجزك لشقة «بنتهاوس بإطلالة المدينة».", time: "أمس", unread: false },
    { id: 4, type: "info", title: "مرحباً بك في تطبيق محمد عباس", body: "ابدأ بتصفح الشقق المتاحة واحجز سكنك المثالي بسهولة.", time: "قبل 3 أيام", unread: false }
  ]
};
