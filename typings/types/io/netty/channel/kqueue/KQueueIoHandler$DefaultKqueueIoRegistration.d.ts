import type { IoOps } from '../../../../io/netty/channel/IoOps.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { KQueueIoEvent } from '../../../../io/netty/channel/kqueue/KQueueIoEvent.d.ts'
import type { KQueueIoHandle } from '../../../../io/netty/channel/kqueue/KQueueIoHandle.d.ts'
import type { ThreadAwareExecutor } from '../../../../io/netty/util/concurrent/ThreadAwareExecutor.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueIoHandler$DefaultKqueueIoRegistration extends Object implements IoRegistration {
    constructor(null_: KQueueIoHandler$DefaultKqueueIoRegistration, arg1: ThreadAwareExecutor, arg2: KQueueIoHandle)
    // private canceled: AtomicBoolean;
    // private cancellationPending: boolean;
    // private event: KQueueIoEvent;
    // private executor: ThreadAwareExecutor;
    // private handle: KQueueIoHandle;
    // private id: number;
    attachment<T extends Object | number | string | boolean>(): T;
    cancel(): boolean;
    // private cancel0(): void;
    close(): void;
    // private evSet(arg0: number, arg1: number, arg2: number): void;
    handle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    isHandleForChannel(): boolean;
    isValid(): boolean;
    submit(arg0: IoOps): number;
}