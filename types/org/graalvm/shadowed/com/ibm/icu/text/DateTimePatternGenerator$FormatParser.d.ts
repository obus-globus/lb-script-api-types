import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PatternTokenizer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/PatternTokenizer.d.ts'
export class DateTimePatternGenerator$FormatParser extends Object {
    constructor()
    readonly items: Object[];
    // private tokenizer: PatternTokenizer;
    // private addVariable(variable: StringBuffer, strict: boolean): void;
    getItems(): Object[];
    hasDateAndTimeFields(): boolean;
    quoteLiteral(string: string): Object;
    set(string: string): DateTimePatternGenerator$FormatParser;
    set(string: string, strict: boolean): DateTimePatternGenerator$FormatParser;
    toString(): string;
    toString(start: number, limit: number): string;
}