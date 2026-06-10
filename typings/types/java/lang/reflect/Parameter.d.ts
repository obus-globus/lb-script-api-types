import type { Class } from '../../../java/lang/Class.d.ts'
import type { AccessFlag } from '../../../java/lang/reflect/AccessFlag.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { AnnotatedType } from '../../../java/lang/reflect/AnnotatedType.d.ts'
import type { Executable } from '../../../java/lang/reflect/Executable.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Parameter extends Object implements AnnotatedElement {
    constructor(arg0: string, arg1: number, arg2: Executable, arg3: number)
    readonly declaredAnnotations: Map<Class<Annotation>, Annotation>;
    // private executable: Executable;
    // private index: number;
    readonly modifiers: number;
    readonly name: string;
    // private parameterClassCache: Class<Object>;
    // private parameterTypeCache: Type;
    accessFlags(): AccessFlag[];
    // private declaredAnnotations(): Map<Class<Annotation>, Annotation>;
    equals(arg0: Object | null): boolean;
    getAnnotatedType(): AnnotatedType;
    getAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getAnnotations(): Annotation[];
    getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getDeclaringExecutable(): Executable;
    getModifiers(): number;
    getName(): string;
    getParameterizedType(): Type;
    getRealName(): string;
    getType(): Class<Object>;
    hashCode(): number;
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
    isImplicit(): boolean;
    isNamePresent(): boolean;
    isSynthetic(): boolean;
    isVarArgs(): boolean;
    toString(): string;
}