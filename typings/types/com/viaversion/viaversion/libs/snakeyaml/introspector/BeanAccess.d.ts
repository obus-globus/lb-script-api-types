import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BeanAccess extends Enum<BeanAccess> {
    static DEFAULT: BeanAccess;
    static FIELD: BeanAccess;
    static PROPERTY: BeanAccess;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BeanAccess;
    static values(): BeanAccess[];
    private constructor()
    name(): "DEFAULT" | "FIELD" | "PROPERTY";
}