import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugSubscription } from '../../../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
export class ClientDebugSubscriptionRegistryImpl extends Object {
    static DEBUG_SUBSCRIPTIONS: DebugSubscription<Object>[];
    static register(paramarg0: DebugSubscription<Object>): void;
    constructor()
}