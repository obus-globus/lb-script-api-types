import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DebugSubscription } from '../../../../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
export class ClientDebugSubscriptionRegistry extends Object {
    static register(paramarg0: DebugSubscription<Object>): void;
    static register(paramarg0: DebugSubscription<Object>, paramarg1: boolean): void;
    constructor()
}