import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { CPUSampler$Payload } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler$Payload.d.ts'
import type { ProfilerNode } from '../../../../../com/oracle/truffle/tools/profiler/ProfilerNode.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { LongSummaryStatistics } from '../../../../../java/util/LongSummaryStatistics.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CPUSamplerData extends Object {
    constructor(contextIndex: number, context: TruffleContext, threadData: JavaMap<Thread, ProfilerNode<CPUSampler$Payload>[]>, biasStatistics: LongSummaryStatistics, durationStatistics: LongSummaryStatistics, samplesTaken: number, intervalMs: number, missedSamples: number)
    // private biasStatistics: LongSummaryStatistics;
    readonly contextIndex: number;
    // private contextRef: WeakReference<TruffleContext>;
    // private durationStatistics: LongSummaryStatistics;
    // private intervalMs: number;
    // private missedSamples: number;
    // private samplesTaken: number;
    readonly threadData: JavaMap<Thread, ProfilerNode<CPUSampler$Payload>[]>;
    getContext(): TruffleContext;
    getContextIndex(): number;
    getSampleBias(): LongSummaryStatistics;
    getSampleDuration(): LongSummaryStatistics;
    getSampleInterval(): number;
    getSamples(): number;
    getThreadData(): JavaMap<Thread, ProfilerNode<CPUSampler$Payload>[]>;
    missedSamples(): number;
}