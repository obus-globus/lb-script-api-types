import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArgumentVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArgumentVisitor.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor.d.ts'
import type { ReadKotlinClassHeaderAnnotationVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/header/ReadKotlinClassHeaderAnnotationVisitor.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ClassLiteralValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ClassLiteralValue.d.ts'
export class ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor extends Object implements KotlinJvmBinaryClass$AnnotationArgumentVisitor {
    constructor(null_: ReadKotlinClassHeaderAnnotationVisitor, arg1: any)
    // private dataArrayVisitor(): KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor;
    // private stringsArrayVisitor(): KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor;
    visit(arg0: Name, arg1: Object): void;
    visitAnnotation(arg0: Name, arg1: ClassId): KotlinJvmBinaryClass$AnnotationArgumentVisitor;
    visitArray(arg0: Name): KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor;
    visitClassLiteral(arg0: Name, arg1: ClassLiteralValue): void;
    visitEnd(): void;
    visitEnum(arg0: Name, arg1: ClassId, arg2: Name): void;
}