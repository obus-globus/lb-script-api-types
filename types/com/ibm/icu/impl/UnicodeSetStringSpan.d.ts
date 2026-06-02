import type { UnicodeSetStringSpan$OffsetList } from '../../../../com/ibm/icu/impl/UnicodeSetStringSpan$OffsetList.d.ts'
import type { UnicodeSet$SpanCondition } from '../../../../com/ibm/icu/text/UnicodeSet$SpanCondition.d.ts'
import type { OutputInt } from '../../../../com/ibm/icu/util/OutputInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class UnicodeSetStringSpan extends Object {
    static ALL: number;
    static BACK: number;
    static BACK_UTF16_CONTAINED: number;
    static BACK_UTF16_NOT_CONTAINED: number;
    static CONTAINED: number;
    static FWD: number;
    static FWD_UTF16_CONTAINED: number;
    static FWD_UTF16_NOT_CONTAINED: number;
    static NOT_CONTAINED: number;
    static WITH_COUNT: number;
    constructor(arg0: UnicodeSetStringSpan, arg1: string[])
    constructor(arg0: string[], arg1: string[], arg2: number)
    // private all: boolean;
    // private maxLength16: number;
    // private offsets: UnicodeSetStringSpan$OffsetList;
    // private someRelevant: boolean;
    // private spanLengths: number[];
    // private spanNotSet: string[];
    // private spanSet: string[];
    // private strings: string[];
    // private addToSpanNotSet(arg0: number): void;
    contains(arg0: number): boolean;
    needsStringSpanUTF16(): boolean;
    span(arg0: CharSequence, arg1: number, arg2: UnicodeSet$SpanCondition): number;
    spanAndCount(arg0: CharSequence, arg1: number, arg2: UnicodeSet$SpanCondition, arg3: OutputInt): number;
    spanBack(arg0: CharSequence, arg1: number, arg2: UnicodeSet$SpanCondition): number;
    // private spanContainedAndCount(arg0: CharSequence, arg1: number, arg2: OutputInt): number;
    // private spanNot(arg0: CharSequence, arg1: number, arg2: OutputInt): number;
    // private spanNotBack(arg0: CharSequence, arg1: number): number;
    // private spanWithStrings(arg0: CharSequence, arg1: number, arg2: number, arg3: UnicodeSet$SpanCondition): number;
}