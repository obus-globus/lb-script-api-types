import type { UnicodeSet$SpanCondition } from '../../../../com/ibm/icu/text/UnicodeSet$SpanCondition.d.ts'
import type { OutputInt } from '../../../../com/ibm/icu/util/OutputInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class BMPSet extends Object {
    static U16_SURROGATE_OFFSET: number;
    constructor(arg0: BMPSet, arg1: number[], arg2: number)
    constructor(arg0: number[], arg1: number)
    // private bmpBlockBits: number[];
    // private latin1Contains: boolean[];
    // private list: number[];
    // private list4kStarts: number[];
    // private listLength: number;
    // private table7FF: number[];
    contains(arg0: number): boolean;
    // private containsSlow(arg0: number, arg1: number, arg2: number): boolean;
    // private findCodePoint(arg0: number, arg1: number, arg2: number): number;
    // private initBits(): void;
    span(arg0: CharSequence, arg1: number, arg2: UnicodeSet$SpanCondition, arg3: OutputInt): number;
    spanBack(arg0: CharSequence, arg1: number, arg2: UnicodeSet$SpanCondition): number;
}