import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { StringSplitter$LinePosConsumer } from '../../../net/minecraft/client/StringSplitter$LinePosConsumer.d.ts'
import type { StringSplitter$WidthProvider } from '../../../net/minecraft/client/StringSplitter$WidthProvider.d.ts'
import type { FormattedText } from '../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../net/minecraft/util/FormattedCharSink.d.ts'
export class StringSplitter extends Object {
    static getWordPosition(paramtext: string, paramdir: number, paramfrom: number, paramstripSpaces: boolean): number;
    constructor(widthProvider: (param0: number, param1: Style) => kotlin.Float)
    widthProvider: (param0: number, param1: Style) => kotlin.Float;
    findLineBreak(input: string, max: number, initialStyle: Style): number;
    headByWidth(text: FormattedText, width: number, initialStyle: Style): FormattedText;
    plainHeadByWidth(str: string, maxWidth: number, style: Style): string;
    plainIndexAtWidth(str: string, maxWidth: number, style: Style): number;
    plainTailByWidth(str: string, maxWidth: number, style: Style): string;
    splitLines(input: string, maxWidth: number, initialStyle: Style): FormattedText[];
    splitLines(input: string, maxWidth: number, initialStyle: Style, includeAll: boolean, output: (param0: Style, param1: number, param2: number) => void): void;
    splitLines(input: FormattedText, maxWidth: number, initialStyle: Style): FormattedText[];
    splitLines(input: FormattedText, maxWidth: number, initialStyle: Style, output: (param0: FormattedText, param1: boolean) => void): void;
    stringWidth(str: string): number;
    stringWidth(text: FormattedText): number;
    stringWidth(text: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean): number;
}