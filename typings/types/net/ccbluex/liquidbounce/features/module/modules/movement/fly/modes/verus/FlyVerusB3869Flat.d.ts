import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { BlockShapeEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
/**
 * @anticheat Verus
 * @anticheatVersion b3896
 * @testedOn anticheat-test
 * @note it can rarely flag once | needs 1.9x or above
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/verus/FlyVerusB3869Flat.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/verus/FlyVerusB3869Flat.kt:46}
 */
export class FlyVerusB3869Flat extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyVerusB3869Flat;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private jumpEvent: EventHook<PlayerJumpEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private shapeHandler: EventHook<BlockShapeEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    // private timer: number;
    // private /*not mapped: */ getTimer(): number;
    disable(): void;
}