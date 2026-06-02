import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Provides autocompletion for one specific parameter
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:28}
 */
export interface AutoCompletionProvider extends Object{
    /**
     * Autocompletion for a parameter
     *
     * For example for `.value Scaffold Mode G`, this function would be called with
     * - `begin = "G"`
     * - `args = ["Scaffold", "Mode", "G"]`
     *
     * @param begin the current text of the autocompleted parameter
     * @param args all current arguments of the command
     * @returns suggestions for the full parameter name
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:32}
     */
    autocomplete(begin: string, args: string[]): string[];
}