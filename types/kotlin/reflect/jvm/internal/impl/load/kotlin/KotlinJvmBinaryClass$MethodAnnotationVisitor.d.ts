import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArgumentVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArgumentVisitor.d.ts'
import type { KotlinJvmBinaryClass$AnnotationVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationVisitor.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export interface KotlinJvmBinaryClass$MethodAnnotationVisitor extends Object, KotlinJvmBinaryClass$AnnotationVisitor{
    visitParameterAnnotation(arg0: number, arg1: ClassId, arg2: SourceElement): KotlinJvmBinaryClass$AnnotationArgumentVisitor;
}