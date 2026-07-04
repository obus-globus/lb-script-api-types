import type { FloatIterator } from '../../../../../../../kotlin/collections/FloatIterator.d.ts'
/**
 * Bypasses Grim's duplicate rotation check
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt#L221 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt:221}
 */
export class ModuleFreeze$Stationary$FloatOffsetGenerator extends FloatIterator {
    constructor()
    // private prev: number;
    hasNext(): boolean;
    nextFloat(): number;
}