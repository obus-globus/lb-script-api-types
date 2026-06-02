import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SemanticVersion } from '../../../../../../net/fabricmc/loader/api/SemanticVersion.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { SemanticVersionImpl } from '../../../../../../net/fabricmc/loader/util/version/SemanticVersionImpl.d.ts'
export class SemanticVersionImpl extends SemanticVersionImpl implements SemanticVersion {
    static COMPONENT_WILDCARD: number;
    static parse(paramarg0: string): SemanticVersion;
    constructor(arg0: number[], arg1: string, arg2: string)
    constructor(arg0: string, arg1: boolean)
    // private build: string;
    // private components: number[];
    // private friendlyName: string;
    // private prerelease: string;
    // private buildFriendlyName(): void;
    compareTo(arg0: SemanticVersion): number;
    compareTo(arg0: Version): number;
    equals(arg0: Object | null): boolean;
    equalsComponentsExactly(arg0: SemanticVersionImpl): boolean;
    getBuildKey(): Optional<string>;
    getFriendlyString(): string;
    getPrereleaseKey(): Optional<string>;
    getVersionComponent(arg0: number): number;
    getVersionComponentCount(): number;
    getVersionComponents(): number[];
    hasWildcard(): boolean;
    hashCode(): number;
    toString(): string;
}