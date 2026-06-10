import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Reference } from '../../../../../../java/lang/ref/Reference.d.ts'
import type { ThreadFactory } from '../../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicReference } from '../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LifeCycle$State } from '../../../../../../org/apache/logging/log4j/core/LifeCycle$State.d.ts'
import type { LifeCycle2 } from '../../../../../../org/apache/logging/log4j/core/LifeCycle2.d.ts'
import type { Cancellable } from '../../../../../../org/apache/logging/log4j/core/util/Cancellable.d.ts'
import type { ShutdownCallbackRegistry } from '../../../../../../org/apache/logging/log4j/core/util/ShutdownCallbackRegistry.d.ts'
export class DefaultShutdownCallbackRegistry extends Object implements Runnable, LifeCycle2, ShutdownCallbackRegistry {
    static SHUTDOWN_CALLBACK_REGISTRY: string;
    static SHUTDOWN_HOOK_ENABLED: string;
    static SHUTDOWN_HOOK_MARKER: Marker;
    constructor()
    constructor(threadFactory: ThreadFactory)
    // private hooks: Reference<Cancellable>[];
    // private shutdownHookRef: Reference<Thread>;
    readonly state: AtomicReference<LifeCycle$State>;
    // private threadFactory: ThreadFactory;
    addShutdownCallback(callback: () => void): Cancellable;
    // private addShutdownHook(thread: Thread): void;
    getState(): LifeCycle$State;
    initialize(): void;
    isStarted(): boolean;
    isStopped(): boolean;
    // private removeShutdownHook(): void;
    run(): void;
    start(): void;
    stop(): void;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
}