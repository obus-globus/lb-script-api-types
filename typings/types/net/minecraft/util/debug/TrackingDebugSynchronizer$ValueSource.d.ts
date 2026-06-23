import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { DebugSubscription$Update } from '../../../../net/minecraft/util/debug/DebugSubscription$Update.d.ts'
import type { DebugValueSource$ValueGetter } from '../../../../net/minecraft/util/debug/DebugValueSource$ValueGetter.d.ts'
export class TrackingDebugSynchronizer$ValueSource<T extends unknown> extends Object {
    private constructor(getter: DebugValueSource$ValueGetter<T>)
    // private getter: DebugValueSource$ValueGetter<T>;
    // private lastSyncedValue: T;
    pollUpdate(subscription: DebugSubscription<T>): DebugSubscription$Update<T>;
}