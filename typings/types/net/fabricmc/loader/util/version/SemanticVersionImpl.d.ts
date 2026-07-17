import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SemanticVersion } from '../../../../../net/fabricmc/loader/api/SemanticVersion.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
export class SemanticVersionImpl extends Object implements SemanticVersion {
    static COMPONENT_WILDCARD: number;
    constructor()
    constructor(arg0: string, arg1: boolean)
    // private parent: SemanticVersion;
    compareTo(arg0: SemanticVersion): number;
    compareTo(arg0: Version): number;
    equals(arg0: Object | null): boolean;
    equalsComponentsExactly(arg0: SemanticVersionImpl): boolean;
    getBuildKey(): Optional<string>;
    getFriendlyString(): string;
    getPrereleaseKey(): Optional<string>;
    getVersionComponent(arg0: number): number;
    getVersionComponentCount(): number;
    hasWildcard(): boolean;
    hashCode(): number;
    toString(): string;
}