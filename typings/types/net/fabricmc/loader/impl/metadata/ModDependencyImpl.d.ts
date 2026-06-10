import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ModDependency } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { ModDependency$Kind } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency$Kind.d.ts'
import type { VersionInterval } from '../../../../../net/fabricmc/loader/api/metadata/version/VersionInterval.d.ts'
import type { VersionPredicate } from '../../../../../net/fabricmc/loader/api/metadata/version/VersionPredicate.d.ts'
export class ModDependencyImpl extends Object implements ModDependency {
    constructor(arg0: ModDependency$Kind, arg1: string, arg2: string[])
    readonly kind: ModDependency$Kind;
    // private matcherStringList: string[];
    readonly modId: string;
    // private ranges: VersionPredicate[];
    equals(arg0: Object | null): boolean;
    getKind(): ModDependency$Kind;
    getModId(): string;
    getVersionIntervals(): VersionInterval[];
    getVersionRequirements(): VersionPredicate[];
    hashCode(): number;
    matches(arg0: Version): boolean;
    setKind(arg0: ModDependency$Kind): void;
    toString(): string;
}