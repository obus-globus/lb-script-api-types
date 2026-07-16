import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConstructorUtils extends Object {
    static getAccessibleConstructor(paramarg0: Class<Object>, ...paramarg1: Class<Object>[]): Constructor<Object>;
    static getAccessibleConstructor(paramarg0: Constructor<Object>): Constructor<Object>;
    static getMatchingAccessibleConstructor(paramarg0: Class<Object>, ...paramarg1: Class<Object>[]): Constructor<Object>;
    static invokeConstructor(paramarg0: Class<Object>, ...paramarg1: Object[]): Object | null;
    static invokeConstructor(paramarg0: Class<Object>, paramarg1: Object[], paramarg2: Class<Object>[]): Object | null;
    static invokeExactConstructor(paramarg0: Class<Object>, ...paramarg1: Object[]): Object | null;
    static invokeExactConstructor(paramarg0: Class<Object>, paramarg1: Object[], paramarg2: Class<Object>[]): Object | null;
    constructor()
}