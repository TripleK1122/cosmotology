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
        title: "Medically Managed Weight Loss - New Patient",
        subtitle:
            "Begin your journey with our medically supervised weight management program designed to support safe, structured, and sustainable weight loss. During this initial consultation, we evaluate your health history, discuss your goals, and determine if GLP-1 therapy or other medical weight management options are appropriate for you. Our personalized approach focuses on achieving long-term, healthy results through expert medical guidance and individualized treatment planning. A personalized medical approach designed to support safe and lasting results.",
        duration: "30 minutes",
        price: "",
        benefits: [
            "Comprehensive medical evaluation",
            "Personalized treatment strategy",
            "GLP-1 program eligibility assessment",
            "Professional guidance for sustainable weight loss",
        ],
        whoFor: [
            "New patients",
            "Patients starting a GLP-1 program",
            "Medical weight loss consultation",
        ],
        image: "",
    },
];