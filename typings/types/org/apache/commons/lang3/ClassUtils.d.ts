import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassUtils$Interfaces } from '../../../../org/apache/commons/lang3/ClassUtils$Interfaces.d.ts'
export class ClassUtils extends Object {
    static INNER_CLASS_SEPARATOR: string;
    static INNER_CLASS_SEPARATOR_CHAR: string;
    static PACKAGE_SEPARATOR: string;
    static PACKAGE_SEPARATOR_CHAR: string;
    static comparator(): (param0: Object) => boolean;
    static convertClassNamesToClasses(paramarg0: string[]): Class<Object>[];
    static convertClassesToClassNames(paramarg0: Class<Object>[]): string[];
    static getAbbreviatedName(paramarg0: Class<Object>, paramarg1: number): string;
    static getAbbreviatedName(paramarg0: string, paramarg1: number): string;
    static getAllInterfaces(paramarg0: Class<Object>): Class<Object>[];
    static getAllSuperclasses(paramarg0: Class<Object>): Class<Object>[];
    static getCanonicalName(paramarg0: Class<Object>): string;
    static getCanonicalName(paramarg0: Class<Object>, paramarg1: string): string;
    static getCanonicalName(paramarg0: Object): string;
    static getCanonicalName(paramarg0: Object, paramarg1: string): string;
    static getClass(paramarg0: ClassLoader, paramarg1: string): Class<Object>;
    static getClass(paramarg0: ClassLoader, paramarg1: string, paramarg2: boolean): Class<Object>;
    static getClass(paramarg0: string): Class<Object>;
    static getClass(paramarg0: string, paramarg1: boolean): Class<Object>;
    static getComponentType(paramarg0: Class<Object>): Class<Object>;
    static getName(paramarg0: Class<Object>): string;
    static getName(paramarg0: Class<Object>, paramarg1: string): string;
    static getName(paramarg0: Object): string;
    static getName(paramarg0: Object, paramarg1: string): string;
    static getPackageCanonicalName(paramarg0: Class<Object>): string;
    static getPackageCanonicalName(paramarg0: Object, paramarg1: string): string;
    static getPackageCanonicalName(paramarg0: string): string;
    static getPackageName(paramarg0: Class<Object>): string;
    static getPackageName(paramarg0: Object, paramarg1: string): string;
    static getPackageName(paramarg0: string): string;
    static getPublicMethod(paramarg0: Class<Object>, paramarg1: string, ...paramarg2: Object | null): Method;
    static getShortCanonicalName(paramarg0: Class<Object>): string;
    static getShortCanonicalName(paramarg0: Object, paramarg1: string): string;
    static getShortCanonicalName(paramarg0: string): string;
    static getShortClassName(paramarg0: Class<Object>): string;
    static getShortClassName(paramarg0: Object, paramarg1: string): string;
    static getShortClassName(paramarg0: string): string;
    static getSimpleName(paramarg0: Class<Object>): string;
    static getSimpleName(paramarg0: Class<Object>, paramarg1: string): string;
    static getSimpleName(paramarg0: Object): string;
    static getSimpleName(paramarg0: Object, paramarg1: string): string;
    static hierarchy(paramarg0: Class<Object>): Class<Object>[];
    static hierarchy(paramarg0: Class<Object>, paramarg1: ClassUtils$Interfaces): Class<Object>[];
    static isAssignable(paramarg0: Class<Object>, paramarg1: Class<Object>): boolean;
    static isAssignable(paramarg0: Class<Object>, paramarg1: Class<Object>, paramarg2: boolean): boolean;
    static isAssignable(paramarg0: Object | null, ...paramarg1: Object | null): boolean;
    static isAssignable(paramarg0: Object | null, paramarg1: Object | null, paramarg2: boolean): boolean;
    static isInnerClass(paramarg0: Class<Object>): boolean;
    static isPrimitiveOrWrapper(paramarg0: Class<Object>): boolean;
    static isPrimitiveWrapper(paramarg0: Class<Object>): boolean;
    static isPublic(paramarg0: Class<Object>): boolean;
    static primitiveToWrapper(paramarg0: Class<Object>): Class<Object>;
    static primitivesToWrappers(...paramarg0: Object | null): Object | null;
    static toClass(...paramarg0: (Object | null)[]): Object | null;
    static wrapperToPrimitive(paramarg0: Class<Object>): Class<Object>;
    static wrappersToPrimitives(...paramarg0: Object | null): Object | null;
    constructor()
}