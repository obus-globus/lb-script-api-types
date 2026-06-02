import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArgumentVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArgumentVisitor.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ClassLiteralValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ClassLiteralValue.d.ts'
export abstract class ReadKotlinClassHeaderAnnotationVisitor$CollectStringArrayAnnotationVisitor extends Object implements KotlinJvmBinaryClass$AnnotationArrayArgumentVisitor {
    constructor()
    // private strings: string[];
    visit(arg0: Object): void;
    visitAnnotation(arg0: ClassId): KotlinJvmBinaryClass$AnnotationArgumentVisitor;
    visitClassLiteral(arg0: ClassLiteralValue): void;
    visitEnd(): void;
    visitEnd(arg0: string[]): void;
    visitEnum(arg0: ClassId, arg1: Name): void;
}