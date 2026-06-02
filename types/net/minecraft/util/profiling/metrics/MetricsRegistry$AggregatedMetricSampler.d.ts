import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetricCategory } from '../../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
import type { MetricSampler } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
import type { MetricSampler$MetricSamplerBuilder } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$MetricSamplerBuilder.d.ts'
export class MetricsRegistry$AggregatedMetricSampler extends MetricSampler {
    static builder(parammetricName: string, paramcategory: MetricCategory, paramsampler: (param0: Object | null) => kotlin.Double, paramcontext: Object | null): MetricSampler$MetricSamplerBuilder<Object>;
    static create(parammetricName: string, paramcategory: MetricCategory, paramcontext: Object | null, paramsampler: (param0: Object | null) => kotlin.Double): MetricSampler;
    static create(paramname: string, paramcategory: MetricCategory, paramsampler: () => kotlin.Double): MetricSampler;
    private constructor(name: string, delegates: MetricSampler[])
    // private delegates: MetricSampler[];
    equals(o: Object | null): boolean;
    hashCode(): number;
}