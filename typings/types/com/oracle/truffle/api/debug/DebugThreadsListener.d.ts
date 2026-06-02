import type { DebugContext } from '../../../../../com/oracle/truffle/api/debug/DebugContext.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DebugThreadsListener extends Object{
    threadDisposed(context: DebugContext, thread: Thread): void;
    threadInitialized(context: DebugContext, thread: Thread): void;
}