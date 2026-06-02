import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class VersionNumber extends Object implements Serializable, Comparable<VersionNumber> {
    static NONE: VersionNumber;
    static parse(paramarg0: string): VersionNumber;
    static parse(paramarg0: string, paramarg1: string): VersionNumber;
    private constructor()
    private constructor(arg0: number[], arg1: string)
    readonly suffix: string;
    // private value: number;
    compareTo(arg0: VersionNumber): number;
    equals(arg0: Object | null): boolean;
    getMajor(): number;
    getMinor(): number;
    getPatch(): number;
    getRevision(): number;
    getSuffix(): string;
    hashCode(): number;
    toString(): string;
}