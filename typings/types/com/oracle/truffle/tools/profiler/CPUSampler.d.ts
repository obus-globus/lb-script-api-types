import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { CPUSampler$MutableSamplerData } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler$MutableSamplerData.d.ts'
import type { CPUSampler$ProcessSampleListener } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler$ProcessSampleListener.d.ts'
import type { CPUSampler$ResultProcessingRunnable } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler$ResultProcessingRunnable.d.ts'
import type { CPUSampler$SamplingResult } from '../../../../../com/oracle/truffle/tools/profiler/CPUSampler$SamplingResult.d.ts'
import type { CPUSamplerData } from '../../../../../com/oracle/truffle/tools/profiler/CPUSamplerData.d.ts'
import type { SafepointStackSampler } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler.d.ts'
import type { StackTraceEntry } from '../../../../../com/oracle/truffle/tools/profiler/StackTraceEntry.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Engine } from '../../../../../org/graalvm/polyglot/Engine.d.ts'
export class CPUSampler extends Object implements Closeable {
    static find(paramengine: Engine): CPUSampler;
    constructor(env: TruffleInstrument$Env)
    // private activeContexts: JavaMap<TruffleContext, number>;
    // private closed: boolean;
    readonly collecting: boolean;
    readonly delay: number;
    // private env: TruffleInstrument$Env;
    readonly gatherSelfHitTimes: boolean;
    // private nextContextIndex: number;
    readonly period: number;
    // private processSampleListeners: (param0: TruffleContext) => void[];
    // private processingExecutionService: ExecutorService;
    // private processingThreadFuture: Future<Object>;
    // private processingThreadRunnable: CPUSampler$ResultProcessingRunnable;
    // private resultsToProcess: CPUSampler$SamplingResult[];
    // private safepointStackSampler: SafepointStackSampler;
    readonly sampleContextInitialization: boolean;
    // private samplerData: CPUSampler$MutableSamplerData[];
    // private samplerExecutionService: ScheduledExecutorService;
    // private samplerFuture: Future<Object>;
    addProcessSampleListener(listener: (param0: TruffleContext) => void): void;
    // private cleanup(): void;
    clearData(): void;
    close(): void;
    // private contexts(): TruffleContext[];
    // private enterChangeConfig(): void;
    getData(): JavaMap<TruffleContext, CPUSamplerData>;
    getDataList(): CPUSamplerData[];
    getDelay(): number;
    getFilter(): SourceSectionFilter;
    getPeriod(): number;
    getStackLimit(): number;
    hasData(): boolean;
    hasStackOverflowed(): boolean;
    isCollecting(): boolean;
    isGatherAsyncStackTrace(): boolean;
    isGatherSelfHitTimes(): boolean;
    // private resetSampling(): void;
    setCollecting(collecting: boolean): void;
    setDelay(delay: number): void;
    setFilter(filter: SourceSectionFilter): void;
    setGatherAsyncStackTrace(asyncStackTrace: boolean): void;
    setGatherSelfHitTimes(gatherSelfHitTimes: boolean): void;
    setPeriod(samplePeriod: number): void;
    setSampleContextInitialization(enabled: boolean): void;
    setStackLimit(stackLimit: number): void;
    takeSample(): JavaMap<Thread, StackTraceEntry[]>;
    takeSample(timeout: number, timeoutUnit: TimeUnit): JavaMap<Thread, StackTraceEntry[]>;
}