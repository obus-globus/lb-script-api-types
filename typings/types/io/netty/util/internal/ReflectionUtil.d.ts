import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AccessibleObject } from '../../../../java/lang/reflect/AccessibleObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ReflectionUtil extends Object {
    static resolveTypeParameter(paramarg0: Object, paramarg1: Class<Object>, paramarg2: string): Class<Object>;
    static trySetAccessible(paramarg0: AccessibleObject, paramarg1: boolean): Throwable;
    private constructor()
}