import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { SelectHotbarSlotSilentlyEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/SelectHotbarSlotSilentlyEvent.d.ts'
import type { MineTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
import type { MineToolMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/MineToolMode.d.ts'
export class AlwaysToolMode extends MineToolMode {
    static Companion: Tagged$Companion;
    static INSTANCE: AlwaysToolMode;
    // private abortOnSwitch: boolean;
    // private /*not mapped: */ getAbortOnSwitch(): boolean;
    // private cancelAutomaticSwitching: boolean;
    // private /*not mapped: */ getCancelAutomaticSwitching(): boolean;
    // private packetHandler: EventHook<PacketEvent>;
    // private silentSwitchHandler: EventHook<SelectHotbarSlotSilentlyEvent>;
    shouldSwitch(mineTarget: MineTarget): boolean;
}