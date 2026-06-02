import type { CloneableClassScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/jvm/CloneableClassScope$Companion.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { GivenFunctionsMemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/GivenFunctionsMemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class CloneableClassScope extends GivenFunctionsMemberScope {
    static Companion: CloneableClassScope$Companion;
    static Companion: MemberScope$Companion;
    constructor(arg0: StorageManager, arg1: ClassDescriptor)
    computeDeclaredFunctions(): FunctionDescriptor[];
}