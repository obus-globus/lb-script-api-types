import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ImmutableSetMultimap } from '../../../../../com/google/common/collect/ImmutableSetMultimap.d.ts'
import type { Service } from '../../../../../com/google/common/util/concurrent/Service.d.ts'
import type { Service$State } from '../../../../../com/google/common/util/concurrent/Service$State.d.ts'
import type { ServiceManager$Listener } from '../../../../../com/google/common/util/concurrent/ServiceManager$Listener.d.ts'
import type { ServiceManager$ServiceManagerState } from '../../../../../com/google/common/util/concurrent/ServiceManager$ServiceManagerState.d.ts'
import type { ServiceManagerBridge } from '../../../../../com/google/common/util/concurrent/ServiceManagerBridge.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ServiceManager extends Object implements ServiceManagerBridge {
    constructor(services: Service[])
    // private services: Service[];
    // private state: ServiceManager$ServiceManagerState;
    addListener(listener: ServiceManager$Listener, executor: Executor): void;
    awaitHealthy(): void;
    awaitHealthy(timeout: Duration): void;
    awaitHealthy(timeout: number, unit: TimeUnit): void;
    awaitStopped(): void;
    awaitStopped(timeout: Duration): void;
    awaitStopped(timeout: number, unit: TimeUnit): void;
    isHealthy(): boolean;
    servicesByState(): ImmutableSetMultimap<Service$State, Service>;
    startAsync(): ServiceManager;
    startupDurations(): JavaMap<Service, Duration>;
    startupTimes(): JavaMap<Service, number>;
    stopAsync(): ServiceManager;
    toString(): string;
}