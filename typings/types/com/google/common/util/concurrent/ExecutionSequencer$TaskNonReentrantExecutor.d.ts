import type { ExecutionSequencer } from '../../../../../com/google/common/util/concurrent/ExecutionSequencer.d.ts'
import type { ExecutionSequencer$RunningState } from '../../../../../com/google/common/util/concurrent/ExecutionSequencer$RunningState.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
export class ExecutionSequencer$TaskNonReentrantExecutor extends AtomicReference<ExecutionSequencer$RunningState> implements Runnable, Executor {
    constructor(arg0: Executor, arg1: ExecutionSequencer, arg2: ExecutionSequencer$1)
    // private delegate: Executor;
    // private sequencer: ExecutionSequencer;
    // private submitting: Thread;
    // private task: () => void;
    execute(task: () => void): void;
    run(): void;
    // private trySetCancelled(): boolean;
    // private trySetStarted(): boolean;
}