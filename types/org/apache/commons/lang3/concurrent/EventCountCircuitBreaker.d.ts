import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { AbstractCircuitBreaker } from '../../../../../org/apache/commons/lang3/concurrent/AbstractCircuitBreaker.d.ts'
import type { AbstractCircuitBreaker$State } from '../../../../../org/apache/commons/lang3/concurrent/AbstractCircuitBreaker$State.d.ts'
import type { EventCountCircuitBreaker$CheckIntervalData } from '../../../../../org/apache/commons/lang3/concurrent/EventCountCircuitBreaker$CheckIntervalData.d.ts'
export class EventCountCircuitBreaker extends AbstractCircuitBreaker<number> {
    static PROPERTY_NAME: string;
    constructor(arg0: number, arg1: number, arg2: TimeUnit)
    constructor(arg0: number, arg1: number, arg2: TimeUnit, arg3: number)
    constructor(arg0: number, arg1: number, arg2: TimeUnit, arg3: number, arg4: number, arg5: TimeUnit)
    // private checkIntervalData: AtomicReference<EventCountCircuitBreaker$CheckIntervalData>;
    readonly closingInterval: number;
    readonly closingThreshold: number;
    readonly openingInterval: number;
    readonly openingThreshold: number;
    // private changeStateAndStartNewCheckInterval(arg0: AbstractCircuitBreaker$State): void;
    checkState(): boolean;
    close(): void;
    getClosingInterval(): number;
    getClosingThreshold(): number;
    getOpeningInterval(): number;
    getOpeningThreshold(): number;
    incrementAndCheckState(): boolean;
    incrementAndCheckState(arg0: number): boolean;
    nanoTime(): number;
    // private nextCheckIntervalData(arg0: number, arg1: EventCountCircuitBreaker$CheckIntervalData, arg2: AbstractCircuitBreaker$State, arg3: number): EventCountCircuitBreaker$CheckIntervalData;
    open(): void;
    // private performStateCheck(arg0: number): boolean;
    // private updateCheckIntervalData(arg0: EventCountCircuitBreaker$CheckIntervalData, arg1: EventCountCircuitBreaker$CheckIntervalData): boolean;
}