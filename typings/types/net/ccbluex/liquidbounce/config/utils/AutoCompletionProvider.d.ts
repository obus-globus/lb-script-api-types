import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
export interface AutoCompletionProvider extends Object{
    /**
     * Gives an array with all possible completions for the {@link value}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/config/utils/AutoCompletionProvider.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/config/utils/AutoCompletionProvider.kt:34}
     */
    possible(value: Value<Object>): string[];
}