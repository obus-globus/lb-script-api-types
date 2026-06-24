import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { NoWebMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noweb/NoWebMode.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * No collision with cobwebs and breaks them to bypass check
 *
 * @version 2.3.65
 *
 * @remarks
 * - **Anticheat:** Grim
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebGrimBreak.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebGrimBreak.kt:28}
 */
export class NoWebGrimBreak extends NoWebMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoWebGrimBreak;
    // private breakOnWorld: boolean;
    // private /*not mapped: */ getBreakOnWorld(): boolean;
    handleEntityCollision(pos: BlockPos): boolean;
}