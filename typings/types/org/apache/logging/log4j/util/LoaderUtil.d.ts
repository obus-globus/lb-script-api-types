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
    static newCheckedInstanceOf(paramclassName: string, paramclazz: Class<Object>): Object | null;
    static newCheckedInstanceOfProperty(parampropertyName: string, paramclazz: Class<Object>): Object | null;
    static newCheckedInstanceOfProperty(parampropertyName: string, paramclazz: Class<Object>, paramdefaultSupplier: () => Object | null): Object | null;
    static newInstanceOf(paramclazz: Class<Object>): Object | null;
    static newInstanceOf(paramclassName: string): Object | null;
    static newInstanceOfUnchecked(paramclazz: Class<Object>): Object | null;
    static newInstanceOfUnchecked(paramclassName: string): Object | null;
    static newInstanceOfUnchecked(paramclassName: string, paramsupertype: Class<Object>): Object | null;
    private constructor()
}