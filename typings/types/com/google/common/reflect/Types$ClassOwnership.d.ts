import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Types$ClassOwnership extends Enum<Types$ClassOwnership> {
    static LOCAL_CLASS_HAS_NO_OWNER: Types$ClassOwnership;
    static OWNED_BY_ENCLOSING_CLASS: Types$ClassOwnership;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Types$ClassOwnership;
    static values(): Types$ClassOwnership[];
    private constructor()
    getOwnerType(rawType: Class<Object>): Class<Object>;
    name(): "OWNED_BY_ENCLOSING_CLASS" | "LOCAL_CLASS_HAS_NO_OWNER";
}