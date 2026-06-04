import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { IoHandler } from '../../../../io/netty/channel/IoHandler.d.ts'
import type { IoHandlerContext } from '../../../../io/netty/channel/IoHandlerContext.d.ts'
import type { IoHandlerFactory } from '../../../../io/netty/channel/IoHandlerFactory.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { LocalIoHandle } from '../../../../io/netty/channel/local/LocalIoHandle.d.ts'
import type { ThreadAwareExecutor } from '../../../../io/netty/util/concurrent/ThreadAwareExecutor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalIoHandler extends Object implements IoHandler {
    static newFactory(): IoHandlerFactory;
    private constructor(arg0: ThreadAwareExecutor)
    // private executionThread: Thread;
    // private executor: ThreadAwareExecutor;
    // private registeredChannels: LocalIoHandle[];
    destroy(): void;
    initialize(): void;
    isCompatible(arg0: Class<IoHandle>): boolean;
    prepareToDestroy(): void;
    register(arg0: IoHandle): IoRegistration;
    run(arg0: IoHandlerContext): number;
    wakeup(): void;
}