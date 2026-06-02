import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { UnicodeSetStringSpan$OffsetList } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UnicodeSetStringSpan$OffsetList.d.ts'
import type { UnicodeSet$SpanCondition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$SpanCondition.d.ts'
import type { OutputInt } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/OutputInt.d.ts'
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
    constructor(otherStringSpan: UnicodeSetStringSpan, newParentSetStrings: string[])
    constructor(set: string[], setStrings: string[], which: number)
    // private all: boolean;
    // private maxLength16: number;
    // private offsets: UnicodeSetStringSpan$OffsetList;
    // private someRelevant: boolean;
    // private spanLengths: number[];
    // private spanNotSet: string[];
    // private spanSet: string[];
    // private strings: string[];
    // private addToSpanNotSet(c: number): void;
    contains(c: number): boolean;
    needsStringSpanUTF16(): boolean;
    span(s: CharSequence, start: number, spanCondition: UnicodeSet$SpanCondition): number;
    spanAndCount(s: CharSequence, start: number, spanCondition: UnicodeSet$SpanCondition, outCount: OutputInt): number;
    spanBack(s: CharSequence, length: number, spanCondition: UnicodeSet$SpanCondition): number;
    // private spanContainedAndCount(s: CharSequence, start: number, outCount: OutputInt): number;
    // private spanNot(s: CharSequence, start: number, outCount: OutputInt): number;
    // private spanNotBack(s: CharSequence, length: number): number;
    // private spanWithStrings(s: CharSequence, start: number, spanLimit: number, spanCondition: UnicodeSet$SpanCondition): number;
}