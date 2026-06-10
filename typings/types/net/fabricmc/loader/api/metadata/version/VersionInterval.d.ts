import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
export interface VersionInterval extends Object{
    and(arg0: VersionInterval): VersionInterval;
    getMax(): Version;
    getMin(): Version;
    isMaxInclusive(): boolean;
    isMinInclusive(): boolean;
    isSemantic(): boolean;
    not(): VersionInterval[];
    or(arg0: VersionInterval[]): VersionInterval[];
}