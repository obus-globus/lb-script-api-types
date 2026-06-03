import type { TruffleContext } from '../../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { DebuggerSession } from '../../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SuspendedEvent } from '../../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { ThreadsListener } from '../../../../../../com/oracle/truffle/api/instrumentation/ThreadsListener.d.ts'
import type { ExecutionContext } from '../../../../../../com/oracle/truffle/tools/dap/server/ExecutionContext.d.ts'
import type { ThreadsHandler$SuspendedThreadInfo } from '../../../../../../com/oracle/truffle/tools/dap/server/ThreadsHandler$SuspendedThreadInfo.d.ts'
import type { Thread } from '../../../../../../com/oracle/truffle/tools/dap/types/Thread.d.ts'
import type { Thread as Thread_2 } from '../../../../../../java/lang/Thread.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ThreadsHandler extends Object implements ThreadsListener {
    constructor(context: ExecutionContext, debuggerSession: DebuggerSession)
    // private context: ExecutionContext;
    // private debuggerSession: DebuggerSession;
    // private id2threads: { [key: number]: Thread_2 };
    // private lastRefId: number;
    // private lastThreadId: number;
    // private suspendedThreads: { [key: number]: ThreadsHandler$SuspendedThreadInfo };
    // private thread2Ids: Map<Thread_2, number>;
    dispose(): void;
    executeInSuspendedThread(id: number, task: (param0: ThreadsHandler$SuspendedThreadInfo) => boolean): void;
    getThreads(): Thread[];
    onThreadDisposed(ctx: TruffleContext, thread: Thread_2): void;
    onThreadInitialized(ctx: TruffleContext, thread: Thread_2): void;
    pause(threadId: number): boolean;
    threadResumed(threadId: number): void;
    threadSuspended(thread: Thread_2, event: SuspendedEvent): void;
}