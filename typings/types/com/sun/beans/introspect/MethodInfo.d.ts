import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MethodInfo extends Object {
    constructor(arg0: Method, arg1: Class<Object>)
    constructor(arg0: Method, arg1: Type)
    // private method: Method;
    // private type: Class<Object>;
    isThrow(arg0: Class<Object>): boolean;
}