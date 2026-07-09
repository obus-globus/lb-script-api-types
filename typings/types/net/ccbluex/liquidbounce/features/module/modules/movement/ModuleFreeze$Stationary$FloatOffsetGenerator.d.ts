import type { FloatIterator } from '../../../../../../../kotlin/collections/FloatIterator.d.ts'
/**
 * Bypasses Grim's duplicate rotation check
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt#L221 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt:221}
 */
export class ModuleFreeze$Stationary$FloatOffsetGenerator extends FloatIterator {
    constructor()
    // private prev: number;
    hasNext(): boolean;
    nextFloat(): number;
}