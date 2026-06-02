import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { VersionInterval } from '../../../../../net/fabricmc/loader/api/metadata/version/VersionInterval.d.ts'
import type { DomainObject$Mod } from '../../../../../net/fabricmc/loader/impl/discovery/DomainObject$Mod.d.ts'
export class ModSolver$AddModVar extends Object implements DomainObject$Mod {
    constructor(arg0: string, arg1: Version, arg2: boolean)
    // private hadOnlyOutboundDepFailures: boolean;
    readonly id: string;
    readonly version: Version;
    readonly versionIntervals: VersionInterval[];
    getId(): string;
    getVersion(): Version;
    getVersionIntervals(): VersionInterval[];
    setVersionIntervals(arg0: VersionInterval[]): void;
    toString(): string;
}