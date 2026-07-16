import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Semver$VersionDiff extends Enum<Semver$VersionDiff> {
    static BUILD: Semver$VersionDiff;
    static MAJOR: Semver$VersionDiff;
    static MINOR: Semver$VersionDiff;
    static NONE: Semver$VersionDiff;
    static PATCH: Semver$VersionDiff;
    static SUFFIX: Semver$VersionDiff;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Semver$VersionDiff;
    static values(): Semver$VersionDiff[];
    private constructor()
    name(): "NONE" | "MAJOR" | "MINOR" | "PATCH" | "SUFFIX" | "BUILD";
}