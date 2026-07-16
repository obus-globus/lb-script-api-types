import type { FloatIterator } from '../../../../../../../kotlin/collections/FloatIterator.d.ts'
/**
 * Bypasses Grim's duplicate rotation check
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt#L221 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt:221}
 */
export class ModuleFreeze$Stationary$FloatOffsetGenerator extends FloatIterator {
    constructor()
    // private prev: number;
    hasNext(): boolean;
    nextFloat(): number;
}