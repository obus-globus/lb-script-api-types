import type { UnicodeSet$SpanCondition } from '../../../../com/ibm/icu/text/UnicodeSet$SpanCondition.d.ts'
import type { UnicodeSetSpanner$CountMethod } from '../../../../com/ibm/icu/text/UnicodeSetSpanner$CountMethod.d.ts'
import type { UnicodeSetSpanner$TrimOption } from '../../../../com/ibm/icu/text/UnicodeSetSpanner$TrimOption.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class UnicodeSetSpanner extends Object {
    constructor(arg0: string[])
    readonly unicodeSet: string[];
    countIn(arg0: CharSequence): number;
    countIn(arg0: CharSequence, arg1: UnicodeSetSpanner$CountMethod): number;
    countIn(arg0: CharSequence, arg1: UnicodeSetSpanner$CountMethod, arg2: UnicodeSet$SpanCondition): number;
    deleteFrom(arg0: CharSequence): string;
    deleteFrom(arg0: CharSequence, arg1: UnicodeSet$SpanCondition): string;
    equals(arg0: Object | null): boolean;
    getUnicodeSet(): string[];
    hashCode(): number;
    replaceFrom(arg0: CharSequence, arg1: CharSequence): string;
    replaceFrom(arg0: CharSequence, arg1: CharSequence, arg2: UnicodeSetSpanner$CountMethod): string;
    replaceFrom(arg0: CharSequence, arg1: CharSequence, arg2: UnicodeSetSpanner$CountMethod, arg3: UnicodeSet$SpanCondition): string;
    trim(arg0: CharSequence): CharSequence;
    trim(arg0: CharSequence, arg1: UnicodeSetSpanner$TrimOption): CharSequence;
    trim(arg0: CharSequence, arg1: UnicodeSetSpanner$TrimOption, arg2: UnicodeSet$SpanCondition): CharSequence;
}