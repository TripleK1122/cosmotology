// lib/types.ts

export type CategoryId =
    | "mesotherapy"
    | "prp"
    | "facial"
    | "mens"
    | "weightloss"
    | "peelings";

export type Category = {
    id: CategoryId;
    title: string;
    description: string;
    image: string;
};

export type Service = {
    slug: string;
    categoryId: CategoryId;
    title: string;
    subtitle: string;
    duration?: string;
    price?: string;
    benefits: string[];
    whoFor: string[];
    image?: string;

    group?: "Skin Rejuvenation" | "Hair Restoration";
};

