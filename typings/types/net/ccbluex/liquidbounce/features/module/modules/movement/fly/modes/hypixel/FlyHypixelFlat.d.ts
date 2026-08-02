import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * @anticheat Watchdog (NCP)
 * @anticheatVersion 21.01.25
 * @testedOn hypixel.net
 * @author @liquidsquid1
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/hypixel/FlyHypixelFlat.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/hypixel/FlyHypixelFlat.kt:43}
 */
export class FlyHypixelFlat extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyHypixelFlat;
    // private flySpeed: number;
    // private /*not mapped: */ getFlySpeed(): number;
    // private flyTicks: number;
    // private isFlying: boolean;
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private speedHandler: EventHook<GameTickEvent>;
    // private timer: number;
    // private /*not mapped: */ getTimer(): number;
    // private velocityHandler: EventHook<GameTickEvent>;
    disable(): void;
}