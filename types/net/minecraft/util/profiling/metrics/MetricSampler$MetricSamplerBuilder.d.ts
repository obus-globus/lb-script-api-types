import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetricCategory } from '../../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
import type { MetricSampler } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
import type { MetricSampler$ThresholdTest } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$ThresholdTest.d.ts'
export class MetricSampler$MetricSamplerBuilder<T extends Object | number | string | boolean> extends Object {
    constructor(name: string, category: MetricCategory, sampler: (param0: T) => kotlin.Double, context: T)
    // private beforeTick: () => void;
    // private category: MetricCategory;
    // private context: T;
    // private name: string;
    // private sampler: () => kotlin.Double;
    // private thresholdTest: MetricSampler$ThresholdTest;
    build(): MetricSampler;
    withBeforeTick(beforeTick: (param0: T) => void): MetricSampler$MetricSamplerBuilder<T>;
    withThresholdAlert(thresholdTest: MetricSampler$ThresholdTest): MetricSampler$MetricSamplerBuilder<T>;
}