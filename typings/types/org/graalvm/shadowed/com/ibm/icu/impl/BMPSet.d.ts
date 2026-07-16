import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { UnicodeSet$SpanCondition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$SpanCondition.d.ts'
import type { OutputInt } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/OutputInt.d.ts'
export class BMPSet extends Object {
    static U16_SURROGATE_OFFSET: number;
    constructor(parentList: number[], parentListLength: number)
    constructor(otherBMPSet: BMPSet, newParentList: number[], newParentListLength: number)
    // private bmpBlockBits: number[];
    // private latin1Contains: boolean[];
    // private list: number[];
    // private list4kStarts: number[];
    // private listLength: number;
    // private table7FF: number[];
    contains(c: number): boolean;
    // private containsSlow(c: number, lo: number, hi: number): boolean;
    // private findCodePoint(c: number, lo: number, hi: number): number;
    // private initBits(): void;
    span(s: CharSequence, start: number, spanCondition: UnicodeSet$SpanCondition, outCount: OutputInt): number;
    spanBack(s: CharSequence, limit: number, spanCondition: UnicodeSet$SpanCondition): number;
}