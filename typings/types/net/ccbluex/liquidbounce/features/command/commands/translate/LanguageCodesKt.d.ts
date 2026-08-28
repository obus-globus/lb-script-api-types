import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/translate/LanguageCodes.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/translate/LanguageCodes.kt:31}
     */
    static getLanguageCodes(): JavaMap<string, Locale>;
}