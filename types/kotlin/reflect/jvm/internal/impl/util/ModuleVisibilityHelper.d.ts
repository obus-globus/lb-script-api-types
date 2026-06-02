import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
export interface ModuleVisibilityHelper extends Object{
    isInFriendModule(arg0: DeclarationDescriptor, arg1: DeclarationDescriptor): boolean;
}