import type { ReflectionFunction } from '../../../../io/jsonwebtoken/impl/lang/ReflectionFunction.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OptionalMethodInvoker<T extends unknown, R extends unknown> extends ReflectionFunction<T, R> {
    static ERR_MSG: string;
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: Class<Object>, arg3: boolean)
    // private CLASS: Class<Object>;
    // private METHOD: Method;
    // private PARAM_TYPES: Class<Object>[];
    // private STATIC: boolean;
    invoke(arg0: T): R;
    supports(arg0: T): boolean;
}