import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../net/fabricmc/loader/api/Version.d.ts'
export interface SemanticVersion extends Object, Version{
    compareTo(arg0: SemanticVersion): number;
    getBuildKey(): Optional<string>;
    getFriendlyString(): string;
    getPrereleaseKey(): Optional<string>;
    getVersionComponent(arg0: number): number;
    getVersionComponentCount(): number;
    hasWildcard(): boolean;
}