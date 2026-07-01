import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Provides autocompletion for one specific parameter
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:31}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:44}
     */
    autocomplete(begin: string, args: string[]): string[];
}