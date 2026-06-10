import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassUtils$Interfaces } from '../../../../../org/apache/commons/lang3/ClassUtils$Interfaces.d.ts'
export class MethodUtils extends Object {
    static getAccessibleMethod(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object | null): Method;
    static getAccessibleMethod(paramarg0: Class<Object>, paramarg1: Method): Method;
    static getAccessibleMethod(paramarg0: Method): Method;
    static getAnnotation(paramarg0: Method, paramarg1: Class<Annotation>, paramarg2: boolean, paramarg3: boolean): Annotation | null;
    static getMatchingAccessibleMethod(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object | null): Method;
    static getMatchingMethod(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object | null): Method;
    static getMethodObject(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object | null): Method;
    static getMethodsListWithAnnotation(paramarg0: Class<Object>, paramarg1: Class<Annotation>): Method[];
    static getMethodsListWithAnnotation(paramarg0: Class<Object>, paramarg1: Class<Annotation>, paramarg2: boolean, paramarg3: boolean): Method[];
    static getMethodsWithAnnotation(paramarg0: Class<Object>, paramarg1: Class<Annotation>): (Object | null)[];
    static getMethodsWithAnnotation(paramarg0: Class<Object>, paramarg1: Class<Annotation>, paramarg2: boolean, paramarg3: boolean): (Object | null)[];
    static getOverrideHierarchy(paramarg0: Method, paramarg1: ClassUtils$Interfaces): Method[];
    static invokeExactMethod(paramarg0: Object, paramarg1: string): Object;
    static invokeExactMethod(paramarg0: Object, paramarg1: string, paramarg2: (Object | null)[]): Object;
    static invokeExactMethod(paramarg0: Object, paramarg1: string, paramarg2: (Object | null)[], paramarg3: Object | null): Object;
    static invokeExactStaticMethod(paramarg0: Class<Object>, paramarg1: string, paramarg2: (Object | null)[]): Object;
    static invokeExactStaticMethod(paramarg0: Class<Object>, paramarg1: string, paramarg2: (Object | null)[], paramarg3: Object | null): Object;
    static invokeMethod(paramarg0: Object, paramarg1: boolean, paramarg2: string): Object;
    static invokeMethod(paramarg0: Object, paramarg1: boolean, paramarg2: string, paramarg3: (Object | null)[]): Object;
    static invokeMethod(paramarg0: Object, paramarg1: boolean, paramarg2: string, paramarg3: (Object | null)[], paramarg4: Object | null): Object;
    static invokeMethod(paramarg0: Object, paramarg1: string): Object;
    static invokeMethod(paramarg0: Object, paramarg1: string, paramarg2: (Object | null)[]): Object;
    static invokeMethod(paramarg0: Object, paramarg1: string, paramarg2: (Object | null)[], paramarg3: Object | null): Object;
    static invokeStaticMethod(paramarg0: Class<Object>, paramarg1: string, paramarg2: (Object | null)[]): Object;
    static invokeStaticMethod(paramarg0: Class<Object>, paramarg1: string, paramarg2: (Object | null)[], paramarg3: Object | null): Object;
    constructor()
}