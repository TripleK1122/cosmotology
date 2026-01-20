import type { Service } from "@/lib/types";

export const mens: Service[] = [
    {
        slug: "mens-facial",
        categoryId: "mens",
        title: "Men’s Facial",
        subtitle:
            "A results-driven facial designed for men’s skin—deep cleansing, gentle exfoliation, hydration, and calming care for a healthier, clearer complexion.",
        duration: "75 minutes",
        price: "$135",
        benefits: [
            "Deep pore cleansing and detox",
            "Smoother texture and refined pores",
            "Hydration and barrier support",
            "Calms redness and irritation",
        ],
        whoFor: ["Men with normal to oily skin", "Congested pores", "Dull or tired-looking skin"],
        image: "",
    },
    {
        slug: "just-for-him-facial",
        categoryId: "mens",
        title: "Just for Him Facial",
        subtitle:
            "A classic men’s treatment focused on comfort and visible refresh—cleansing, exfoliation, massage, and hydration to restore balance and glow.",
        duration: "60 minutes",
        price: "$135",
        benefits: [
            "Fresh, clean feeling without dryness",
            "Reduces congestion and roughness",
            "Relaxing facial massage",
            "Improves overall tone and texture",
        ],
        whoFor: ["First-time facial clients", "Busy professionals", "Men who want simple, effective care"],
        image: "",
    },
    {
        slug: "gentlemen-glow-facial",
        categoryId: "mens",
        title: "Gentlemen’s Glow Facial",
        subtitle:
            "Brightening and smoothing facial to improve tone and texture—ideal for men who want a more even, energized look.",
        duration: "75 minutes",
        price: "$150",
        benefits: [
            "Brighter, more even tone",
            "Smoother texture",
            "Hydration + glow",
            "Helps reduce dullness",
        ],
        whoFor: ["Dull skin", "Uneven tone", "Men who want a polished look"],
        image: "",
    },
    {
        slug: "mens-back-treatment",
        categoryId: "mens",
        title: "Men’s Back Treatment",
        subtitle:
            "Back-focused deep cleansing treatment to help with congestion, breakouts, and rough texture. Includes exfoliation, extractions (as needed), and calming care.",
        duration: "60 minutes",
        price: "$120",
        benefits: [
            "Helps reduce back breakouts",
            "Deep cleanse and exfoliation",
            "Smoother skin texture",
            "Calms inflammation",
        ],
        whoFor: ["Back acne", "Congestion", "Athletes and gym-goers"],
        image: "",
    },
];
