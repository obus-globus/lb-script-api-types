import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventCountCircuitBreaker$CheckIntervalData extends Object {
    constructor(arg0: number, arg1: number)
    readonly checkIntervalStart: number;
    readonly eventCount: number;
    getCheckIntervalStart(): number;
    getEventCount(): number;
    increment(arg0: number): EventCountCircuitBreaker$CheckIntervalData;
}