import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ModDependency$Kind } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency$Kind.d.ts'
import type { VersionInterval } from '../../../../../net/fabricmc/loader/api/metadata/version/VersionInterval.d.ts'
export interface ModDependency extends Object{
    getKind(): ModDependency$Kind;
    getModId(): string;
    getVersionIntervals(): VersionInterval[];
    getVersionRequirements(): E[];
    matches(arg0: Version): boolean;
}