import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Primitives extends Object {
    static isPrimitive(paramarg0: Type): boolean;
    static isWrapperType(paramarg0: Type): boolean;
    static unwrap<T extends unknown>(paramarg0: Class<T>): Class<T>;
    static wrap<T extends unknown>(paramarg0: Class<T>): Class<T>;
    private constructor()
}