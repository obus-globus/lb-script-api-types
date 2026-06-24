import type { IoOps } from '../../../../io/netty/channel/IoOps.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { EpollIoHandle } from '../../../../io/netty/channel/epoll/EpollIoHandle.d.ts'
import type { EpollIoHandler } from '../../../../io/netty/channel/epoll/EpollIoHandler.d.ts'
import type { EpollIoHandler$RegistrationState } from '../../../../io/netty/channel/epoll/EpollIoHandler$RegistrationState.d.ts'
import type { ThreadAwareExecutor } from '../../../../io/netty/util/concurrent/ThreadAwareExecutor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollIoHandler$DefaultEpollIoRegistration extends Object implements IoRegistration {
    constructor(null_: EpollIoHandler, arg1: ThreadAwareExecutor, arg2: EpollIoHandle)
    // private executor: ThreadAwareExecutor;
    // private handle: EpollIoHandle;
    // private state: EpollIoHandler$RegistrationState;
    attachment<T extends unknown>(): T;
    cancel(): boolean;
    // private cancel0(): void;
    close(): void;
    handle(arg0: number): void;
    isValid(): boolean;
    submit(arg0: IoOps): number;
}