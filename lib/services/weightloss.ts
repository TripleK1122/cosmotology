import type { Service } from "@/lib/types";

export const weightloss: Service[] = [
    {
        slug: "medically-managed-weight-loss-follow-up",
        categoryId: "weightloss",
        title: "Medically Managed Weight Loss- Follow Up",
        subtitle:
            "Medical Weight Loss – Follow Up. Clinical follow-up appointment to evaluate treatment progress, review response, and adjust your care plan as needed.",
        duration: "30 minutes",
        price: "",
        benefits: [
            "Progress evaluation",
            "Treatment plan adjustments",
            "Clinical follow-up support",
        ],
        whoFor: ["Existing patients", "Ongoing weight loss treatment", "Program follow-up visits"],
        image: "",
    },
    {
        slug: "medically-managed-weight-loss-new-patient",
        categoryId: "weightloss",
        title: "Medically Managed Weight Loss- New Patient",
        subtitle:
            "GLP-1 Medical Weight Management Program. Our medically supervised weight management program is designed to support safe, structured, and sustainable results.",
        duration: "30 minutes",
        price: "",
        benefits: [
            "Initial medical evaluation",
            "Program eligibility review",
            "Personalized treatment roadmap",
        ],
        whoFor: ["New patients", "Patients starting a GLP-1 program", "Medical weight loss consultation"],
        image: "",
    },
];