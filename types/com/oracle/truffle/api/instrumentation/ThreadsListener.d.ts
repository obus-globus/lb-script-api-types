import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ThreadsListener extends Object{
    onThreadDisposed(context: TruffleContext, thread: Thread): void;
    onThreadInitialized(context: TruffleContext, thread: Thread): void;
}