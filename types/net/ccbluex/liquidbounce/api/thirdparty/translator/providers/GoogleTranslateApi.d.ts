import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TranslateLanguage } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.d.ts'
import type { TranslationResult } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult.d.ts'
import type { TranslatorMode } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorMode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * @author MukjepScarlet
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/providers/GoogleTranslateApi.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/providers/GoogleTranslateApi.kt:36}
 */
export class GoogleTranslateApi extends TranslatorMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    readonly parent: ModeValueGroup<Object>;
    /**
     * {@link Reference}(https://github.com/ssut/py-googletrans/issues/268)
     * Updated at 2025/06/11
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/providers/GoogleTranslateApi.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/providers/GoogleTranslateApi.kt:42}
     */
    translateInternal(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string): TranslationResult;
}