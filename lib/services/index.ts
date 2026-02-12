import { facial } from "./facial";
import { mesotherapy } from "./mesotherapy";
import { prp } from "./prp";
import { mens } from "./mens";
import { weightloss } from "./weightloss";
import { peelings } from "./peelings";

import type { CategoryId, Service } from "@/lib/types";

const byCategory: Record<CategoryId, Service[]> = {
    mesotherapy,
    prp,
    facial,
    mens,
    weightloss,
    peelings,
};

export function getServicesByCategory(category: CategoryId) {
    return byCategory[category] ?? [];
}
