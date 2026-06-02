import type { JSSegmenter$IcuIteratorHelper } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenter$IcuIteratorHelper.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class JSSegmenter$Granularity extends Enum<JSSegmenter$Granularity> implements JSSegmenter$IcuIteratorHelper {
    static GRAPHEME: JSSegmenter$Granularity;
    static SENTENCE: JSSegmenter$Granularity;
    static WORD: JSSegmenter$Granularity;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JSSegmenter$Granularity;
    static values(): (Object | null)[];
    private constructor(name: string)
    readonly name: string;
    getName(): string;
    name(): "GRAPHEME" | "WORD" | "SENTENCE";
}