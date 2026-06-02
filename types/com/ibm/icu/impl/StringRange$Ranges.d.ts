import type { StringRange$Range } from '../../../../com/ibm/icu/impl/StringRange$Range.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class StringRange$Ranges extends Object implements Comparable<StringRange$Ranges> {
    constructor(arg0: string)
    // private ranges: StringRange$Range[];
    compareTo(arg0: StringRange$Ranges): number;
    end(arg0: boolean): string;
    firstDifference(): number;
    merge(arg0: number, arg1: StringRange$Ranges): boolean;
    size(): number;
    start(): string;
    toString(): string;
}