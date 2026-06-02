import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AbstractAnnotationTypeQualifierResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AbstractAnnotationTypeQualifierResolver.d.ts'
import type { JavaTypeEnhancementState } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeEnhancementState.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
export class AnnotationTypeQualifierResolver extends AbstractAnnotationTypeQualifierResolver<AnnotationDescriptor> {
    constructor(arg0: JavaTypeEnhancementState)
    enumArguments(arg0: AnnotationDescriptor, arg1: boolean): string[];
    getFqName(arg0: AnnotationDescriptor): FqName;
    getKey(arg0: AnnotationDescriptor): Object;
    getMetaAnnotations(arg0: AnnotationDescriptor): AnnotationDescriptor[];
    isK2(): boolean;
    // private toEnumNames(arg0: ConstantValue<Object>): string[];
}