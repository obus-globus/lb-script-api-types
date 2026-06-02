import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptorNonRoot } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorNonRoot.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export interface Substitutable<T extends DeclarationDescriptorNonRoot> extends Object{
    substitute(arg0: TypeSubstitutor): T;
}