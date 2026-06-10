import type { LongSupplier } from '../../../../java/util/function/LongSupplier.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelRenderer } from '../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { ProfileCollector } from '../../../../net/minecraft/util/profiling/ProfileCollector.d.ts'
import type { MetricSampler } from '../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
import type { MetricsSamplerProvider } from '../../../../net/minecraft/util/profiling/metrics/MetricsSamplerProvider.d.ts'
import type { ProfilerSamplerAdapter } from '../../../../net/minecraft/util/profiling/metrics/profiling/ProfilerSamplerAdapter.d.ts'
export class ClientMetricsSamplersProvider extends Object implements MetricsSamplerProvider {
    constructor(wallTimeSource: () => number, levelRenderer: LevelRenderer)
    // private levelRenderer: LevelRenderer;
    // private samplerFactory: ProfilerSamplerAdapter;
    // private samplers: MetricSampler[];
    // private registerStaticSamplers(): void;
    samplers(singleTickProfiler: () => ProfileCollector): MetricSampler[];
}