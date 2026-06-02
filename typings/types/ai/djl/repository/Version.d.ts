import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class Version extends Object implements Comparable<Version> {
    constructor(arg0: string)
    // private comparable: Object[];
    readonly snapshot: boolean;
    // private version: string;
    compareTo(arg0: Version): number;
    equals(arg0: Object | null): boolean;
    // private get(arg0: number): number;
    getIncrementalVersion(): number;
    getMajorVersion(): number;
    getMinorVersion(): number;
    hashCode(): number;
    isSnapshot(): boolean;
    toString(): string;
}