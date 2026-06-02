import type { AbstractService$StateSnapshot } from '../../../../../com/google/common/util/concurrent/AbstractService$StateSnapshot.d.ts'
import type { ListenerCallQueue } from '../../../../../com/google/common/util/concurrent/ListenerCallQueue.d.ts'
import type { Monitor } from '../../../../../com/google/common/util/concurrent/Monitor.d.ts'
import type { Monitor$Guard } from '../../../../../com/google/common/util/concurrent/Monitor$Guard.d.ts'
import type { Service } from '../../../../../com/google/common/util/concurrent/Service.d.ts'
import type { Service$Listener } from '../../../../../com/google/common/util/concurrent/Service$Listener.d.ts'
import type { Service$State } from '../../../../../com/google/common/util/concurrent/Service$State.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractService extends Object implements Service {
    constructor()
    // private hasReachedRunning: Monitor$Guard;
    // private isStartable: Monitor$Guard;
    // private isStoppable: Monitor$Guard;
    // private isStopped: Monitor$Guard;
    // private listeners: ListenerCallQueue<Service$Listener>;
    // private monitor: Monitor;
    // private snapshot: AbstractService$StateSnapshot;
    addListener(listener: Service$Listener, executor: Executor): void;
    awaitRunning(): void;
    awaitRunning(timeout: Duration): void;
    awaitRunning(timeout: number, unit: TimeUnit): void;
    awaitRunning(timeout: Duration): void;
    awaitTerminated(): void;
    awaitTerminated(timeout: Duration): void;
    awaitTerminated(timeout: number, unit: TimeUnit): void;
    awaitTerminated(timeout: Duration): void;
    // private checkCurrentState(expected: Service$State): void;
    // private dispatchListenerEvents(): void;
    doCancelStart(): void;
    doStart(): void;
    doStop(): void;
    // private enqueueFailedEvent(from: Service$State, cause: Throwable): void;
    // private enqueueRunningEvent(): void;
    // private enqueueStartingEvent(): void;
    // private enqueueStoppingEvent(from: Service$State): void;
    // private enqueueTerminatedEvent(from: Service$State): void;
    failureCause(): Throwable;
    isRunning(): boolean;
    notifyFailed(cause: Throwable): void;
    notifyStarted(): void;
    notifyStopped(): void;
    startAsync(): Service;
    state(): Service$State;
    stopAsync(): Service;
    toString(): string;
}