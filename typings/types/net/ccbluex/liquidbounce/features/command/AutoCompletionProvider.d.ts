import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Provides autocompletion for one specific parameter
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:31}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:44}
     */
    autocomplete(begin: string, args: string[]): string[];
}