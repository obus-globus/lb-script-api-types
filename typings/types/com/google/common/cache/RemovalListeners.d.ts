import type { RemovalListener } from '../../../../com/google/common/cache/RemovalListener.d.ts'
import type { RemovalNotification } from '../../../../com/google/common/cache/RemovalNotification.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RemovalListeners extends Object {
    static asynchronous(paramlistener: (param0: RemovalNotification<Object, Object>) => void, paramexecutor: Executor): (param0: RemovalNotification<Object, Object>) => void;
    private constructor()
}