import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockShapeEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
/**
 * Shrinks the block collision shape and allows you to walk on it.
 * Might not work on every surface.
 *
 * @remarks
 * - **Anticheat:** Polar
 * - **Tested on:** pika.host
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/spider/modes/SpiderPolar29thMarch2025.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/spider/modes/SpiderPolar29thMarch2025.kt:29}
 */
export class SpiderPolar29thMarch2025 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: SpiderPolar29thMarch2025;
    // private boxHandler: EventHook<BlockShapeEvent>;
    // private jumpHandler: EventHook<PlayerJumpEvent>;
    // private jumpHeight: number;
    // private /*not mapped: */ getJumpHeight(): number;
    readonly parent: ModeValueGroup<Mode>;
}