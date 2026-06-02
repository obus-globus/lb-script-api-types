import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleAutoFarm$AutoPlaceCrops extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoFarm$AutoPlaceCrops;
    readonly swapBackDelay: { start: number; endInclusive: number; step: number };
}