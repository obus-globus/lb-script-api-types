import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptorNonRoot } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorNonRoot.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export interface ClassifierDescriptor extends Object, DeclarationDescriptorNonRoot{
    getDefaultType(): SimpleType;
    getOriginal(): ClassifierDescriptor;
    getTypeConstructor(): TypeConstructor;
}