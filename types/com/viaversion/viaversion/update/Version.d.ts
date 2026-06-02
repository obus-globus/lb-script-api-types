import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Version extends Object implements Comparable<Version> {
    static compare(paramarg0: Version, paramarg1: Version): number;
    static equals(paramarg0: Version, paramarg1: Version): boolean;
    constructor(arg0: string)
    // private parts: number[];
    readonly tag: string;
    compareTo(arg0: Version): number;
    equals(arg0: Object | null): boolean;
    getTag(): string;
    hashCode(): number;
    toString(): string;
}