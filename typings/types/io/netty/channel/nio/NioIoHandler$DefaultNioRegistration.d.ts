import type { IoOps } from '../../../../io/netty/channel/IoOps.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { NioIoHandle } from '../../../../io/netty/channel/nio/NioIoHandle.d.ts'
import type { NioIoOps } from '../../../../io/netty/channel/nio/NioIoOps.d.ts'
import type { ThreadAwareExecutor } from '../../../../io/netty/util/concurrent/ThreadAwareExecutor.d.ts'
import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Selector } from '../../../../java/nio/channels/Selector.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NioIoHandler$DefaultNioRegistration extends Object implements IoRegistration {
    constructor(null_: NioIoHandler$DefaultNioRegistration, arg1: ThreadAwareExecutor, arg2: NioIoHandle, arg3: NioIoOps, arg4: Selector)
    // private canceled: AtomicBoolean;
    // private handle: NioIoHandle;
    // private key: SelectionKey;
    attachment<T extends unknown>(): T;
    cancel(): boolean;
    close(): void;
    handle(): NioIoHandle;
    handle(arg0: number): void;
    isValid(): boolean;
    register(arg0: Selector): void;
    submit(arg0: IoOps): number;
}