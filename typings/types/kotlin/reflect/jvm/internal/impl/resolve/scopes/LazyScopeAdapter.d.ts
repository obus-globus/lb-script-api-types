import type { AbstractScopeAdapter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/AbstractScopeAdapter.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class LazyScopeAdapter extends AbstractScopeAdapter {
    static Companion: MemberScope$Companion;
    constructor(arg0: () => MemberScope)
    constructor(arg0: StorageManager, arg1: () => MemberScope)
    // private lazyScope: NotNullLazyValue<MemberScope>;
    getWorkerScope(): MemberScope;
}