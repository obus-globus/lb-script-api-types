import type { IoHandle } from '../../../io/netty/channel/IoHandle.d.ts'
import type { IoHandlerContext } from '../../../io/netty/channel/IoHandlerContext.d.ts'
import type { IoRegistration } from '../../../io/netty/channel/IoRegistration.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface IoHandler extends Object{
    destroy(): void;
    initialize(): void;
    isCompatible(arg0: Class<IoHandle>): boolean;
    prepareToDestroy(): void;
    register(arg0: IoHandle): IoRegistration;
    run(arg0: IoHandlerContext): number;
    wakeup(): void;
}