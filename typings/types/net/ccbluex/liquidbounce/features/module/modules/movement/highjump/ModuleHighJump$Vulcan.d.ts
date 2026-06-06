import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Vulcan (2.7.5)
 * - **Tested on:** eu.loyisa.cn; eu.anticheat-test.com
 * - this still flags a bit
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/highjump/ModuleHighJump.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/highjump/ModuleHighJump.kt:55}
 */
export class ModuleHighJump$Vulcan extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleHighJump$Vulcan;
    glide: boolean;
    readonly jumpEvent: EventHook<PlayerJumpEvent>;
    readonly parent: ModeValueGroup<Mode>;
    readonly repeatable: EventHook<GameTickEvent>;
    shouldGlide: boolean;
}