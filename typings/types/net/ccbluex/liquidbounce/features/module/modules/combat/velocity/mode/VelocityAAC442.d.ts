import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
/**
 * Velocity for AAC4.4.2, pretty sure, it works on other versions
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityAAC442.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityAAC442.kt:24}
 */
export class VelocityAAC442 extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityAAC442;
    // private reduce: number;
    // private /*not mapped: */ getReduce(): number;
    // private repeatable: EventHook<GameTickEvent>;
}