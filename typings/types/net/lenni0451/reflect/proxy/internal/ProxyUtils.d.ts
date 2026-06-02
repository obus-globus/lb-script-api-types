import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProxyUtils extends Object {
    static getOverridableMethod(paramarg0: Class<Object>, paramarg1: Object | null, paramarg2: (param0: Method) => kotlin.Boolean): (Object | null)[];
    static getOverridableMethod(paramarg0: Class<Object>, paramarg1: { [key: string]: Method }): void;
    static getPublicConstructors(paramarg0: Class<Object>): Object | null;
    static mapMethods(paramarg0: (Object | null)[], paramarg1: (param0: Method) => Method): (Object | null)[];
    static verifyInterface(paramarg0: Class<Object>): void;
    static verifySuperClass(paramarg0: Class<Object>): void;
    constructor()
}