import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DebugSubscription } from '../../../../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
export class ClientDebugSubscriptionRegistry extends Object {
    static register<T extends unknown>(paramarg0: DebugSubscription<T>): void;
    static register<T extends unknown>(paramarg0: DebugSubscription<T>, paramarg1: boolean): void;
    constructor()
}