import type { Class } from '../../../java/lang/Class.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { TypeVariable } from '../../../java/lang/reflect/TypeVariable.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface GenericDeclaration extends AnnotatedElement, Object{
    getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getDeclaredAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getTypeParameters(): TypeVariable<any>[];
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
}