import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Parameter$Verificator$Result } from '../../../../../net/ccbluex/liquidbounce/features/command/Parameter$Verificator$Result.d.ts'
export interface Parameter$Verificator<T extends Object | number | string | boolean> extends Object{
    /**
     * Verifies and parses parameter.
     *
     * This function must not have any side effects since this function may be called
     * while the command is still being written!
     *
     * @returns the text is not valid, this function returns {@link Result.Error}, otherwise
{@link Result.Ok} with the parsed content is returned.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:87}
     */
    verifyAndParse(sourceText: string): Parameter$Verificator$Result<T>;
}