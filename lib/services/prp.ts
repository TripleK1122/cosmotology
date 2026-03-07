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
            "PRP (Platelet-Rich Plasma) facial rejuvenation uses your own plasma to support smoother texture, improved tone, and a naturally refreshed appearance.",
        duration: "75 minutes",
        price: "$400",
        benefits: [
            "Supports collagen production",
            "Improves skin tone and texture",
            "Promotes natural rejuvenation",
        ],
        whoFor: ["Fine lines", "Uneven texture", "Dull skin", "Natural rejuvenation"],
        image: "",
    },
    {
        slug: "prp-face-neck-treatment",
        categoryId: "prp",
        group: "Skin Rejuvenation",
        title: "PRP Face + Neck Treatment",
        subtitle:
            "Rejuvenate your skin naturally with PRP for the face and neck. This treatment helps improve tone, texture, and overall skin vitality.",
        duration: "90 minutes",
        price: "$450",
        benefits: [
            "Targets face and neck together",
            "Supports firmer-looking skin",
            "Improves overall texture",
        ],
        whoFor: ["Face and neck rejuvenation", "Early signs of aging", "Skin texture concerns"],
        image: "",
    },
    {
        slug: "prp-face-neck-treatment-package-3-sessions",
        categoryId: "prp",
        group: "Skin Rejuvenation",
        title: "PRP Face + Neck Treatment Package 3-Sessions",
        subtitle:
            "A 3-session PRP package for face and neck designed for more consistent rejuvenation and progressive visible improvement over time.",
        duration: "90 minutes",
        price: "$1215",
        benefits: [
            "Series-based results",
            "Supports long-term skin improvement",
            "More consistent rejuvenation",
        ],
        whoFor: ["Clients seeking a treatment series", "Face and neck rejuvenation", "Longer-term improvement"],
        image: "",
    },
    {
        slug: "prp-face-hands-treatment",
        categoryId: "prp",
        group: "Skin Rejuvenation",
        title: "PRP Face + Hands Treatment",
        subtitle:
            "PRP treatment for the face and hands helps support smoother texture, refreshed tone, and a more youthful overall appearance.",
        duration: "90 minutes",
        price: "$450",
        benefits: [
            "Rejuvenates face and hands together",
            "Supports skin texture and tone",
            "Natural revitalization",
        ],
        whoFor: ["Visible signs of aging in hands", "Dull skin", "Texture concerns", "Natural approach"],
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
            "PRP (Platelet-Rich Plasma) for hair is a treatment that uses your own blood plasma to support healthier follicles and stimulate hair growth.",
        duration: "60 minutes",
        price: "$350",
        benefits: [
            "Supports healthier hair follicles",
            "Encourages hair growth",
            "Natural hair restoration approach",
        ],
        whoFor: ["Thinning hair", "Early hair loss", "Hair shedding support"],
        image: "",
    },
    {
        slug: "prp-hair-restoration-treatment-package-3-session",
        categoryId: "prp",
        group: "Hair Restoration",
        title: "PRP Hair Restoration Treatment Package (3-Session)",
        subtitle:
            "A 3-session PRP hair restoration package designed to support stronger follicles and more consistent progress over time.",
        duration: "60 minutes",
        price: "$945",
        benefits: [
            "Series-based support",
            "More consistent treatment plan",
            "Better long-term value",
        ],
        whoFor: ["Thinning hair", "Early hair loss", "Clients wanting a treatment series"],
        image: "",
    },
    {
        slug: "prp-hair-restoration-treatment-package-6-session",
        categoryId: "prp",
        group: "Hair Restoration",
        title: "PRP Hair Restoration Treatment Package( 6 Session )",
        subtitle:
            "An extended 6-session PRP hair restoration package for clients looking for a more complete and longer-term treatment plan.",
        duration: "60 minutes",
        price: "$1890",
        benefits: [
            "Extended treatment series",
            "Long-term follicle support",
            "Best option for ongoing restoration",
        ],
        whoFor: ["Advanced hair restoration plan", "Long-term support", "More visible progressive results"],
        image: "",
    },
];