import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Language } from '../../../../net/minecraft/locale/Language.d.ts'
import type { FormattedText } from '../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class ClientLanguage extends Language {
    static DEFAULT: string;
    static DEFAULT_INSTANCE: Language;
    static getInstance(): Language;
    static inject(paramlanguage: Language): void;
    static loadFromJson(paramstream: InputStream, paramoutput: (param0: string, param1: string) => void): void;
    constructor(translations: JavaMap<string, string>)
    // private translations: JavaMap<string, string>;
    /**
     * Get a translation for the given key.
     * If the translation is not found, the fallback will be used.
     * If the fallback is not found, the key will be returned.
     *
     * Be careful when using this method that it will not cause a stack overflow.
     * Use {@link getTranslation} instead.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/lang/Language.kt#L153 | src/main/kotlin/net/ccbluex/liquidbounce/lang/Language.kt:153}
     */
    getOrDefault(elementId: string): string;
    getOrDefault(key: string, fallback: string): string;
    // private getTranslation(key: string): string | null;
    getVisualOrder(lines: FormattedText[]): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[];
    getVisualOrder(text: FormattedText): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    has(key: string): boolean;
    isDefaultRightToLeft(): boolean;
}