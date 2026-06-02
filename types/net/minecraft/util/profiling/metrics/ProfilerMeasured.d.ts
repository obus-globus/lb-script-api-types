import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetricSampler } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
export interface ProfilerMeasured extends Object{
    profiledMetrics(): MetricSampler[];
}