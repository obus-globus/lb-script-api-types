import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleAutoFish$AutoCastRod extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoFish$AutoCastRod;
    readonly delay: { start: number; endInclusive: number; step: number };
}