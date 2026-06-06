import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Sentinel (27.01.2024)
 * - **Tested on:** cubecraft.net
 * - Tested in SkyWars and EggWars, works fine and no automatic ban.
 * - Glides down and by pressing spacebar, it will go up. It also has a horizontal speed. This fly does not require any disabler.  Thanks to icewormy3
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/sentinel/FlySentinel27thJan.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/sentinel/FlySentinel27thJan.kt:32}
 */
export class FlySentinel27thJan extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlySentinel27thJan;
    // private horizontalSpeed: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getHorizontalSpeed(): ClosedFloatingPointRange<number>;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    readonly parent: ModeValueGroup<Object>;
    readonly repeatable: EventHook<GameTickEvent>;
}