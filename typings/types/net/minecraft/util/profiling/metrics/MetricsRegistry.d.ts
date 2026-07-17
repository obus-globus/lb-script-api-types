import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetricSampler } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
import type { ProfilerMeasured } from '../../../../../net/minecraft/util/profiling/metrics/ProfilerMeasured.d.ts'
export class MetricsRegistry extends Object {
    static INSTANCE: MetricsRegistry;
    private constructor()
    // private measuredInstances: JavaMap<ProfilerMeasured, void>;
    add(profilerMeasured: ProfilerMeasured): void;
    getRegisteredSamplers(): MetricSampler[];
}