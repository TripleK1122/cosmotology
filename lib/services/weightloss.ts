// lib/services/weightloss.ts
import type { Service } from "@/lib/types";

export const weightloss: Service[] = [
    {
        slug: "medically-managed-weight-loss-new-patient",
        categoryId: "weightloss",
        title: "Medically Managed Weight Loss – New Patient",
        subtitle:
            "Our Medically Managed Weight Loss Program is not just another diet — it’s a medically supervised plan designed for real, sustainable change.",
        duration: "30 minutes",
        price: "",
        benefits: [
            "Medical intake & eligibility review",
            "Personalized treatment roadmap",
            "Clear next steps & support plan",
        ],
        whoFor: ["New patients", "Anyone starting the program"],
        image: "", // позже добавишь, например: "/images/services/weightloss-new.jpg"
    },
    {
        slug: "medically-managed-weight-loss-follow-up",
        categoryId: "weightloss",
        title: "Medically Managed Weight Loss – Follow Up",
        subtitle:
            "Ongoing check-ins to track progress, adjust your plan, and keep results moving in the right direction.",
        duration: "30 minutes",
        price: "",
        benefits: [
            "Progress review & adjustments",
            "Support & accountability",
            "Updated plan recommendations",
        ],
        whoFor: ["Existing patients", "Follow-up visits"],
        image: "",
    },
];
