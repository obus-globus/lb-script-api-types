import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Sentinel (20.04.2024)
 * - **Tested on:** cubecraft.net
 * - Tested in SkyWars - fly as long as you want. REQUIRES PING SPOOF TO BE ENABLED.  Thanks to the_bi11iona1re for making me aware that Sentinal folds to Verus Damage exploit.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/sentinel/FlySentinel20thApr.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/sentinel/FlySentinel20thApr.kt:40}
 */
export class FlySentinel20thApr extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlySentinel20thApr;
    // private boostOnce: boolean;
    // private /*not mapped: */ getBoostOnce(): boolean;
    // private constantSpeed: boolean;
    // private /*not mapped: */ getConstantSpeed(): boolean;
    // private hasBeenHurt: boolean;
    // private hasBeenTeleported: boolean;
    // private horizontalSpeed: number;
    // private /*not mapped: */ getHorizontalSpeed(): number;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    // private nostalgia: boolean;
    // private /*not mapped: */ getNostalgia(): boolean;
    readonly parent: ModeValueGroup<any>;
    // private reboostTicks: number;
    // private /*not mapped: */ getReboostTicks(): number;
    readonly repeatable: EventHook<GameTickEvent>;
    // private verticalSpeed: number;
    // private /*not mapped: */ getVerticalSpeed(): number;
    // private boost(): void;
    disable(): void;
    enable(): void;
}