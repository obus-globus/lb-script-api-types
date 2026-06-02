import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReflectionUtils extends Object {
    static getMethodHandle(paramarg0: Method): Object;
    static invokeDefaultMethod(paramarg0: Object, paramarg1: Object, paramarg2: (Object | null)[]): Object;
    static isDefault(paramarg0: Method): boolean;
    constructor()
}