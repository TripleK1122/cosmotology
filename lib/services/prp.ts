import type { Service } from "@/lib/types";

export const prp: Service[] = [
    // =====================
    // SKIN REJUVENATION
    // =====================

    {
        slug: "prp-face-treatment",
        categoryId: "prp",
        group: "Skin Rejuvenation",
        title: "PRP Face Treatment",
        subtitle:
            "PRP (Platelet-Rich Plasma) facial rejuvenation using your own blood plasma to support a refreshed, healthier look.",
        duration: "90 minutes",
        price: "$300",
        benefits: ["Natural rejuvenation", "Supports collagen", "Improves overall tone"],
        whoFor: ["Fine lines", "Texture", "Dullness", "Natural approach"],
    },
    {
        slug: "prp-face-neck-treatment",
        categoryId: "prp",
        group: "Skin Rejuvenation",
        title: "PRP Face + Neck Treatment",
        subtitle:
            "A focused PRP session for face and neck to support smoother texture and a more even, refreshed appearance.",
        duration: "90 minutes",
        price: "$350",
        benefits: ["Targets face + neck", "Natural skin support", "Improves tone + texture"],
        whoFor: ["Face + neck concerns", "Early aging signs", "Texture"],
    },
    {
        slug: "prp-face-hands-treatment",
        categoryId: "prp",
        group: "Skin Rejuvenation",
        title: "PRP Face + Hands Treatment",
        subtitle:
            "PRP rejuvenation for face and hands to support volume, tone, and a more youthful look.",
        duration: "90 minutes",
        price: "$350",
        benefits: ["Face + hands support", "More even tone", "Natural revitalization"],
        whoFor: ["Hands aging", "Dullness", "Texture", "Natural results"],
        image: "",
    },
    {
        slug: "prp-face-neck-package-3-sessions",
        categoryId: "prp",
        group: "Skin Rejuvenation",
        title: "PRP Face + Neck Package (3 Sessions)",
        subtitle:
            "A 3-session package designed for progressive improvement and longer-lasting results.",
        duration: "90 minutes",
        price: "$945",
        benefits: ["Series results", "More consistent improvement", "Better overall tone"],
        whoFor: ["Best results seekers", "Series plan", "Face + neck rejuvenation"],
        image: "",
    },
    {
        slug: "prp-hand-treatment",
        categoryId: "prp",
        group: "Skin Rejuvenation",
        title: "PRP Hand Treatment",
        subtitle:
            "A rejuvenating procedure that uses platelet-rich plasma to support volume and improve the look of hands.",
        duration: "60 minutes",
        price: "$200",
        benefits: ["Improves hand texture", "Supports volume", "More even tone"],
        whoFor: ["Hands aging", "Dryness", "Crepey texture"],
        image: "",
    },

    // =====================
    // HAIR RESTORATION
    // =====================

    {
        slug: "prp-hair-restoration",
        categoryId: "prp",
        group: "Hair Restoration",
        title: "PRP Hair Restoration",
        subtitle:
            "PRP for hair is a treatment that uses your own blood to support healthier follicles and stimulate growth.",
        duration: "60 minutes",
        price: "$300",
        benefits: ["Supports hair growth", "Strengthens follicles", "Natural approach"],
        whoFor: ["Thinning hair", "Early hair loss", "Shedding support"],
        image: "",
    },
    {
        slug: "prp-hair-restoration-package-3-sessions",
        categoryId: "prp",
        group: "Hair Restoration",
        title: "PRP Hair Restoration Package (3 Sessions)",
        subtitle:
            "A 3-session plan designed to build momentum and improve results over time.",
        duration: "60 minutes",
        price: "$810",
        benefits: ["Consistency", "Progressive support", "Best series value"],
        whoFor: ["Best results seekers", "Thinning hair", "Series treatment plan"],
        image: "",
    },
    {
        slug: "prp-hair-restoration-package-5-sessions",
        categoryId: "prp",
        group: "Hair Restoration",
        title: "PRP Hair Restoration Package (5 Sessions)",
        subtitle:
            "An extended 5-session package for stronger, more consistent long-term support.",
        duration: "60 minutes",
        price: "$1350",
        benefits: ["Extended series", "Long-term support", "More consistent progress"],
        whoFor: ["Advanced plan", "Long-term results", "Thinning hair"],
        image: "",
    },
];
