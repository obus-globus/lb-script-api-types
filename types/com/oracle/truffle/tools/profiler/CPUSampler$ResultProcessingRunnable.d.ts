import type { CPUSampler$MutableSamplerData } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler$MutableSamplerData.d.ts'
import type { CPUSampler$Payload } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler$Payload.d.ts'
import type { ProfilerNode } from '../../../../../com/oracle/truffle/tools/profiler/ProfilerNode.d.ts'
import type { SafepointStackSampler$StackSample } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$StackSample.d.ts'
import type { StackTraceEntry } from '../../../../../com/oracle/truffle/tools/profiler/StackTraceEntry.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CPUSampler$ResultProcessingRunnable extends Object implements Runnable {
    private constructor(null_: CPUSampler$ResultProcessingRunnable)
    // private cancelled: boolean;
    // private addOrUpdateChild(treeNode: ProfilerNode<CPUSampler$Payload>, location: StackTraceEntry): ProfilerNode<CPUSampler$Payload>;
    // private record(sample: SafepointStackSampler$StackSample, threadNode: ProfilerNode<CPUSampler$Payload>, timestamp: number, mutableSamplerData: CPUSampler$MutableSamplerData): void;
    // private recordCompilationInfo(location: StackTraceEntry, payload: CPUSampler$Payload, topOfStack: boolean, timestamp: number): void;
    run(): void;
    // private syntheticOnly(sample: SafepointStackSampler$StackSample): boolean;
}