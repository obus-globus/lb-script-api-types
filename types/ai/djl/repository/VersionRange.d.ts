import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { Restriction } from '../../../ai/djl/repository/Restriction.d.ts'
import type { Version } from '../../../ai/djl/repository/Version.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class VersionRange extends Object {
    static parse(paramarg0: string): VersionRange;
    private constructor(arg0: Version, arg1: Restriction[])
    readonly recommendedVersion: Version;
    readonly restrictions: Restriction[];
    contains(arg0: Artifact): boolean;
    contains(arg0: Version): boolean;
    getRecommendedVersion(): Version;
    getRestrictions(): Restriction[];
    matches(arg0: Artifact[]): Artifact[];
    toString(): string;
}