import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StringSplitter } from '../../../../net/minecraft/client/StringSplitter.d.ts'
import type { Font$PreparedText } from '../../../../net/minecraft/client/gui/Font$PreparedText.d.ts'
import type { Font$Provider } from '../../../../net/minecraft/client/gui/Font$Provider.d.ts'
import type { GlyphSource } from '../../../../net/minecraft/client/gui/GlyphSource.d.ts'
import type { BakedGlyph } from '../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
import type { FontDescription } from '../../../../net/minecraft/network/chat/FontDescription.d.ts'
import type { FormattedText } from '../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class Font extends Object {
    static SHADOW_DEPTH: number;
    constructor(provider: Font$Provider)
    lineHeight: number;
    // private provider: Font$Provider;
    // private random: RandomSource;
    readonly splitter: StringSplitter;
    bidirectionalShaping(text: string): string;
    // private getGlyph(codepoint: number, style: Style): BakedGlyph;
    // private getGlyphSource(fontLocation: FontDescription): GlyphSource;
    getSplitter(): StringSplitter;
    isBidirectional(): boolean;
    plainSubstrByWidth(str: string, width: number): string;
    plainSubstrByWidth(str: string, width: number, reverse: boolean): string;
    prepare8xTextOutline(str: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, x: number, y: number, outlineColor: number): Font$PreparedText;
    prepareText(text: string, x: number, y: number, originalColor: number, drawShadow: boolean, backgroundColor: number): Font$PreparedText;
    prepareText(text: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, x: number, y: number, originalColor: number, drawShadow: boolean, includeEmpty: boolean, backgroundColor: number): Font$PreparedText;
    split(input: FormattedText, maxWidth: number): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[];
    splitIgnoringLanguage(input: FormattedText, maxWidth: number): FormattedText[];
    substrByWidth(text: FormattedText, width: number): FormattedText;
    width(str: string): number;
    width(text: FormattedText): number;
    width(text: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): number;
    wordWrapHeight(input: FormattedText, textWidth: number): number;
}