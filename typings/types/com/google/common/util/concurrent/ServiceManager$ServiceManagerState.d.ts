import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Stopwatch } from '../../../../../com/google/common/base/Stopwatch.d.ts'
import type { ImmutableSetMultimap } from '../../../../../com/google/common/collect/ImmutableSetMultimap.d.ts'
import type { SetMultimap } from '../../../../../com/google/common/collect/SetMultimap.d.ts'
import type { ListenerCallQueue } from '../../../../../com/google/common/util/concurrent/ListenerCallQueue.d.ts'
import type { Monitor } from '../../../../../com/google/common/util/concurrent/Monitor.d.ts'
import type { Monitor$Guard } from '../../../../../com/google/common/util/concurrent/Monitor$Guard.d.ts'
import type { Service } from '../../../../../com/google/common/util/concurrent/Service.d.ts'
import type { Service$State } from '../../../../../com/google/common/util/concurrent/Service$State.d.ts'
import type { ServiceManager$Listener } from '../../../../../com/google/common/util/concurrent/ServiceManager$Listener.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ServiceManager$ServiceManagerState extends Object {
    constructor(services: Service[])
    // private awaitHealthGuard: Monitor$Guard;
    // private listeners: ListenerCallQueue<ServiceManager$Listener>;
    // private monitor: Monitor;
    // private numberOfServices: number;
    // private ready: boolean;
    // private servicesByState: SetMultimap<Service$State, Service>;
    // private startupTimers: JavaMap<Service, Stopwatch>;
    // private states: Service$State[];
    // private stoppedGuard: Monitor$Guard;
    // private transitioned: boolean;
    addListener(listener: ServiceManager$Listener, executor: Executor): void;
    awaitHealthy(): void;
    awaitHealthy(timeout: number, unit: TimeUnit): void;
    awaitStopped(): void;
    awaitStopped(timeout: number, unit: TimeUnit): void;
    checkHealthy(): void;
    dispatchListenerEvents(): void;
    enqueueFailedEvent(service: Service): void;
    enqueueHealthyEvent(): void;
    enqueueStoppedEvent(): void;
    markReady(): void;
    servicesByState(): ImmutableSetMultimap<Service$State, Service>;
    startupTimes(): JavaMap<Service, number>;
    transitionService(service: Service, from: Service$State, to: Service$State): void;
    tryStartTiming(service: Service): void;
}