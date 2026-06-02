import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinJvmBinaryClass$AnnotationVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationVisitor.d.ts'
import type { KotlinJvmBinaryClass$MethodAnnotationVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$MethodAnnotationVisitor.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface KotlinJvmBinaryClass$MemberVisitor extends Object{
    visitField(arg0: Name, arg1: string, arg2: Object): KotlinJvmBinaryClass$AnnotationVisitor;
    visitMethod(arg0: Name, arg1: string): KotlinJvmBinaryClass$MethodAnnotationVisitor;
}