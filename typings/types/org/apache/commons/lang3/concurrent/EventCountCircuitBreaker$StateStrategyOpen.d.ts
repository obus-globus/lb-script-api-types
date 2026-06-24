import type { EventCountCircuitBreaker$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { EventCountCircuitBreaker } from '../../../../../org/apache/commons/lang3/concurrent/EventCountCircuitBreaker.d.ts'
import type { EventCountCircuitBreaker$AbstractStateStrategy } from '../../../../../org/apache/commons/lang3/concurrent/EventCountCircuitBreaker$AbstractStateStrategy.d.ts'
import type { EventCountCircuitBreaker$CheckIntervalData } from '../../../../../org/apache/commons/lang3/concurrent/EventCountCircuitBreaker$CheckIntervalData.d.ts'
export class EventCountCircuitBreaker$StateStrategyOpen extends EventCountCircuitBreaker$AbstractStateStrategy {
    private constructor()
    constructor(arg0: EventCountCircuitBreaker$1)
    fetchCheckInterval(arg0: EventCountCircuitBreaker): number;
    isStateTransition(arg0: EventCountCircuitBreaker, arg1: EventCountCircuitBreaker$CheckIntervalData, arg2: EventCountCircuitBreaker$CheckIntervalData): boolean;
}