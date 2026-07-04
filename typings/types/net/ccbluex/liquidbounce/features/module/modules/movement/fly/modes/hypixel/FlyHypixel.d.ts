import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @anticheat Watchdog (NCP)
 * @anticheatVersion 21.01.25
 * @testedOn hypixel.net
 * @author @liquidsquid1
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/hypixel/FlyHypixel.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/hypixel/FlyHypixel.kt:42}
 */
export class FlyHypixel extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyHypixel;
    // private isFlying: boolean;
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    // private strafeHandler: EventHook<PlayerMoveEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    // private timer: number;
    // private /*not mapped: */ getTimer(): number;
    // private timerHandler: EventHook<GameTickEvent>;
    disable(): void;
}