import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BinaryClassAnnotationAndConstantLoaderImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/BinaryClassAnnotationAndConstantLoaderImpl.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArgumentVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArgumentVisitor.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ClassLiteralValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ClassLiteralValue.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
export abstract class BinaryClassAnnotationAndConstantLoaderImpl$AbstractAnnotationArgumentVisitor extends Object implements KotlinJvmBinaryClass$AnnotationArgumentVisitor {
    constructor(null_: BinaryClassAnnotationAndConstantLoaderImpl)
    visit(arg0: Name, arg1: Object): void;
    visitAnnotation(arg0: Name, arg1: ClassId): KotlinJvmBinaryClass$AnnotationArgumentVisitor;
    visitArray(arg0: Name): KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor;
    visitArrayValue(arg0: Name, arg1: ConstantValue<Object>[]): void;
    visitClassLiteral(arg0: Name, arg1: ClassLiteralValue): void;
    visitConstantValue(arg0: Name, arg1: ConstantValue<Object>): void;
    visitEnd(): void;
    visitEnum(arg0: Name, arg1: ClassId, arg2: Name): void;
}