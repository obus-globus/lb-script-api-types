import type { AbstractScheduledService$Scheduler } from '../../../../../com/google/common/util/concurrent/AbstractScheduledService$Scheduler.d.ts'
import type { AbstractService } from '../../../../../com/google/common/util/concurrent/AbstractService.d.ts'
import type { Service } from '../../../../../com/google/common/util/concurrent/Service.d.ts'
import type { Service$Listener } from '../../../../../com/google/common/util/concurrent/Service$Listener.d.ts'
import type { Service$State } from '../../../../../com/google/common/util/concurrent/Service$State.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractScheduledService extends Object implements Service {
    constructor()
    // private delegate: AbstractService;
    addListener(listener: Service$Listener, executor: Executor): void;
    awaitRunning(): void;
    awaitRunning(timeout: Duration): void;
    awaitRunning(timeout: number, unit: TimeUnit): void;
    awaitTerminated(): void;
    awaitTerminated(timeout: Duration): void;
    awaitTerminated(timeout: number, unit: TimeUnit): void;
    executor(): ScheduledExecutorService;
    failureCause(): Throwable;
    isRunning(): boolean;
    runOneIteration(): void;
    scheduler(): AbstractScheduledService$Scheduler;
    serviceName(): string;
    shutDown(): void;
    startAsync(): Service;
    startUp(): void;
    state(): Service$State;
    stopAsync(): Service;
    toString(): string;
}