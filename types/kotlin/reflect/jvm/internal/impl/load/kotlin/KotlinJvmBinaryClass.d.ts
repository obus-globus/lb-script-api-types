import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinJvmBinaryClass$AnnotationVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationVisitor.d.ts'
import type { KotlinJvmBinaryClass$MemberVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$MemberVisitor.d.ts'
import type { KotlinClassHeader } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/header/KotlinClassHeader.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export interface KotlinJvmBinaryClass extends Object{
    getClassHeader(): KotlinClassHeader;
    getClassId(): ClassId;
    getLocation(): string;
    loadClassAnnotations(arg0: KotlinJvmBinaryClass$AnnotationVisitor, arg1: number[]): void;
    visitMembers(arg0: KotlinJvmBinaryClass$MemberVisitor, arg1: number[]): void;
}