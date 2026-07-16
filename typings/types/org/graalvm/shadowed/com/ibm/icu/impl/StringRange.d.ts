import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StringRange$Adder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringRange$Adder.d.ts'
export class StringRange extends Object {
    static COMPARE_INT_ARRAYS: (param0: number[], param1: number[]) => number;
    static compact(paramsource: string[], paramadder: StringRange$Adder, paramshorterPairs: boolean): void;
    static compact(paramsource: string[], paramadder: StringRange$Adder, paramshorterPairs: boolean, parammoreCompact: boolean): void;
    static expand(paramstart: string, paramend: string, paramrequireSameLength: boolean, paramoutput: string[]): string[];
    constructor()
}