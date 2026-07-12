import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { ColoredChar } from '../../../../../net/ccbluex/liquidbounce/utils/text/ColoredChar.d.ts'
import type { ChatFormatting } from '../../../../../net/minecraft/ChatFormatting.d.ts'
import type { ClickEvent } from '../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { HoverEvent } from '../../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { TextColor } from '../../../../../net/minecraft/network/chat/TextColor.d.ts'
import type { TranslatableContents } from '../../../../../net/minecraft/network/chat/contents/TranslatableContents.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class TextExtensionsKt extends Object {
    /**
     * Returns an immutable {@link Component} from the receiver.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:60}
     */
    static asPlainText(string: string): Component;
    static asPlainText(paramarg0: string, paramarg1: ChatFormatting): Component;
    static asPlainText(paramarg0: string, paramarg1: Style): Component;
    /**
     * Returns a {@link MutableComponent} from the receiver.
     * If you just need a {@link Component}, use {@link asPlainText} instead.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:55}
     */
    static asText(paramarg0: Component[]): Component;
    static asText(paramarg0: (Object | null)[]): Component;
    static asText(paramarg0: string): MutableComponent;
    static asTextContent(string: string): ComponentContents;
    static buildText(builderAction: (param0: Object) => void): Component;
    static capitalize(string: string): string;
    static colored(char: string, color: TextColor): ColoredChar;
    static dropPort(string: string): string;
    static formatAsCapacity(long: number): string;
    /**
     * Converts milliseconds to seconds, minutes, hours and days when present.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L253 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:253}
     */
    static formatAsTime(int: number): string;
    static hideSensitiveAddress(string: string): string;
    /**
     * Joins a list of {@link Component} into a single {@link Component} with the given {@link separator}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L126 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:126}
     */
    static joinToText(collection: (Object | null)[], separator: Component, prefix: Component, postfix: Component, transform: (param0: Object | null) => Component): Component;
    static joinToText(collection: Component[], separator: Component): Component;
    static plus(paramarg0: Style, paramarg1: Color4b): Style;
    static plus(paramarg0: Style, paramarg1: ChatFormatting): Style;
    static plus(paramarg0: Style, paramarg1: ClickEvent): Style;
    static plus(paramarg0: Style, paramarg1: HoverEvent): Style;
    static plus(paramarg0: Style, paramarg1: TextColor): Style;
    static repeat(char: string, n: number): string;
    /**
     * Returns the root domain of the domain.
     *
     * This means it removes the subdomain from the domain.
     * If the domain is already a root domain or an IP address, do nothing.
     *
     * e.g.
     *   "sub.example.com" -> "example.com"
     *   "example.com." -> "example.com"
     *   "127.0.0.1" -> "127.0.0.1"
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L228 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:228}
     */
    static rootDomain(string: string): string;
    static stripMinecraftColorCodes(string: string): string;
    /**
     * Generates a progress bar based on the {@link percent}age (range 0 to 100).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L306 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:306}
     */
    static textLoadingBar(percent: number, progress: ColoredChar, remaining: ColoredChar, length: number): Component;
    static textOf(...parts: (Object | null)[]): Component;
    static toLowerCamelCase(string: string): string;
    static toText(formattedCharSequence: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): Component;
    static toTranslatedString(translatableContents: TranslatableContents): string;
    /**
     * Translate alt color codes to minecraft color codes
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L193 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:193}
     */
    static translateColorCodes(string: string): string;
    static translated(paramarg0: Component): Component;
    static translated(paramarg0: ComponentContents): ComponentContents;
}