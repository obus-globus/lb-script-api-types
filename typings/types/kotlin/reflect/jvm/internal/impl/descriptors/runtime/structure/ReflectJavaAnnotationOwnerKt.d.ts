import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotation.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class ReflectJavaAnnotationOwnerKt extends Object {
    static findAnnotation(paramarg0: Annotation[], paramarg1: FqName): ReflectJavaAnnotation;
    static getAnnotations(paramarg0: Annotation[]): ReflectJavaAnnotation[];
}