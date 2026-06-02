import type { IoOps } from '../../../../io/netty/channel/IoOps.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { LocalIoHandle } from '../../../../io/netty/channel/local/LocalIoHandle.d.ts'
import type { ThreadAwareExecutor } from '../../../../io/netty/util/concurrent/ThreadAwareExecutor.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalIoHandler$LocalIoRegistration extends Object implements IoRegistration {
    constructor(null_: LocalIoHandler$LocalIoRegistration, arg1: ThreadAwareExecutor, arg2: LocalIoHandle)
    // private canceled: AtomicBoolean;
    // private executor: ThreadAwareExecutor;
    // private handle: LocalIoHandle;
    attachment<T extends Object | number | string | boolean>(): T;
    cancel(): boolean;
    // private cancel0(): void;
    isValid(): boolean;
    submit(arg0: IoOps): number;
}