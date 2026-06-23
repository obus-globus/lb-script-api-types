import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { LongSupplier } from '../../../../../../java/util/function/LongSupplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContinuousProfiler } from '../../../../../../net/minecraft/util/profiling/ContinuousProfiler.d.ts'
import type { ProfileCollector } from '../../../../../../net/minecraft/util/profiling/ProfileCollector.d.ts'
import type { ProfileResults } from '../../../../../../net/minecraft/util/profiling/ProfileResults.d.ts'
import type { ProfilerFiller } from '../../../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { MetricSampler } from '../../../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
import type { MetricsSamplerProvider } from '../../../../../../net/minecraft/util/profiling/metrics/MetricsSamplerProvider.d.ts'
import type { MetricsRecorder } from '../../../../../../net/minecraft/util/profiling/metrics/profiling/MetricsRecorder.d.ts'
import type { MetricsPersister } from '../../../../../../net/minecraft/util/profiling/metrics/storage/MetricsPersister.d.ts'
import type { RecordedDeviation } from '../../../../../../net/minecraft/util/profiling/metrics/storage/RecordedDeviation.d.ts'
export class ActiveMetricsRecorder extends Object implements MetricsRecorder {
    static PROFILING_MAX_DURATION_SECONDS: number;
    static createStarted(parammetricsSamplerProvider: MetricsSamplerProvider, paramtimeSource: () => number, paramioExecutor: Executor, parammetricsPersister: MetricsPersister, paramonProfilingEnd: (param0: ProfileResults) => void, paramonReportFinished: (param0: Path[][]) => void): ActiveMetricsRecorder;
    static registerGlobalCompletionCallback(paramonFinished: (param0: Path[][]) => void): void;
    private constructor(metricsSamplerProvider: MetricsSamplerProvider, timeSource: () => number, ioExecutor: Executor, metricsPersister: MetricsPersister, onProfilingEnd: (param0: ProfileResults) => void, onReportFinished: (param0: Path[]) => void)
    // private currentTick: number;
    // private deadlineNano: number;
    // private deviationsBySampler: Map<MetricSampler, RecordedDeviation[]>;
    // private ioExecutor: Executor;
    // private killSwitch: boolean;
    // private metricsPersister: MetricsPersister;
    // private metricsSamplerProvider: MetricsSamplerProvider;
    // private onProfilingEnd: (param0: ProfileResults) => void;
    // private onReportFinished: (param0: Path[]) => void;
    // private singleTickProfiler: ProfileCollector;
    // private taskProfiler: ContinuousProfiler;
    // private thisTickSamplers: MetricSampler[];
    // private wallTimeSource: () => number;
    cancel(): void;
    // private cleanup(metricSamplers: MetricSampler[]): void;
    end(): void;
    endTick(): void;
    getProfiler(): ProfilerFiller;
    isRecording(): boolean;
    // private scheduleSaveResults(profilerResults: ProfileResults): void;
    startTick(): void;
    // private verifyStarted(): void;
}