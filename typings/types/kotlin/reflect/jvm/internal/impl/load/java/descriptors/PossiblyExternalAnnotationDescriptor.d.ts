import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface PossiblyExternalAnnotationDescriptor extends Object, AnnotationDescriptor{
    getFqName(): FqName;
    getSource(): SourceElement;
    getType(): KotlinType;
    isIdeExternalAnnotation(): boolean;
}