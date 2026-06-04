import type { Class } from '../../../java/lang/Class.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AccessibleObject extends Object implements AnnotatedElement {
    static setAccessible(paramarg0: (Object | null)[], paramarg1: boolean): void;
    constructor()
    canAccess(arg0: Object): boolean;
    checkAccess(arg0: Class<Object>, arg1: Class<Object>, arg2: Class<Object>, arg3: number): void;
    checkCanSetAccessible(arg0: Class<Object>): void;
    checkCanSetAccessible(arg0: Class<Object>, arg1: Class<Object>): void;
    // private checkCanSetAccessible(arg0: Class<Object>, arg1: Class<Object>, arg2: boolean): boolean;
    getAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getAnnotations(): Annotation[];
    getAnnotationsByType(arg0: Class<T>): T[];
    getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(arg0: Class<T>): T[];
    getRoot(): AccessibleObject;
    // private isAccessChecked(arg0: Class<Object>): boolean;
    // private isAccessChecked(arg0: Class<Object>, arg1: Class<Object>): boolean;
    isAccessible(): boolean;
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
    // private isSubclassOf(arg0: Class<Object>, arg1: Class<Object>): boolean;
    setAccessible(arg0: boolean): void;
    setAccessible0(arg0: boolean): boolean;
    // private slowVerifyAccess(arg0: Class<Object>, arg1: Class<Object>, arg2: Class<Object>, arg3: number): boolean;
    // private throwInaccessibleObjectException(arg0: Class<Object>, arg1: Class<Object>): void;
    toShortString(): string;
    trySetAccessible(): boolean;
    verifyAccess(arg0: Class<Object>, arg1: Class<Object>, arg2: Class<Object>, arg3: number): boolean;
}