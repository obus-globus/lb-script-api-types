import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { SafepointStackSampler$StackSample } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$StackSample.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CPUSampler$SamplingResult extends Object {
    constructor(samples: SafepointStackSampler$StackSample[], context: TruffleContext, startTime: number)
    // private context: TruffleContext;
    // private samples: SafepointStackSampler$StackSample[];
    // private startTime: number;
}