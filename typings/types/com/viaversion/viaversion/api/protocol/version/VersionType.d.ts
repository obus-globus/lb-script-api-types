import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class VersionType extends Enum<VersionType> {
    static ALPHA_INITIAL: VersionType;
    static ALPHA_LATER: VersionType;
    static BETA_INITIAL: VersionType;
    static BETA_LATER: VersionType;
    static CLASSIC: VersionType;
    static RELEASE: VersionType;
    static RELEASE_INITIAL: VersionType;
    static SPECIAL: VersionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): VersionType;
    static values(): VersionType[];
    private constructor()
    name(): "CLASSIC" | "ALPHA_INITIAL" | "ALPHA_LATER" | "BETA_INITIAL" | "BETA_LATER" | "RELEASE_INITIAL" | "RELEASE" | "SPECIAL";
}