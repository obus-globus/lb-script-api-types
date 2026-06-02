import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MineTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
import type { MineToolMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/MineToolMode.d.ts'
export class NeverToolMode extends MineToolMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NeverToolMode;
    shouldSwitch(mineTarget: MineTarget): boolean;
}