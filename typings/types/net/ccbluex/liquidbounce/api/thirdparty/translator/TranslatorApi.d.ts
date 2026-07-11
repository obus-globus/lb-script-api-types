import type { Object } from '../../../../../../java/lang/Object.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.kt:34}
 */
export interface TranslatorApi extends Object{
    /**
     * Translates the provided text from a source language to a target language.
     * The source language is auto-detected by default,
     * and the target language is defined by the `targetLanguage` parameter.
     *
     * @param sourceLanguage The language of the input text. Defaults to `TranslateLanguage.Auto` (auto-detection).
     * @param targetLanguage The language to which the text should be translated.                       Defaults to a language code from `CommandAutoTranslate.languageCode`.
     * @param text The text to translate.
     * @returns @throws IllegalArgumentException If the `text` parameter is blank.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.kt:49}
     */
    translate(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string): TranslationResult;
    /**
     * Internal method that performs the actual translation from one language to another.
     * This method is used by the `translate` method and is not meant to be called directly by consumers.
     *
     * @param sourceLanguage The source language.
     * @param targetLanguage The target language.
     * @param text The text to translate.
     * @returns A {@link TranslationResult} object containing the translation result.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.kt:71}
     */
    translateInternal(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string): TranslationResult;
}