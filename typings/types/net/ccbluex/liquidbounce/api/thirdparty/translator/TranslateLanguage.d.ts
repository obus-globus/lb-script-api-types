import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Represents a language used for translation. The interface allows for flexibility in defining
 * translation languages, accommodating both specific language codes (e.g., "en-US", "ru-RU") and special
 * cases like "auto" for automatic language detection.
 *
 * This interface was created to handle situations where different APIs might have different
 * requirements:
 *
 * - Some translation APIs accept a literal language code (e.g., "en-US" for English, "ru-ru" for Russian).
 * - Other APIs, such as those that perform auto-detection, may use "auto" as a special keyword.
 * - The sealed interface structure ensures that only known and valid translation languages are used,
 *   while allowing easy extension in the future if new language types are required.
 *
 * By using an interface, we can define both special language cases (like `Auto`) and general language
 * codes (represented by `Literal`) in a type-safe and scalable manner.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.kt:38}
 */
export interface TranslateLanguage extends Object{
    readonly literal: string;
}