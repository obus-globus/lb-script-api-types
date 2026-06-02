import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { DebugValueSource$ValueGetter } from '../../../../net/minecraft/util/debug/DebugValueSource$ValueGetter.d.ts'
export interface DebugValueSource$Registration extends Object{
    register(subscription: DebugSubscription<T>, getter: DebugValueSource$ValueGetter<T>): void;
}