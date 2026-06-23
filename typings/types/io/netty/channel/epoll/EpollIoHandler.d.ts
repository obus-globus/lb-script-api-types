import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { IoHandler } from '../../../../io/netty/channel/IoHandler.d.ts'
import type { IoHandlerContext } from '../../../../io/netty/channel/IoHandlerContext.d.ts'
import type { IoHandlerFactory } from '../../../../io/netty/channel/IoHandlerFactory.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { SelectStrategy } from '../../../../io/netty/channel/SelectStrategy.d.ts'
import type { SelectStrategyFactory } from '../../../../io/netty/channel/SelectStrategyFactory.d.ts'
import type { EpollEventArray } from '../../../../io/netty/channel/epoll/EpollEventArray.d.ts'
import type { NativeArrays } from '../../../../io/netty/channel/epoll/NativeArrays.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { IntSupplier } from '../../../../io/netty/util/IntSupplier.d.ts'
import type { ThreadAwareExecutor } from '../../../../io/netty/util/concurrent/ThreadAwareExecutor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class EpollIoHandler extends Object implements IoHandler {
    static newFactory(): IoHandlerFactory;
    static newFactory(paramarg0: number, paramarg1: SelectStrategyFactory): IoHandlerFactory;
    constructor(arg0: ThreadAwareExecutor, arg1: number, arg2: SelectStrategy)
    // private allowGrowing: boolean;
    // private epollFd: FileDescriptor;
    // private eventFd: FileDescriptor;
    // private events: EpollEventArray;
    // private executor: ThreadAwareExecutor;
    // private nativeArrays: NativeArrays;
    // private nextWakeupNanos: AtomicLong;
    // private numChannels: number;
    // private pendingWakeup: boolean;
    // private prevDeadlineNanos: number;
    // private registrations: { [key: string]: any };
    // private selectNowSupplier: IntSupplier;
    // private selectStrategy: SelectStrategy;
    // private timerFd: FileDescriptor;
    closeFileDescriptors(): void;
    destroy(): void;
    // private epollBusyWait(): number;
    // private epollWait(arg0: IoHandlerContext, arg1: number): number;
    // private epollWaitNoTimerChange(): number;
    // private epollWaitNow(): number;
    // private epollWaitTimeboxed(): number;
    handleLoopException(arg0: Throwable): void;
    initialize(): void;
    isCompatible(arg0: Class<IoHandle>): boolean;
    numRegisteredChannels(): number;
    openFileDescriptors(): void;
    prepareToDestroy(): void;
    // private processReady(arg0: EpollEventArray, arg1: number): boolean;
    register(arg0: IoHandle): IoRegistration;
    registeredChannelsList(): Channel[];
    run(arg0: IoHandlerContext): number;
    wakeup(): void;
}