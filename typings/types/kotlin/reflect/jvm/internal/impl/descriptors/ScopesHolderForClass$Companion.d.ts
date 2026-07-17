import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ScopesHolderForClass } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ScopesHolderForClass.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class ScopesHolderForClass$Companion extends Object {
    private constructor()
    create<T extends MemberScope>(arg0: ClassDescriptor, arg1: StorageManager, arg2: KotlinTypeRefiner, arg3: (param0: KotlinTypeRefiner) => T): ScopesHolderForClass<T>;
}