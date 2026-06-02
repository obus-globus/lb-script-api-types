import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { IoHandler } from '../../../../io/netty/channel/IoHandler.d.ts'
import type { IoHandlerContext } from '../../../../io/netty/channel/IoHandlerContext.d.ts'
import type { IoHandlerFactory } from '../../../../io/netty/channel/IoHandlerFactory.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { SelectStrategy } from '../../../../io/netty/channel/SelectStrategy.d.ts'
import type { SelectStrategyFactory } from '../../../../io/netty/channel/SelectStrategyFactory.d.ts'
import type { KQueueEventArray } from '../../../../io/netty/channel/kqueue/KQueueEventArray.d.ts'
import type { KQueueIoHandler$DefaultKqueueIoRegistration } from '../../../../io/netty/channel/kqueue/KQueueIoHandler$DefaultKqueueIoRegistration.d.ts'
import type { NativeArrays } from '../../../../io/netty/channel/kqueue/NativeArrays.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { IntSupplier } from '../../../../io/netty/util/IntSupplier.d.ts'
import type { ThreadAwareExecutor } from '../../../../io/netty/util/concurrent/ThreadAwareExecutor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueIoHandler extends Object implements IoHandler {
    static newFactory(): IoHandlerFactory;
    static newFactory(paramarg0: number, paramarg1: SelectStrategyFactory): IoHandlerFactory;
    private constructor(arg0: ThreadAwareExecutor, arg1: number, arg2: SelectStrategy)
    // private allowGrowing: boolean;
    // private cancelledRegistrations: KQueueIoHandler$DefaultKqueueIoRegistration[];
    // private changeList: KQueueEventArray;
    // private eventList: KQueueEventArray;
    // private executor: ThreadAwareExecutor;
    // private kqueueFd: FileDescriptor;
    // private nativeArrays: NativeArrays;
    // private nextId: number;
    // private numChannels: number;
    // private registrations: LongObjectMap<KQueueIoHandler$DefaultKqueueIoRegistration>;
    // private selectNowSupplier: IntSupplier;
    // private selectStrategy: SelectStrategy;
    // private wakenUp: number;
    destroy(): void;
    destroy(): void;
    // private generateNextId(): number;
    initialize(): void;
    isCompatible(arg0: Class<IoHandle>): boolean;
    // private kqueueWait(arg0: IoHandlerContext, arg1: boolean): number;
    // private kqueueWait(arg0: number, arg1: number): number;
    // private kqueueWaitNow(): number;
    numRegisteredChannels(): number;
    prepareToDestroy(): void;
    prepareToDestroy(): void;
    // private processCancelledRegistrations(): void;
    // private processReady(arg0: number): void;
    register(arg0: IoHandle): IoRegistration;
    registeredChannelsList(): Channel[];
    run(arg0: IoHandlerContext): number;
    wakeup(): void;
    // private wakeup0(): void;
}