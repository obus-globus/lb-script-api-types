import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
export interface DeclarationDescriptorWithSource extends Object, DeclarationDescriptor{
    getSource(): SourceElement;
}