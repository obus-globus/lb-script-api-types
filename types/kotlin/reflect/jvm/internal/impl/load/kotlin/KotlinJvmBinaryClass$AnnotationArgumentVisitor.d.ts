import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ClassLiteralValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ClassLiteralValue.d.ts'
export interface KotlinJvmBinaryClass$AnnotationArgumentVisitor extends Object{
    visit(arg0: Name, arg1: Object): void;
    visitAnnotation(arg0: Name, arg1: ClassId): KotlinJvmBinaryClass$AnnotationArgumentVisitor;
    visitArray(arg0: Name): KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor;
    visitClassLiteral(arg0: Name, arg1: ClassLiteralValue): void;
    visitEnd(): void;
    visitEnum(arg0: Name, arg1: ClassId, arg2: Name): void;
}