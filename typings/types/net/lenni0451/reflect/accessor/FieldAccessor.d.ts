import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FieldAccessor extends Object {
    static makeDynamicGetter(paramarg0: Class<Object>, paramarg1: Field): Object | null;
    static makeDynamicSetter(paramarg0: Class<Object>, paramarg1: Field): Object | null;
    static makeGetter(paramarg0: Class<Object>, paramarg1: Object, paramarg2: Field): Object | null;
    static makeSetter(paramarg0: Class<Object>, paramarg1: Object, paramarg2: Field): Object | null;
    constructor()
}