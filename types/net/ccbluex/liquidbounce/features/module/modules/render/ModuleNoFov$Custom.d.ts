import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleNoFov$FovMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoFov$FovMode.d.ts'
export class ModuleNoFov$Custom extends ModuleNoFov$FovMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleNoFov$Custom;
    // private baseFov: number;
    // private /*not mapped: */ getBaseFov(): number;
    // private limit: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getLimit(): ClosedFloatingPointRange<number>;
    // private multiplier: number;
    // private /*not mapped: */ getMultiplier(): number;
    getFovMultiplier(original: number): number;
}