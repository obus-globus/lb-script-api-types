import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
export interface JavaAnnotationAsAnnotationArgument extends Object, JavaAnnotationArgument{
    getAnnotation(): JavaAnnotation;
}