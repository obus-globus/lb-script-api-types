import type { Version } from '../../../ai/djl/repository/Version.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Restriction extends Object {
    static EVERYTHING: Restriction;
    constructor(arg0: Version, arg1: boolean, arg2: Version, arg3: boolean)
    readonly lowerBound: Version;
    readonly lowerBoundInclusive: boolean;
    readonly upperBound: Version;
    readonly upperBoundInclusive: boolean;
    containsVersion(arg0: Version): boolean;
    equals(arg0: Object | null): boolean;
    getLowerBound(): Version;
    getUpperBound(): Version;
    hashCode(): number;
    isLowerBoundInclusive(): boolean;
    isUpperBoundInclusive(): boolean;
    toString(): string;
}