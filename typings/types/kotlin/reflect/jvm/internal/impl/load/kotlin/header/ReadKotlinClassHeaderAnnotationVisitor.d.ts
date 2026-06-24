import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArgumentVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArgumentVisitor.d.ts'
import type { KotlinJvmBinaryClass$AnnotationVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationVisitor.d.ts'
import type { KotlinClassHeader } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/header/KotlinClassHeader.d.ts'
import type { KotlinClassHeader$Kind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/header/KotlinClassHeader$Kind.d.ts'
import type { MetadataVersion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class ReadKotlinClassHeaderAnnotationVisitor extends Object implements KotlinJvmBinaryClass$AnnotationVisitor {
    constructor()
    // private data: string[];
    // private extraInt: number;
    // private extraString: string;
    // private headerKind: KotlinClassHeader$Kind;
    // private incompatibleData: string[];
    // private metadataVersionArray: number[];
    // private packageName: string;
    // private strings: string[];
    createHeader(arg0: MetadataVersion): KotlinClassHeader;
    createHeaderWithDefaultMetadataVersion(): KotlinClassHeader;
    // private shouldHaveData(): boolean;
    visitAnnotation(arg0: ClassId, arg1: SourceElement): KotlinJvmBinaryClass$AnnotationArgumentVisitor;
    visitEnd(): void;
}