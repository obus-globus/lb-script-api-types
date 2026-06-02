import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReflectionUtil extends Object {
    static get(paramarg0: Object, paramarg1: Class<Object>, paramarg2: string, paramarg3: Class<Object>): Object | null;
    static get(paramarg0: Object, paramarg1: string, paramarg2: Class<Object>): Object | null;
    static getPublic(paramarg0: Object, paramarg1: string, paramarg2: Class<Object>): Object | null;
    static getStatic(paramarg0: Class<Object>, paramarg1: string, paramarg2: Class<Object>): Object | null;
    static getSuper(paramarg0: Object, paramarg1: string, paramarg2: Class<Object>): Object | null;
    static invoke(paramarg0: Object, paramarg1: string): Object;
    static invokeStatic(paramarg0: Class<Object>, paramarg1: string): Object;
    static set(paramarg0: Object, paramarg1: string, paramarg2: Object): void;
    static setStatic(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object): void;
    constructor()
}