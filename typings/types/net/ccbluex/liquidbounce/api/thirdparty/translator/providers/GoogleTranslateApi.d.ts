import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { TranslateLanguage } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.d.ts'
import type { TranslationResult } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult.d.ts'
import type { TranslatorMode } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorMode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * @author MukjepScarlet
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/providers/GoogleTranslateApi.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/providers/GoogleTranslateApi.kt:39}
 */
export class GoogleTranslateApi extends TranslatorMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    translateInternal(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string, $completion: Continuation<TranslationResult>): any;
}