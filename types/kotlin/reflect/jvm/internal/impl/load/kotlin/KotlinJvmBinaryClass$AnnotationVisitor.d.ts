import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArgumentVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArgumentVisitor.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export interface KotlinJvmBinaryClass$AnnotationVisitor extends Object{
    visitAnnotation(arg0: ClassId, arg1: SourceElement): KotlinJvmBinaryClass$AnnotationArgumentVisitor;
    visitEnd(): void;
}