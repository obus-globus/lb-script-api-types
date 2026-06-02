import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventCountCircuitBreaker } from '../../../../../org/apache/commons/lang3/concurrent/EventCountCircuitBreaker.d.ts'
import type { EventCountCircuitBreaker$CheckIntervalData } from '../../../../../org/apache/commons/lang3/concurrent/EventCountCircuitBreaker$CheckIntervalData.d.ts'
export abstract class EventCountCircuitBreaker$AbstractStateStrategy extends Object {
    private constructor()
    fetchCheckInterval(arg0: EventCountCircuitBreaker): number;
    isCheckIntervalFinished(arg0: EventCountCircuitBreaker, arg1: EventCountCircuitBreaker$CheckIntervalData, arg2: number): boolean;
    isStateTransition(arg0: EventCountCircuitBreaker, arg1: EventCountCircuitBreaker$CheckIntervalData, arg2: EventCountCircuitBreaker$CheckIntervalData): boolean;
}