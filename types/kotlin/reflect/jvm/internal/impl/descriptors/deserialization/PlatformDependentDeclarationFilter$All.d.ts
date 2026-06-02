import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { PlatformDependentDeclarationFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/PlatformDependentDeclarationFilter.d.ts'
export class PlatformDependentDeclarationFilter$All extends Object implements PlatformDependentDeclarationFilter {
    static INSTANCE: PlatformDependentDeclarationFilter$All;
    private constructor()
    isFunctionAvailable(arg0: ClassDescriptor, arg1: SimpleFunctionDescriptor): boolean;
}