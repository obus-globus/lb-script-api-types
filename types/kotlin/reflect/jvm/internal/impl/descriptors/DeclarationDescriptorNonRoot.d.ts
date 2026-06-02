import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorWithSource } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorWithSource.d.ts'
export interface DeclarationDescriptorNonRoot extends Object, DeclarationDescriptorWithSource{
    getContainingDeclaration(): DeclarationDescriptor;
}