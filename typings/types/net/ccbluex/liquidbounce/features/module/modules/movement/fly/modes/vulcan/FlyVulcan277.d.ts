import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * @anticheat Vulcan
 * @anticheat Version 2.7.7
 * @testedOn anticheat-test.com
 * @note NA
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan277.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan277.kt:33}
 */
export class FlyVulcan277 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyVulcan277;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    readonly repeatable: EventHook<GameTickEvent>;
}