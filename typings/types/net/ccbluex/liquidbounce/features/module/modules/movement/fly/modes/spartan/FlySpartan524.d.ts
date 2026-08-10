import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @anticheat Spartan
 * @anticheatVersion phase 524
 * @testedOn minecraft.vagdedes.com
 * @note spartan flags less if your motion is stable, that's why we use PlayerMoveEvent
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/spartan/FlySpartan524.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/spartan/FlySpartan524.kt:37}
 */
export class FlySpartan524 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlySpartan524;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
}