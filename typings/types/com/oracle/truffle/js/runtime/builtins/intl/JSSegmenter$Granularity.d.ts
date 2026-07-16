import type { JSSegmenter$IcuIteratorHelper } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenter$IcuIteratorHelper.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class JSSegmenter$Granularity extends Enum<JSSegmenter$Granularity> implements JSSegmenter$IcuIteratorHelper {
    static GRAPHEME: JSSegmenter$Granularity;
    static SENTENCE: JSSegmenter$Granularity;
    static WORD: JSSegmenter$Granularity;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSSegmenter$Granularity;
    static values(): JSSegmenter$Granularity[];
    private constructor(name: string)
    getIterator(locale: ULocale): BreakIterator;
    getName(): string;
    name(): "GRAPHEME" | "WORD" | "SENTENCE";
}