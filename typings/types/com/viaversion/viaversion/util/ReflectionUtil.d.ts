import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReflectionUtil extends Object {
    static get<T extends unknown>(paramarg0: Object, paramarg1: Class<Object>, paramarg2: string, paramarg3: Class<T>): T;
    static get<T extends unknown>(paramarg0: Object, paramarg1: string, paramarg2: Class<T>): T;
    static getPublic<T extends unknown>(paramarg0: Object, paramarg1: string, paramarg2: Class<T>): T;
    static getStatic<T extends unknown>(paramarg0: Class<Object>, paramarg1: string, paramarg2: Class<T>): T;
    static getSuper<T extends unknown>(paramarg0: Object, paramarg1: string, paramarg2: Class<T>): T;
    static invoke(paramarg0: Object, paramarg1: string): Object;
    static invokeStatic(paramarg0: Class<Object>, paramarg1: string): Object;
    static set(paramarg0: Object, paramarg1: string, paramarg2: Object): void;
    static setStatic(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object): void;
    constructor()
}