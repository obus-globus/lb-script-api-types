import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Semver$SemverType extends Enum<Semver$SemverType> {
    static COCOAPODS: Semver$SemverType;
    static IVY: Semver$SemverType;
    static LOOSE: Semver$SemverType;
    static NPM: Semver$SemverType;
    static STRICT: Semver$SemverType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Semver$SemverType;
    static values(): Semver$SemverType[];
    private constructor()
    name(): "STRICT" | "LOOSE" | "NPM" | "COCOAPODS" | "IVY";
}