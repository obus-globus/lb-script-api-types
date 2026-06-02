import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProfileCollector } from '../../../../../../net/minecraft/util/profiling/ProfileCollector.d.ts'
import type { MetricSampler } from '../../../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
export class ProfilerSamplerAdapter extends Object {
    constructor()
    // private previouslyFoundSamplerNames: string[];
    newSamplersFoundInProfiler(profiler: () => ProfileCollector): MetricSampler[];
}