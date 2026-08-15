import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { ColoredChar } from '../../../../../net/ccbluex/liquidbounce/utils/text/ColoredChar.d.ts'
import type { TextBuilder } from '../../../../../net/ccbluex/liquidbounce/utils/text/TextBuilder.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:60}
     */
    static asPlainText(self: string): Component;
    static asPlainText(self: string, formatting: ChatFormatting): Component;
    static asPlainText(self: string, style: Style): Component;
    /**
     * Returns a {@link MutableComponent} from the receiver.
     * If you just need a {@link Component}, use {@link asPlainText} instead.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:55}
     */
    static asText(self: Component[]): Component;
    static asText(self: string): MutableComponent;
    static asTextContent(self: string): ComponentContents;
    static buildText(builderAction: (param0: TextBuilder) => void): Component;
    static capitalize(self: string): string;
    static colored(self: string, color: TextColor): ColoredChar;
    static dropPort(self: string): string;
    static formatAsCapacity(self: number): string;
    /**
     * Converts milliseconds to seconds, minutes, hours and days when present.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L260 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:260}
     */
    static formatAsTime(self: number): string;
    static hideSensitiveAddress(self: string): string;
    /**
     * Joins a list of {@link Component} into a single {@link Component} with the given {@link separator}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L133 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:133}
     */
    static joinToText<T extends unknown>(self: T[], separator: Component, prefix: Component | null, postfix: Component | null, transform: (param0: T) => Component): Component;
    static joinToText(self: Component[], separator: Component): Component;
    static plus(self: Style, color: Color4b): Style;
    static plus(self: Style, formatting: ChatFormatting): Style;
    static plus(self: Style, clickEvent: ClickEvent): Style;
    static plus(self: Style, hoverEvent: HoverEvent): Style;
    static plus(self: Style, color: TextColor): Style;
    static repeat(self: string, n: number): string;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L235 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:235}
     */
    static rootDomain(self: string): string;
    static stringsJoinToText(self: string[], separator: Component): Component;
    static stripMinecraftColorCodes(self: string): string;
    /**
     * Generates a progress bar based on the {@link percent}age (range 0 to 100).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L313 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:313}
     */
    static textLoadingBar(percent: number, progress: ColoredChar, remaining: ColoredChar, length: number): Component;
    static textOf(...parts: Component[]): Component;
    static toLowerCamelCase(self: string): string;
    static toText(self: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): Component;
    static toTranslatedString(self: TranslatableContents): string;
    /**
     * Translate alt color codes to minecraft color codes
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt#L200 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/TextExtensions.kt:200}
     */
    static translateColorCodes(self: string): string;
    static translated(self: Component): Component;
    static translated(self: ComponentContents): ComponentContents;
}