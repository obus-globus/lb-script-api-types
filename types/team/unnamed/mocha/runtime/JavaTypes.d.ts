import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class JavaTypes extends Object {
    static convert(paramarg0: Value, paramarg1: Class<Object>): Object;
    static getNullValueForType(paramarg0: Class<Object>): Object;
    private constructor()
}