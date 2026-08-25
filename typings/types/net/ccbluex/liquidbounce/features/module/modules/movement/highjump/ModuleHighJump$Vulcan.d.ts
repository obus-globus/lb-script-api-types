import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
/**
 * @anticheat Vulcan
 * @anticheatVersion 2.7.5
 * @testedOn eu.loyisa.cn; eu.anticheat-test.com
 * @note this still flags a bit
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/highjump/ModuleHighJump.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/highjump/ModuleHighJump.kt:61}
 */
export class ModuleHighJump$Vulcan extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleHighJump$Vulcan;
    glide: boolean;
    readonly jumpEvent: EventHook<PlayerJumpEvent>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    readonly repeatable: EventHook<GameTickEvent>;
    shouldGlide: boolean;
}