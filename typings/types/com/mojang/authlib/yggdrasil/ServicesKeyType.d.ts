import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ServicesKeyType extends Enum<ServicesKeyType> {
    static PROFILE_KEY: ServicesKeyType;
    static PROFILE_PROPERTY: ServicesKeyType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ServicesKeyType;
    static values(): ServicesKeyType[];
    private constructor()
    name(): "PROFILE_PROPERTY" | "PROFILE_KEY";
}