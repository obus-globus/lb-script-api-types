import type { FloatIterator } from '../../../../../../../kotlin/collections/FloatIterator.d.ts'
/**
 * Bypasses Grim's duplicate rotation check
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt#L247 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt:247}
 */
export class ModuleFreeze$Stationary$FloatOffsetGenerator extends FloatIterator {
    constructor()
    // private prev: number;
    hasNext(): boolean;
    nextFloat(): number;
}