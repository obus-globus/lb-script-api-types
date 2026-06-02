import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
export interface PlatformDependentDeclarationFilter extends Object{
    isFunctionAvailable(arg0: ClassDescriptor, arg1: SimpleFunctionDescriptor): boolean;
}