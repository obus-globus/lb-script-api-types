import type { Class } from '../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AnnotatedElement extends Object{
    getAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getAnnotations(): Annotation[];
    getAnnotationsByType(arg0: Class<T>): T[];
    getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(arg0: Class<T>): T[];
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
}