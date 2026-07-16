import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LoaderUtil extends Object {
    static IGNORE_TCCL_PROPERTY: string;
    static findResources(paramresource: string): URL[];
    static getClassLoader(): ClassLoader;
    static getClassLoader(paramclass1: Class<Object>, paramclass2: Class<Object>): ClassLoader;
    static getThreadContextClassLoader(): ClassLoader;
    static isClassAvailable(paramclassName: string): boolean;
    static loadClass(paramclassName: string): Class<Object>;
    static loadClassUnchecked(paramclassName: string): Class<Object>;
    static newCheckedInstanceOf<T extends unknown>(paramclassName: string, paramclazz: Class<T>): T;
    static newCheckedInstanceOfProperty<T extends unknown>(parampropertyName: string, paramclazz: Class<T>): T;
    static newCheckedInstanceOfProperty<T extends unknown>(parampropertyName: string, paramclazz: Class<T>, paramdefaultSupplier: () => T): T;
    static newInstanceOf<T extends unknown>(paramclazz: Class<T>): T;
    static newInstanceOf<T extends unknown>(paramclassName: string): T;
    static newInstanceOfUnchecked<T extends unknown>(paramclazz: Class<T>): T;
    static newInstanceOfUnchecked<T extends unknown>(paramclassName: string): T;
    static newInstanceOfUnchecked<T extends unknown>(paramclassName: string, paramsupertype: Class<T>): T;
    private constructor()
}