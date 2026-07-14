import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { NoWebMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noweb/NoWebMode.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * No collision with cobwebs and breaks them to bypass check
 *
 * @anticheat Grim
 * @version 2.3.65
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebGrimBreak.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebGrimBreak.kt:34}
 */
export class NoWebGrimBreak extends NoWebMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoWebGrimBreak;
    // private breakOnWorld: boolean;
    // private /*not mapped: */ getBreakOnWorld(): boolean;
    handleEntityCollision(pos: BlockPos): boolean;
}