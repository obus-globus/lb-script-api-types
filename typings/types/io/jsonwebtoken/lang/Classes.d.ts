import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Classes extends Object {
    static forName(paramarg0: string): Class<Object>;
    static getConstructor<T extends unknown>(paramarg0: Class<T>, ...paramarg1: Class<Object>[]): Constructor<T>;
    static getFieldValue<T extends unknown>(paramarg0: Object, paramarg1: string, paramarg2: Class<T>): T;
    static getResourceAsStream(paramarg0: string): InputStream;
    static instantiate<T extends unknown>(paramarg0: Constructor<T>, ...paramarg1: Object[]): T;
    static invokeStatic<T extends unknown>(paramarg0: Class<Object>, paramarg1: string, paramarg2: Class<Object>[], ...paramarg3: Object[]): T;
    static invokeStatic<T extends unknown>(paramarg0: string, paramarg1: string, paramarg2: Class<Object>[], ...paramarg3: Object[]): T;
    static isAvailable(paramarg0: string): boolean;
    static newInstance<T extends unknown>(paramarg0: Class<T>): T;
    static newInstance<T extends unknown>(paramarg0: Class<T>, ...paramarg1: Object[]): T;
    static newInstance<T extends unknown>(paramarg0: string): T;
    static newInstance<T extends unknown>(paramarg0: string, paramarg1: Class<Object>[], ...paramarg2: Object[]): T;
    static newInstance<T extends unknown>(paramarg0: string, ...paramarg1: Object[]): T;
    private constructor()
}