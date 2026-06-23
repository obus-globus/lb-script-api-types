import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Version 15.05.2024
 * - **Tested on:** mc.hycraft.us
 * - Tested in Bedwars, Skywars. Pretty much flagless
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/polar/FlyHycraftDamage.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/polar/FlyHycraftDamage.kt:37}
 */
export class FlyHycraftDamage extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyHycraftDamage;
    // private damageTaken: boolean;
    // private packetHandler: EventHook<BlinkPacketEvent>;
    readonly parent: ModeValueGroup<any>;
    // private release: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private ticks: number;
    enable(): void;
}