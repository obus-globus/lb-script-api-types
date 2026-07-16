import type { Class } from '../../../java/lang/Class.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Methods extends Object {
    static getDeclaredMethod(paramarg0: Class<Object>, paramarg1: string, ...paramarg2: Class<Object>[]): Method;
    static getDeclaredMethods(paramarg0: Class<Object>): Method[];
    static invoke<T extends unknown>(paramarg0: Object, paramarg1: Method, ...paramarg2: Object[]): T;
    static invokeSuper<I extends S, S extends unknown, T extends unknown>(paramarg0: I, paramarg1: Class<S>, paramarg2: Method, ...paramarg3: Object[]): T;
    constructor()
}