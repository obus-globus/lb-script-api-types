import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConstructorUtils extends Object {
    static getAccessibleConstructor<T extends unknown>(paramarg0: Class<T>, ...paramarg1: Class<Object>[]): Constructor<T>;
    static getAccessibleConstructor<T extends unknown>(paramarg0: Constructor<T>): Constructor<T>;
    static getMatchingAccessibleConstructor<T extends unknown>(paramarg0: Class<T>, ...paramarg1: Class<Object>[]): Constructor<T>;
    static invokeConstructor<T extends unknown>(paramarg0: Class<T>, ...paramarg1: Object[]): T;
    static invokeConstructor<T extends unknown>(paramarg0: Class<T>, paramarg1: Object[], paramarg2: Class<Object>[]): T;
    static invokeExactConstructor<T extends unknown>(paramarg0: Class<T>, ...paramarg1: Object[]): T;
    static invokeExactConstructor<T extends unknown>(paramarg0: Class<T>, paramarg1: Object[], paramarg2: Class<Object>[]): T;
    constructor()
}