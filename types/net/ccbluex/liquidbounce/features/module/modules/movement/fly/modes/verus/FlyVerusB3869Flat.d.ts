import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
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
 * @remarks
 * - **Anticheat:** Verus (b3896)
 * - **Tested on:** anticheat-test
 * - it can rarely flag once | needs 1.9x or above
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/verus/FlyVerusB3869Flat.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/verus/FlyVerusB3869Flat.kt:40}
 */
export class FlyVerusB3869Flat extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyVerusB3869Flat;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private jumpEvent: EventHook<PlayerJumpEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Object>;
    // private shapeHandler: EventHook<BlockShapeEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    // private timer: number;
    // private /*not mapped: */ getTimer(): number;
    disable(): void;
}