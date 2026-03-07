import type { Service } from "@/lib/types";

export const mens: Service[] = [
    {
        slug: "mens-back-detox-renewal",
        categoryId: "mens",
        title: "Men’s Back Detox & Renewal",
        subtitle:
            "A comprehensive back treatment designed to deeply cleanse, exfoliate, and restore the skin. This service helps improve congestion, rough texture, and overall skin clarity while leaving the back refreshed and renewed.",
        duration: "90 minutes",
        price: "$155",
        benefits: [
            "Deep cleansing and exfoliation",
            "Helps improve skin clarity",
            "Supports smoother back texture",
            "Refreshing detox treatment",
        ],
        whoFor: ["Back congestion", "Rough texture", "Back acne concerns", "Men wanting clearer skin"],
        image: "",
    },
    {
        slug: "mens-firm-lift-facial",
        categoryId: "mens",
        title: "Men’s Firm & Lift Facial",
        subtitle:
            "A results-driven treatment designed specifically for men’s skin to improve firmness, redefine facial contours, and restore a refreshed, energized appearance.",
        duration: "90 minutes",
        price: "$145",
        benefits: [
            "Supports firmer-looking skin",
            "Helps redefine facial contours",
            "Improves skin texture",
            "Restores refreshed appearance",
        ],
        whoFor: ["Men’s skin", "Loss of firmness", "Dull or tired-looking skin", "Preventive anti-aging care"],
        image: "",
    },
];