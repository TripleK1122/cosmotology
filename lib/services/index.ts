import { facial } from "./facial";
import { injectables } from "./injectables";
import { mens } from "./mens";
import { weightloss } from "./weightloss";
import { peelings } from "./peelings";

import type { CategoryId, Service } from "@/lib/types";

const byCategory: Record<CategoryId, Service[]> = {
    injectables,
    facial,
    mens,
    weightloss,
    peelings,
};

export function getServicesByCategory(category: CategoryId) {
    return byCategory[category] ?? [];
}
