export type Review = {
    id: string;
    name: string;
    initials: string;
    rating: 5 | 4;
    date: string; // e.g. "Dec 2025"
    source?: "Google" | "Instagram" | "Direct";
    verified?: boolean;
    title: string;
    text: string;
    treatment?: string;
};

export const reviews: Review[] = [
    {
        id: "r1",
        name: "Emily R.",
        initials: "ER",
        rating: 5,
        date: "Dec 2025",
        source: "Google",
        verified: true,
        title: "So calming and professional",
        text:
            "The studio feels private and serene. Everything was explained clearly and the results looked natural — exactly what I wanted. I also loved how gentle the entire process felt.",
        treatment: "Facial Treatment",
    },
    {
        id: "r2",
        name: "Sofia M.",
        initials: "SM",
        rating: 5,
        date: "Nov 2025",
        source: "Google",
        verified: true,
        title: "Glow that lasted",
        text:
            "My skin was brighter immediately and stayed smooth for weeks. The attention to detail is next level — the whole experience felt luxury from start to finish.",
        treatment: "Hydration Facial",
    },
    {
        id: "r3",
        name: "Olivia K.",
        initials: "OK",
        rating: 5,
        date: "Nov 2025",
        source: "Direct",
        verified: true,
        title: "Perfectly curated treatment",
        text:
            "I felt listened to and never rushed. I appreciated the clean, minimal approach and the way the plan was tailored to my skin. Super impressed.",
        treatment: "Facial Consultation",
    },
    {
        id: "r4",
        name: "Hannah L.",
        initials: "HL",
        rating: 5,
        date: "Oct 2025",
        source: "Google",
        verified: true,
        title: "Natural results",
        text:
            "If you’re nervous about looking ‘done’ — don’t be. Everything was subtle and refined. I looked like myself… just better.",
        treatment: "Injectables",
    },
    {
        id: "r5",
        name: "Ava T.",
        initials: "AT",
        rating: 5,
        date: "Oct 2025",
        source: "Instagram",
        verified: false,
        title: "Luxury vibe",
        text:
            "The studio is stunning and the experience is so relaxing. I loved the aftercare tips and the follow-up. You can tell this is a true professional.",
        treatment: "Facial Treatment",
    },
    {
        id: "r6",
        name: "Mia S.",
        initials: "MS",
        rating: 5,
        date: "Sep 2025",
        source: "Google",
        verified: true,
        title: "Best facial I’ve had",
        text:
            "The technique and products were incredible. My texture improved and my skin felt calm for days. I’ll be a regular.",
        treatment: "Texture + Calm",
    },
    {
        id: "r7",
        name: "Grace P.",
        initials: "GP",
        rating: 5,
        date: "Sep 2025",
        source: "Direct",
        verified: true,
        title: "Clean, thoughtful, premium",
        text:
            "Everything is intentional — from the routine to the studio details. I left feeling confident and refreshed.",
        treatment: "Facial Treatment",
    },
    {
        id: "r8",
        name: "Isabella C.",
        initials: "IC",
        rating: 5,
        date: "Aug 2025",
        source: "Google",
        verified: true,
        title: "Comfortable and discreet",
        text:
            "Private, calm, and very professional. I loved the consultation and how realistic the plan was.",
        treatment: "Consultation",
    },
    {
        id: "r9",
        name: "Chloe N.",
        initials: "CN",
        rating: 5,
        date: "Aug 2025",
        source: "Google",
        verified: true,
        title: "No pressure, just expertise",
        text:
            "I’ve been to places that upsell. Here it felt honest and focused on results. Amazing experience.",
        treatment: "Facial Treatment",
    },
    {
        id: "r10",
        name: "Lily B.",
        initials: "LB",
        rating: 5,
        date: "Jul 2025",
        source: "Instagram",
        verified: false,
        title: "My skin feels expensive",
        text:
            "That’s the best way to describe it. Smooth, hydrated, and glowing. Loved the gentle approach.",
        treatment: "Hydration Facial",
    },
    {
        id: "r11",
        name: "Natalie W.",
        initials: "NW",
        rating: 5,
        date: "Jul 2025",
        source: "Google",
        verified: true,
        title: "Worth it",
        text:
            "Perfect blend of calm + visible results. I also appreciated the clear aftercare instructions.",
        treatment: "Facial Treatment",
    },
    {
        id: "r12",
        name: "Emma D.",
        initials: "ED",
        rating: 5,
        date: "Jun 2025",
        source: "Direct",
        verified: true,
        title: "Attention to detail is unreal",
        text:
            "Everything felt curated for my skin and my concerns. The studio is spotless and beautiful.",
        treatment: "Facial Treatment",
    },
    {
        id: "r13",
        name: "Victoria Z.",
        initials: "VZ",
        rating: 5,
        date: "Jun 2025",
        source: "Google",
        verified: true,
        title: "The most relaxing appointment",
        text:
            "Quiet, calm, and focused. I left with a natural glow and zero irritation.",
        treatment: "Calm + Glow",
    },
    {
        id: "r14",
        name: "Sarah J.",
        initials: "SJ",
        rating: 5,
        date: "May 2025",
        source: "Google",
        verified: true,
        title: "Subtle but impactful",
        text:
            "I was scared of injectables but everything was subtle. I just look refreshed.",
        treatment: "Injectables",
    },
    {
        id: "r15",
        name: "Anna H.",
        initials: "AH",
        rating: 5,
        date: "May 2025",
        source: "Direct",
        verified: true,
        title: "Private studio, premium results",
        text:
            "It feels like a true private studio experience — not a busy clinic. Super refined.",
        treatment: "Facial Treatment",
    },
    {
        id: "r16",
        name: "Madison G.",
        initials: "MG",
        rating: 5,
        date: "Apr 2025",
        source: "Google",
        verified: true,
        title: "Finally found my place",
        text:
            "My skin is sensitive and I usually react to everything. Here it was calm and comfortable.",
        treatment: "Sensitive Skin",
    },
    {
        id: "r17",
        name: "Jenna F.",
        initials: "JF",
        rating: 5,
        date: "Apr 2025",
        source: "Instagram",
        verified: false,
        title: "Luxury service",
        text:
            "Everything feels high-end and clean. Loved the vibe and the glow after.",
        treatment: "Facial Treatment",
    },
    {
        id: "r18",
        name: "Claire Y.",
        initials: "CY",
        rating: 5,
        date: "Mar 2025",
        source: "Google",
        verified: true,
        title: "Clear guidance",
        text:
            "I appreciated how clearly the routine and expectations were explained. Results were real.",
        treatment: "Consultation",
    },
    {
        id: "r19",
        name: "Zoey R.",
        initials: "ZR",
        rating: 4,
        date: "Mar 2025",
        source: "Direct",
        verified: true,
        title: "Great experience",
        text:
            "Beautiful studio and very professional. I’d love a bit more availability, but the service is excellent.",
        treatment: "Facial Treatment",
    },
    {
        id: "r20",
        name: "Sophia P.",
        initials: "SP",
        rating: 5,
        date: "Feb 2025",
        source: "Google",
        verified: true,
        title: "Consistent results",
        text:
            "I’ve been a few times now and the quality is always the same: calm, clean, refined, and effective.",
        treatment: "Facial Treatment",
    },
];
