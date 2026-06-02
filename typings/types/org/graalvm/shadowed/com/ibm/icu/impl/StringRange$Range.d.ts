import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export class StringRange$Range extends Object implements Comparable<StringRange$Range> {
    constructor(min: number, max: number)
    // private max: number;
    // private min: number;
    compareTo(that: StringRange$Range): number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}