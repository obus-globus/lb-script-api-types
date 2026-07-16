import type { RemovalListener } from '../../../../com/google/common/cache/RemovalListener.d.ts'
import type { RemovalNotification } from '../../../../com/google/common/cache/RemovalNotification.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RemovalListeners extends Object {
    static asynchronous<K extends unknown, V extends unknown>(paramlistener: (param0: RemovalNotification<K, V>) => void, paramexecutor: Executor): (param0: RemovalNotification<K, V>) => void;
    private constructor()
}