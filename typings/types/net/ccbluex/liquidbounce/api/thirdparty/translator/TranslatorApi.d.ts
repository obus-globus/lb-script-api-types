import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { TranslateLanguage } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.d.ts'
import type { TranslationResult } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult.d.ts'
/**
 * Interface for a translation API that translates text from one language to another.
 * The implementation provides two methods: `translate` and `translateInternal`.
 *
 * The `translate` method is the entry point, which is a public method that automatically detects the source language
 * (unless specified) and translates the input text into a target language. The `translateInternal` method is the
 * lower-level internal logic that handles the actual translation work.
 *
 * The API ensures that the provided text is not empty before attempting to perform the translation.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.kt:34}
 */
export interface TranslatorApi extends Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    translate(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string, $completion: Continuation<TranslationResult>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    translateInternal(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string, $completion: Continuation<TranslationResult>): any;
}