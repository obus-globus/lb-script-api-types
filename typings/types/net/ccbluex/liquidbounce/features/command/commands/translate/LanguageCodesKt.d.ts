import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LanguageCodesKt extends Object {
    /**
     * All language codes like `en`, `en-US`, `de`, `zh-CN`
     * and their display name depending on the user's locale.
     *
     * Sorted with {@link String.Companion.CASE_INSENSITIVE_ORDER}.
     *
     * Not all are supported by the translator.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/translate/LanguageCodes.kt#L23 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/translate/LanguageCodes.kt:23}
     */
    static getLanguageCodes(): { [key: string]: Locale };
}