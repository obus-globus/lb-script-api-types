import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { TypeSubstitution } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class DescriptorSubstitutor extends Object {
    static substituteTypeParameters(paramarg0: TypeParameterDescriptor[], paramarg1: TypeSubstitution, paramarg2: DeclarationDescriptor, paramarg3: TypeParameterDescriptor[]): TypeSubstitutor;
    static substituteTypeParameters(paramarg0: TypeParameterDescriptor[], paramarg1: TypeSubstitution, paramarg2: DeclarationDescriptor, paramarg3: TypeParameterDescriptor[], paramarg4: (Object | null)[]): TypeSubstitutor;
}