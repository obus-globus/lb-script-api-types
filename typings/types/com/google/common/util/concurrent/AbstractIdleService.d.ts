import type { Supplier } from '../../../../../com/google/common/base/Supplier.d.ts'
import type { Service } from '../../../../../com/google/common/util/concurrent/Service.d.ts'
import type { Service$Listener } from '../../../../../com/google/common/util/concurrent/Service$Listener.d.ts'
import type { Service$State } from '../../../../../com/google/common/util/concurrent/Service$State.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractIdleService extends Object implements Service {
    constructor()
    // private delegate: Service;
    // private threadNameSupplier: () => string;
    addListener(listener: Service$Listener, executor: Executor): void;
    awaitRunning(): void;
    awaitRunning(timeout: Duration): void;
    awaitRunning(timeout: number, unit: TimeUnit): void;
    awaitTerminated(): void;
    awaitTerminated(timeout: Duration): void;
    awaitTerminated(timeout: number, unit: TimeUnit): void;
    executor(): Executor;
    failureCause(): Throwable;
    isRunning(): boolean;
    serviceName(): string;
    shutDown(): void;
    startAsync(): Service;
    startUp(): void;
    state(): Service$State;
    stopAsync(): Service;
    toString(): string;
}