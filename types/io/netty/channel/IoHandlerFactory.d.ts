import type { IoHandler } from '../../../io/netty/channel/IoHandler.d.ts'
import type { ThreadAwareExecutor } from '../../../io/netty/util/concurrent/ThreadAwareExecutor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface IoHandlerFactory extends Object{
    isChangingThreadSupported(): boolean;
    newHandler(arg0: ThreadAwareExecutor): IoHandler;
}