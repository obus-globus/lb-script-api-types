import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleDerp$YawMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDerp$YawMode.d.ts'
export class ModuleDerp$YawOffset extends ModuleDerp$YawMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleDerp$YawOffset;
    readonly yaw: number;
    readonly yawOffsetValue: number;
}