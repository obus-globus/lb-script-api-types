import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetricCategory } from '../../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
import type { MetricSampler } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
import type { MetricSampler$MetricSamplerBuilder } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$MetricSamplerBuilder.d.ts'
export class MetricsRegistry$AggregatedMetricSampler extends MetricSampler {
    static builder<T extends unknown>(parammetricName: string, paramcategory: MetricCategory, paramsampler: (param0: T) => number, paramcontext: T): MetricSampler$MetricSamplerBuilder<T>;
    static create(paramname: string, paramcategory: MetricCategory, paramsampler: () => number): MetricSampler;
    static createExtractSampler(paramname: string, paramcategory: MetricCategory, paramsampler: () => number): MetricSampler;
    private constructor(name: string, delegates: MetricSampler[])
    // private delegates: MetricSampler[];
    equals(o: Object | null): boolean;
    hashCode(): number;
}