import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { ContinuationInterceptor$Key } from '../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { EventLoopImplBase } from '../../kotlinx/coroutines/EventLoopImplBase.d.ts'
import type { EventLoopImplBase$DelayedTask } from '../../kotlinx/coroutines/EventLoopImplBase$DelayedTask.d.ts'
export class DefaultExecutor extends EventLoopImplBase implements Runnable {
    static INSTANCE: DefaultExecutor;
    static Key: ContinuationInterceptor$Key;
    static THREAD_NAME: string;
    // private ACTIVE: number;
    // private DEFAULT_KEEP_ALIVE_MS: number;
    // private FRESH: number;
    // private KEEP_ALIVE_NANOS: number;
    // private SHUTDOWN: number;
    // private SHUTDOWN_ACK: number;
    // private SHUTDOWN_REQ: number;
    THREAD_NAME: string;
    // private _thread: Thread | null;
    // private debugStatus: number;
    // private /*not mapped: */ isShutDown(): boolean;
    // private /*not mapped: */ isShutdownRequested(): boolean;
    /*not mapped: */ isThreadPresent$kotlinx_coroutines_core(): boolean;
    // private /*not mapped: */ getThread(): Thread;
    // private acknowledgeShutdownIfNeeded(): void;
    // private createThreadSync(): Thread;
    enqueue(task: () => void): void;
    ensureStarted(): void;
    invokeOnTimeout(timeMillis: number, block: () => void, context: CoroutineContext): DisposableHandle;
    // private notifyStartup(): boolean;
    protected reschedule(now: number, delayedTask: EventLoopImplBase$DelayedTask): void;
    run(): void;
    shutdown(): void;
    // private shutdownError(): void;
    shutdownForTests(timeout: number): void;
    toString(): string;
}