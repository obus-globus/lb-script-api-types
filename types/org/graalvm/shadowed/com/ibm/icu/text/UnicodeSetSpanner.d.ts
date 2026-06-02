import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { UnicodeSet$SpanCondition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$SpanCondition.d.ts'
import type { UnicodeSetSpanner$CountMethod } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSetSpanner$CountMethod.d.ts'
import type { UnicodeSetSpanner$TrimOption } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSetSpanner$TrimOption.d.ts'
export class UnicodeSetSpanner extends Object {
    constructor(source: string[])
    readonly unicodeSet: string[];
    countIn(sequence: CharSequence): number;
    countIn(sequence: CharSequence, countMethod: UnicodeSetSpanner$CountMethod): number;
    countIn(sequence: CharSequence, countMethod: UnicodeSetSpanner$CountMethod, spanCondition: UnicodeSet$SpanCondition): number;
    deleteFrom(sequence: CharSequence): string;
    deleteFrom(sequence: CharSequence, spanCondition: UnicodeSet$SpanCondition): string;
    equals(other: Object | null): boolean;
    getUnicodeSet(): string[];
    hashCode(): number;
    replaceFrom(sequence: CharSequence, replacement: CharSequence): string;
    replaceFrom(sequence: CharSequence, replacement: CharSequence, countMethod: UnicodeSetSpanner$CountMethod): string;
    replaceFrom(sequence: CharSequence, replacement: CharSequence, countMethod: UnicodeSetSpanner$CountMethod, spanCondition: UnicodeSet$SpanCondition): string;
    trim(sequence: CharSequence): CharSequence;
    trim(sequence: CharSequence, trimOption: UnicodeSetSpanner$TrimOption): CharSequence;
    trim(sequence: CharSequence, trimOption: UnicodeSetSpanner$TrimOption, spanCondition: UnicodeSet$SpanCondition): CharSequence;
}