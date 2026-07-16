import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Version$BuildType extends Enum<Version$BuildType> {
    static ALPHA: Version$BuildType;
    static BETA: Version$BuildType;
    static STABLE: Version$BuildType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Version$BuildType;
    static values(): Version$BuildType[];
    private constructor(arg2: string)
    postfix: string;
    name(): "ALPHA" | "BETA" | "STABLE";
}