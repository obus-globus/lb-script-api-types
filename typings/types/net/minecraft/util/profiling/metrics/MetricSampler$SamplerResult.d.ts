import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MetricSampler$SamplerResult extends Object {
    constructor(firstTick: number, lastTick: number, recording: { [key: string]: any })
    readonly firstTick: number;
    readonly lastTick: number;
    // private recording: { [key: string]: any };
    getFirstTick(): number;
    getLastTick(): number;
    valueAtTick(tick: number): number;
}