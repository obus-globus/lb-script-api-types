import type { PatternTokenizer } from '../../../../com/ibm/icu/impl/PatternTokenizer.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DateTimePatternGenerator$FormatParser extends Object {
    constructor()
    readonly items: Object[];
    // private tokenizer: PatternTokenizer;
    // private addVariable(arg0: StringBuffer, arg1: boolean): void;
    getItems(): Object[];
    hasDateAndTimeFields(): boolean;
    quoteLiteral(arg0: string): Object;
    set(arg0: string): DateTimePatternGenerator$FormatParser;
    set(arg0: string, arg1: boolean): DateTimePatternGenerator$FormatParser;
    toString(): string;
    toString(arg0: number, arg1: number): string;
}