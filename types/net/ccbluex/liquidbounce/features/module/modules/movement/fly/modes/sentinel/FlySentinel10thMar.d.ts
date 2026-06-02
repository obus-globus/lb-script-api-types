import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Sentinel (10.03.2024)
 * - **Tested on:** cubecraft.net
 * - Tested in SkyWars and EggWars, works fine and no automatic ban. It will auto-ban only when flying very large distances.  Thanks to icewormy3
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/sentinel/FlySentinel10thMar.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/sentinel/FlySentinel10thMar.kt:33}
 */
export class FlySentinel10thMar extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlySentinel10thMar;
    // private jumpHeight: number;
    // private /*not mapped: */ getJumpHeight(): number;
    // private jumpSpeed: number;
    // private /*not mapped: */ getJumpSpeed(): number;
    readonly moveHandler: EventHook<MovementInputEvent>;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Object>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private spoofOnGround: boolean;
    // private ticks: number;
    // private /*not mapped: */ getTicks(): number;
}