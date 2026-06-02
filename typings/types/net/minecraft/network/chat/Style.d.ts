import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MixinStyleAccessor } from '../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/text/MixinStyleAccessor.d.ts'
import type { ChatFormatting } from '../../../../net/minecraft/ChatFormatting.d.ts'
import type { ClickEvent } from '../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { FontDescription } from '../../../../net/minecraft/network/chat/FontDescription.d.ts'
import type { HoverEvent } from '../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { TextColor } from '../../../../net/minecraft/network/chat/TextColor.d.ts'
export class Style extends Object implements MixinStyleAccessor {
    static EMPTY: Style;
    static NO_SHADOW: number;
    static create(paramarg0: TextColor, paramarg1: number, paramarg2: boolean, paramarg3: boolean, paramarg4: boolean, paramarg5: boolean, paramarg6: boolean, paramarg7: ClickEvent, paramarg8: HoverEvent, paramarg9: string, paramarg10: FontDescription): Style;
    private constructor(color: TextColor, shadowColor: number, bold: boolean, italic: boolean, underlined: boolean, strikethrough: boolean, obfuscated: boolean, clickEvent: ClickEvent, hoverEvent: HoverEvent, insertion: string, font: FontDescription)
    readonly bold: boolean;
    readonly clickEvent: ClickEvent;
    readonly color: TextColor;
    readonly font: FontDescription;
    readonly hoverEvent: HoverEvent;
    readonly insertion: string;
    readonly italic: boolean;
    readonly obfuscated: boolean;
    readonly shadowColor: number;
    readonly strikethrough: boolean;
    readonly underlined: boolean;
    applyFormat(format: ChatFormatting): Style;
    applyFormats(formats: ChatFormatting[]): Style;
    applyLegacyFormat(format: ChatFormatting): Style;
    applyTo(other: Style): Style;
    equals(o: Object | null): boolean;
    getClickEvent(): ClickEvent;
    getColor(): TextColor;
    getFont(): FontDescription;
    getHoverEvent(): HoverEvent;
    getInsertion(): string;
    getShadowColor(): number;
    hashCode(): number;
    isBold(): boolean;
    isEmpty(): boolean;
    isItalic(): boolean;
    isObfuscated(): boolean;
    isStrikethrough(): boolean;
    isUnderlined(): boolean;
    toString(): string;
    withBold(bold: boolean): Style;
    withClickEvent(clickEvent: ClickEvent): Style;
    withColor(color: number): Style;
    withColor(color: ChatFormatting): Style;
    withColor(color: TextColor): Style;
    withFont(font: FontDescription): Style;
    withHoverEvent(hoverEvent: HoverEvent): Style;
    withInsertion(insertion: string): Style;
    withItalic(italic: boolean): Style;
    withObfuscated(obfuscated: boolean): Style;
    withShadowColor(shadowColor: number): Style;
    withStrikethrough(strikethrough: boolean): Style;
    withUnderlined(underlined: boolean): Style;
    withoutShadow(): Style;
}