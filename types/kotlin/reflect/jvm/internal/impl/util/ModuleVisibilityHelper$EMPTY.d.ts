import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleVisibilityHelper } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/ModuleVisibilityHelper.d.ts'
export class ModuleVisibilityHelper$EMPTY extends Object implements ModuleVisibilityHelper {
    static INSTANCE: ModuleVisibilityHelper$EMPTY;
    private constructor()
    isInFriendModule(arg0: DeclarationDescriptor, arg1: DeclarationDescriptor): boolean;
}