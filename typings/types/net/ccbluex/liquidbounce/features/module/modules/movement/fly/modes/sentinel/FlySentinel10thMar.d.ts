import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * @anticheat Sentinel
 * @anticheatVersion 10.03.2024
 * @testedOn cubecraft.net
 *
 * @note Tested in SkyWars and EggWars, works fine and no automatic ban.
 * It will auto-ban only when flying very large distances.
 *
 * Thanks to icewormy3
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/sentinel/FlySentinel10thMar.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/sentinel/FlySentinel10thMar.kt:43}
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
    readonly parent: ModeValueGroup<any>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private spoofOnGround: boolean;
    // private ticks: number;
    // private /*not mapped: */ getTicks(): number;
}