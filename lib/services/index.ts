import { injectables } from "./injectables";
import { facial } from "./facial";
import { mens } from "./mens";
import { weightloss } from "./weightloss";
import type { CategoryId, Service } from "@/lib/types";

export const services: Service[] = [
    ...injectables,
    ...facial,
    ...mens,
    ...weightloss,
];

export function getServicesByCategory(categoryId: CategoryId): Service[] {
    return services.filter((s) => s.categoryId === categoryId);
}
