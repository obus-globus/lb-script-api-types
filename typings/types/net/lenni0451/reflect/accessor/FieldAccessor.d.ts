import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FieldAccessor extends Object {
    static makeDynamicGetter<I extends unknown>(paramarg0: Class<I>, paramarg1: Field): I;
    static makeDynamicSetter<I extends unknown>(paramarg0: Class<I>, paramarg1: Field): I;
    static makeGetter<I extends unknown>(paramarg0: Class<I>, paramarg1: Object, paramarg2: Field): I;
    static makeSetter<I extends unknown>(paramarg0: Class<Object>, paramarg1: Object, paramarg2: Field): I;
    constructor()
}