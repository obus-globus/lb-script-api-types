import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MetricSampler$SamplerResult extends Object {
    constructor(firstTick: number, lastTick: number, recording: JavaMap<any, any>)
    readonly firstTick: number;
    readonly lastTick: number;
    // private recording: JavaMap<any, any>;
    getFirstTick(): number;
    getLastTick(): number;
    valueAtTick(tick: number): number;
}