import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class DescriptorEquivalenceForOverrides extends Object {
    static INSTANCE: DescriptorEquivalenceForOverrides;
    private constructor()
    areCallableDescriptorsEquivalent(arg0: CallableDescriptor, arg1: CallableDescriptor, arg2: boolean, arg3: boolean, arg4: boolean, arg5: KotlinTypeRefiner): boolean;
    // private areClassesEquivalent(arg0: ClassDescriptor, arg1: ClassDescriptor): boolean;
    areEquivalent(arg0: DeclarationDescriptor, arg1: DeclarationDescriptor, arg2: boolean, arg3: boolean): boolean;
    areTypeParametersEquivalent(arg0: TypeParameterDescriptor, arg1: TypeParameterDescriptor, arg2: boolean): boolean;
    areTypeParametersEquivalent(arg0: TypeParameterDescriptor, arg1: TypeParameterDescriptor, arg2: boolean, arg3: (param0: DeclarationDescriptor, param1: DeclarationDescriptor) => boolean): boolean;
    // private ownersEquivalent(arg0: DeclarationDescriptor, arg1: DeclarationDescriptor, arg2: (param0: DeclarationDescriptor, param1: DeclarationDescriptor) => boolean, arg3: boolean): boolean;
    // private singleSource(arg0: CallableDescriptor): SourceElement;
}