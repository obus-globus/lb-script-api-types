import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugSubscription } from '../../../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
export class ClientDebugSubscriptionRegistryImpl extends Object {
    static DEBUG_SUBSCRIPTIONS: (Object | null)[];
    static register(paramarg0: DebugSubscription<Object>): void;
    constructor()
}