import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ScopesHolderForClass$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ScopesHolderForClass$Companion.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { NotNullLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class ScopesHolderForClass<T extends MemberScope> extends Object {
    static Companion: ScopesHolderForClass$Companion;
    private constructor(arg0: ClassDescriptor, arg1: StorageManager, arg2: Function1<KotlinTypeRefiner, T>, arg3: KotlinTypeRefiner)
    // private classDescriptor: ClassDescriptor;
    // private kotlinTypeRefinerForOwnerModule: KotlinTypeRefiner;
    // private scopeFactory: (param0: KotlinTypeRefiner) => T;
    // private scopeForOwnerModule$delegate: NotNullLazyValue<Object>;
    getScope(arg0: KotlinTypeRefiner): T;
    // private getScopeForOwnerModule(): T;
}