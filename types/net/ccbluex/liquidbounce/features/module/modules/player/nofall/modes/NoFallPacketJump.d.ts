import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
import type { NoFallPacketJump$DistanceMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallPacketJump$DistanceMode.d.ts'
import type { MovePacketType } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/network/MovePacketType.d.ts'
export class NoFallPacketJump extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallPacketJump;
    // private fallDistance: ModeValueGroup<NoFallPacketJump$DistanceMode>;
    // private falling: boolean;
    readonly packetHandler: EventHook<PacketEvent>;
    // private packetType: MovePacketType;
    // private /*not mapped: */ getPacketType(): MovePacketType;
    readonly tickHandler: EventHook<PlayerTickEvent>;
    // private timing: ModeValueGroup<Mode>;
}