import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../java/lang/reflect/Constructor.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProxyUtils extends Object {
    static getOverridableMethod(paramarg0: Class<Object>, paramarg1: Class<Object>[], paramarg2: (param0: Method) => boolean): Method[];
    static getOverridableMethod(paramarg0: Class<Object>, paramarg1: { [key: string]: Method }): void;
    static getPublicConstructors(paramarg0: Class<Object>): Constructor<Object>[];
    static mapMethods(paramarg0: Method[], paramarg1: (param0: Method) => Method): Method[];
    static verifyInterface(paramarg0: Class<Object>): void;
    static verifySuperClass(paramarg0: Class<Object>): void;
    constructor()
}