import type { FunctionClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionClassDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { GivenFunctionsMemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/GivenFunctionsMemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class FunctionClassScope extends GivenFunctionsMemberScope {
    static Companion: MemberScope$Companion;
    constructor(arg0: StorageManager, arg1: FunctionClassDescriptor)
    computeDeclaredFunctions(): FunctionDescriptor[];
}