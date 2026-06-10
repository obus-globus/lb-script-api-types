import type { Invokable } from '../../../../com/google/common/reflect/Invokable.d.ts'
import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AnnotatedElement } from '../../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { AnnotatedType } from '../../../../java/lang/reflect/AnnotatedType.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Parameter extends Object implements AnnotatedElement {
    constructor(declaration: Invokable<Object, Object>, position: number, type: TypeToken<Object>, annotations: Annotation[], annotatedType: Object)
    readonly annotatedType: Object;
    readonly annotations: Annotation[];
    // private declaration: Invokable<Object, Object>;
    // private position: number;
    readonly type: TypeToken<Object>;
    equals(obj: Object | null): boolean;
    getAnnotatedType(): AnnotatedType;
    getAnnotation<A extends Annotation>(annotationType: Class<A>): A;
    getAnnotations(): Annotation[];
    getAnnotationsByType<A extends Annotation>(annotationType: Class<A>): A[];
    getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getDeclaredAnnotation<A extends Annotation>(annotationType: Class<A>): A;
    getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType<A extends Annotation>(annotationType: Class<A>): A[];
    getDeclaredAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getDeclaringInvokable(): Invokable<Object, Object>;
    getType(): TypeToken<Object>;
    hashCode(): number;
    isAnnotationPresent(annotationType: Class<Annotation>): boolean;
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
    toString(): string;
}