import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProfilerFiller } from '../../../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export interface MetricsRecorder extends Object{
    cancel(): void;
    end(): void;
    endTick(): void;
    getProfiler(): ProfilerFiller;
    isRecording(): boolean;
    sampleDuringExtract(): void;
    startTick(): void;
}