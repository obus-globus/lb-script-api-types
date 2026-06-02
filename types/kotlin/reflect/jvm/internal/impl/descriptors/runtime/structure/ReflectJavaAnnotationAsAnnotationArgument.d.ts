import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { ReflectJavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationArgument.d.ts'
import type { ReflectJavaAnnotationArgument$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationArgument$Factory.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaAnnotationAsAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationAsAnnotationArgument.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ReflectJavaAnnotationAsAnnotationArgument extends ReflectJavaAnnotationArgument implements JavaAnnotationAsAnnotationArgument {
    static Factory: ReflectJavaAnnotationArgument$Factory;
    constructor(arg0: Name, arg1: Annotation)
    readonly annotation: Annotation;
    getAnnotation(): JavaAnnotation;
}