import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
export interface AutoCompletionProvider extends Object{
    /**
     * Gives an array with all possible completions for the {@link value}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/config/utils/AutoCompletionProvider.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/config/utils/AutoCompletionProvider.kt:34}
     */
    possible(value: Value<Object>): string[];
}