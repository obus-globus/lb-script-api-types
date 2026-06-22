import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { ClassifierDescriptorWithTypeParameters } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptorWithTypeParameters.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export interface TypeAliasDescriptor extends Object, ClassifierDescriptorWithTypeParameters{
    getClassDescriptor(): ClassDescriptor;
    getContainingDeclaration(): DeclarationDescriptor;
    getDefaultType(): SimpleType;
    getExpandedType(): SimpleType;
    getModality(): Modality;
    getName(): Name;
    getOriginal(): ClassifierDescriptor;
    getOriginal(): DeclarationDescriptor;
    getSource(): SourceElement;
    getTypeConstructor(): TypeConstructor;
    getUnderlyingType(): SimpleType;
    getVisibility(): DescriptorVisibility;
    isActual(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
    isInner(): boolean;
}