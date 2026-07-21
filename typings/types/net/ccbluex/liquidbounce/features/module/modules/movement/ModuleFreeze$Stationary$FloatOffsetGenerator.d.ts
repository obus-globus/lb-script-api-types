import type { FloatIterator } from '../../../../../../../kotlin/collections/FloatIterator.d.ts'
/**
 * Bypasses Grim's duplicate rotation check
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt#L221 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt:221}
 */
export class ModuleFreeze$Stationary$FloatOffsetGenerator extends FloatIterator {
    constructor()
    // private prev: number;
    hasNext(): boolean;
    nextFloat(): number;
}