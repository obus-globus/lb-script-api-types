import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { StringRange$Range } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringRange$Range.d.ts'
export class StringRange$Ranges extends Object implements Comparable<StringRange$Ranges> {
    constructor(s: string)
    // private ranges: StringRange$Range[];
    compareTo(other: StringRange$Ranges): number;
    end(mostCompact: boolean): string;
    firstDifference(): number;
    merge(pivot: number, other: StringRange$Ranges): boolean;
    size(): number;
    start(): string;
    toString(): string;
}