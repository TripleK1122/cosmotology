import type { Service } from "@/lib/types";

export const peelings: Service[] = [
    {
        slug: "biorepeel",
        categoryId: "peelings",
        title: "BioRePeel",
        subtitle:
            "An innovative Italian chemical peel suitable for all seasons. Helps renew tone, texture, and radiance.",
        duration: "60 minutes",
        price: "$155",
        benefits: ["Brighter tone", "Smoother texture", "Refined pores"],
        whoFor: ["Dullness", "Uneven tone", "Texture"],
        image: "",
    },
    {
        slug: "biorepeel-package-3-session",
        categoryId: "peelings",
        title: "BioRePeel Package (3 Sessions)",
        subtitle:
            "A 3-session plan for stronger, more consistent results with progressive improvement in texture and glow.",
        duration: "60 minutes",
        price: "$375",
        benefits: ["Progressive results", "Improved glow", "Smoother texture over time"],
        whoFor: ["Best results seekers", "Texture", "Tone", "Fine lines"],
        image: "",
    },
    {
        slug: "md-peel",
        categoryId: "peelings",
        title: "MD Peel",
        subtitle:
            "Medical peels designed to target a variety of skin concerns with a focused, professional approach.",
        duration: "60 minutes",
        price: "$130",
        benefits: ["Refined texture", "Brighter tone", "More even complexion"],
        whoFor: ["Texture", "Tone", "Congestion", "Fine lines"],
        image: "",
    },
    {
        slug: "prx-t33-peel",
        categoryId: "peelings",
        title: "PRX-T 33 Peel",
        subtitle:
            "A next-level peel option to refine texture and stimulate renewal for a brighter, smoother complexion.",
        duration: "60 minutes",
        price: "$155",
        benefits: ["Brighter tone", "Refined texture", "Fresh glow"],
        whoFor: ["Dullness", "Texture", "Uneven tone"],
        image: "",
    },
    {
        slug: "prx-t33-peel-package-3-session",
        categoryId: "peelings",
        title: "PRX-T 33 Peel Package (3 Sessions)",
        subtitle: "A 3-session series designed for progressive improvement and longer-lasting results.",
        duration: "60 minutes",
        price: "$375",
        benefits: ["Progressive improvement", "Better tone + texture", "Series results"],
        whoFor: ["Best results seekers", "Texture", "Tone"],
        image: "",
    },
];
