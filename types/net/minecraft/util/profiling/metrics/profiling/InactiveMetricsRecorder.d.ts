import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProfilerFiller } from '../../../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { MetricsRecorder } from '../../../../../../net/minecraft/util/profiling/metrics/profiling/MetricsRecorder.d.ts'
export class InactiveMetricsRecorder extends Object implements MetricsRecorder {
    static INSTANCE: MetricsRecorder;
    constructor()
    cancel(): void;
    end(): void;
    endTick(): void;
    getProfiler(): ProfilerFiller;
    isRecording(): boolean;
    startTick(): void;
}