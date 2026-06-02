import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MetricSampler$SamplerResult extends Object {
    constructor(firstTick: number, lastTick: number, recording: Int2DoubleMap)
    readonly firstTick: number;
    readonly lastTick: number;
    // private recording: Int2DoubleMap;
    getFirstTick(): number;
    getLastTick(): number;
    valueAtTick(tick: number): number;
}