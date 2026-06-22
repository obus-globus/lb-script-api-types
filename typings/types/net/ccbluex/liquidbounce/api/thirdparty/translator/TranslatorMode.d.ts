import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { TranslateLanguage } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.d.ts'
import type { TranslationResult } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult.d.ts'
import type { TranslatorApi } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export abstract class TranslatorMode extends Mode implements TranslatorApi {
    static Companion: Tagged$Companion;
    static translate$suspendImpl(paramarg0: TranslatorApi, paramarg1: TranslateLanguage, paramarg2: TranslateLanguage, paramarg3: string, paramarg4: Continuation<Object>): Object;
    constructor(name: string)
    translate(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string): TranslationResult;
    translateInternal(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string): TranslationResult;
}