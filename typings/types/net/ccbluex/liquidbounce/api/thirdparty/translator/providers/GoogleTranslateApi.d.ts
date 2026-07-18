import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { TranslateLanguage } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.d.ts'
import type { TranslationResult } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult.d.ts'
import type { TranslatorMode } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorMode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * @author MukjepScarlet
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/providers/GoogleTranslateApi.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/providers/GoogleTranslateApi.kt:39}
 */
export class GoogleTranslateApi extends TranslatorMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    translateInternal(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string, $completion: Continuation<TranslationResult>): any;
}