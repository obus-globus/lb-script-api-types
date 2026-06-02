import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Version$BuildType extends Enum<Version$BuildType> {
    static ALPHA: Version$BuildType;
    static BETA: Version$BuildType;
    static STABLE: Version$BuildType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Version$BuildType;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    postfix: string;
    name(): "ALPHA" | "BETA" | "STABLE";
}