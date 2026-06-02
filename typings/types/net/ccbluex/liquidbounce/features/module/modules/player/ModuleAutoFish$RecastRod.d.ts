import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleAutoFish$RecastRod extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoFish$RecastRod;
    readonly delay: { start: number; endInclusive: number; step: number };
}