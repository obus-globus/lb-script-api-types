import type { Class } from '../../../java/lang/Class.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AnnotatedType extends AnnotatedElement, Object{
    getAnnotatedOwnerType(): AnnotatedType;
    getAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getAnnotations(): Annotation[];
    getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getType(): Type;
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
}