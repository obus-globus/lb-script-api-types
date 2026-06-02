import type { SafepointStackSampler$StackSample } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$StackSample.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SafepointStackSampler$CollectionResult extends Object{
    createSample(submitTime: number): SafepointStackSampler$StackSample;
}