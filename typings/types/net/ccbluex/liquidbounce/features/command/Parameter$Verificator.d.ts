import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Parameter$Verificator$Result } from '../../../../../net/ccbluex/liquidbounce/features/command/Parameter$Verificator$Result.d.ts'
export interface Parameter$Verificator<T extends unknown> extends Object{
    /**
     * Verifies and parses parameter.
     *
     * This function must not have any side effects since this function may be called
     * while the command is still being written!
     *
     * @returns the text is not valid, this function returns {@link Result.Error}, otherwise
{@link Result.Ok} with the parsed content is returned.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:96}
     */
    verifyAndParse(sourceText: string): Parameter$Verificator$Result<T>;
}