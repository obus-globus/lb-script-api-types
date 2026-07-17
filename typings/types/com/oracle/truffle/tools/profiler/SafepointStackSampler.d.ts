import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { CPUSampler } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler.d.ts'
import type { CPUSampler$MutableSamplerData } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler$MutableSamplerData.d.ts'
import type { SafepointStackSampler$SampleAction } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$SampleAction.d.ts'
import type { SafepointStackSampler$StackSample } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$StackSample.d.ts'
import type { SafepointStackSampler$StackVisitor } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$StackVisitor.d.ts'
import type { SafepointStackSampler$SyntheticFrame } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$SyntheticFrame.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SafepointStackSampler extends Object {
    constructor(stackLimit: number, sourceSectionFilter: SourceSectionFilter)
    // private cachedAction: AtomicReference<SafepointStackSampler$SampleAction>;
    // private includeAsyncStackTrace: boolean;
    // private overflowed: boolean;
    // private sampleIndex: AtomicLong;
    // private sourceSectionFilter: SourceSectionFilter;
    // private stackLimit: number;
    // private stackVisitorCache: SafepointStackSampler$StackVisitor[];
    // private syntheticFrameThreadLocal: ThreadLocal<SafepointStackSampler$SyntheticFrame>;
    // private fetchStackVisitor(): SafepointStackSampler$StackVisitor;
    getSourceSectionFilter(): SourceSectionFilter;
    getStackLimit(): number;
    hasOverflowed(): boolean;
    isIncludeAsyncStackTrace(): boolean;
    popSyntheticFrame(): void;
    pushSyntheticFrame(language: LanguageInfo, message: string): void;
    resetSampling(): void;
    sample(cpuSampler: CPUSampler, env: TruffleInstrument$Env, contexts: JavaMap<TruffleContext, CPUSampler$MutableSamplerData>, useSyntheticFrames: boolean, timeout: number, timeoutUnit: TimeUnit): SafepointStackSampler$StackSample[];
    setIncludeAsyncStackTrace(includeAsyncStackTrace: boolean): void;
    setSourceSectionFilter(sourceSectionFilter: SourceSectionFilter): void;
    setStackLimit(stackLimit: number): void;
}