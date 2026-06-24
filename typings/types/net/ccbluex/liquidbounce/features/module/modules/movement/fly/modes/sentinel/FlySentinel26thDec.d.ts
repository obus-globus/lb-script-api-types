import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Sentinel (26.12.2025)
 * - **Tested on:** cubecraft.net
 * - Tested in Egg Wars, ticks higher than 25 seems silent flags  Thanks to the_bi11iona1re for making me aware that Sentinal folds to Verus Damage exploit. Unpatched by @hax0r31337
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/sentinel/FlySentinel26thDec.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/sentinel/FlySentinel26thDec.kt:43}
 */
export class FlySentinel26thDec extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlySentinel26thDec;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private hasBeenHurt: boolean;
    // private hasBeenTeleported: boolean;
    // private horizontalSpeed: number;
    // private /*not mapped: */ getHorizontalSpeed(): number;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    // private nostalgia: boolean;
    // private /*not mapped: */ getNostalgia(): boolean;
    readonly parent: ModeValueGroup<any>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private ticks: number;
    // private /*not mapped: */ getTicks(): number;
    // private timer: number;
    // private /*not mapped: */ getTimer(): number;
    // private verticalSpeed: number;
    // private /*not mapped: */ getVerticalSpeed(): number;
    // private boost(): void;
    disable(): void;
    enable(): void;
}