import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MineTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
import type { MineToolMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/MineToolMode.d.ts'
import type { SwitchMethod } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/SwitchMethod.d.ts'
export class OnStopToolMode extends MineToolMode {
    static Companion: Tagged$Companion;
    static INSTANCE: OnStopToolMode;
    // private switchMethod: SwitchMethod;
    // private /*not mapped: */ getSwitchMethod(): SwitchMethod;
    getSwitchingMethod(): SwitchMethod;
    shouldSwitch(mineTarget: MineTarget): boolean;
}