import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
import type { NoFallPacket$Filter } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallPacket$Filter.d.ts'
import type { MovePacketType } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/network/MovePacketType.d.ts'
export class NoFallPacket extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallPacket;
    // private filter: ModeValueGroup<NoFallPacket$Filter>;
    // private packetType: MovePacketType;
    // private /*not mapped: */ getPacketType(): MovePacketType;
    readonly repeatable: EventHook<GameTickEvent>;
}