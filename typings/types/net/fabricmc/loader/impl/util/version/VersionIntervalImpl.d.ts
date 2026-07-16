import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { VersionInterval } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionInterval.d.ts'
export class VersionIntervalImpl extends Object implements VersionInterval {
    static INFINITE: VersionInterval;
    static and(paramarg0: VersionInterval[], paramarg1: VersionInterval[]): VersionInterval[];
    static and(paramarg0: VersionInterval, paramarg1: VersionInterval): VersionInterval;
    static not(paramarg0: VersionInterval[]): VersionInterval[];
    static not(paramarg0: VersionInterval): VersionInterval[];
    static or(paramarg0: VersionInterval[], paramarg1: VersionInterval): VersionInterval[];
    constructor(arg0: Version, arg1: boolean, arg2: Version, arg3: boolean)
    readonly max: Version;
    readonly maxInclusive: boolean;
    readonly min: Version;
    readonly minInclusive: boolean;
    and(arg0: VersionInterval): VersionInterval;
    equals(arg0: Object | null): boolean;
    getMax(): Version;
    getMin(): Version;
    hashCode(): number;
    isMaxInclusive(): boolean;
    isMinInclusive(): boolean;
    isSemantic(): boolean;
    not(): VersionInterval[];
    or(arg0: VersionInterval[]): VersionInterval[];
    toString(): string;
}