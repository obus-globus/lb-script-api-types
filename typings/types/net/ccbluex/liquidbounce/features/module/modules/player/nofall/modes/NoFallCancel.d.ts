import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { NoFallCancel$DistanceMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallCancel$DistanceMode.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
export class NoFallCancel extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallCancel;
    // private cancelSetback: boolean;
    // private /*not mapped: */ getCancelSetback(): boolean;
    // private fallDistance: ModeValueGroup<NoFallCancel$DistanceMode>;
    // private isFalling: boolean;
    // private packetHandler: EventHook<PacketEvent>;
    // private resetFallDistance: boolean;
    // private /*not mapped: */ getResetFallDistance(): boolean;
}