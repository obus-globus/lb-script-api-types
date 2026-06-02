import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleNoFov$FovMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoFov$FovMode.d.ts'
export class ModuleNoFov$ConstantFov extends ModuleNoFov$FovMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleNoFov$ConstantFov;
    readonly fov: number;
    getFov(original: number): number;
    getFovMultiplier(original: number): number;
}