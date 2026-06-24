import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetricCategory } from '../../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
import type { MetricSampler$MetricSamplerBuilder } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$MetricSamplerBuilder.d.ts'
import type { MetricSampler$SamplerResult } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$SamplerResult.d.ts'
import type { MetricSampler$SamplingPhase } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$SamplingPhase.d.ts'
import type { MetricSampler$ThresholdTest } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$ThresholdTest.d.ts'
export class MetricSampler extends Object {
    static builder(parammetricName: string, paramcategory: MetricCategory, paramsampler: (param0: Object | null) => number, paramcontext: Object | null): MetricSampler$MetricSamplerBuilder<Object>;
    static create(paramname: string, paramcategory: MetricCategory, paramsampler: () => number): MetricSampler;
    static createExtractSampler(paramname: string, paramcategory: MetricCategory, paramsampler: () => number): MetricSampler;
    constructor(name: string, samplingPhase: MetricSampler$SamplingPhase, category: MetricCategory, sampler: () => number, beforeTick: () => void, thresholdTest: MetricSampler$ThresholdTest)
    // private beforeTick: () => void;
    readonly category: MetricCategory;
    // private currentValue: number;
    // private isRunning: boolean;
    readonly name: string;
    readonly sampler: () => number;
    // private samplingPhase: MetricSampler$SamplingPhase;
    // private thresholdTest: MetricSampler$ThresholdTest;
    // private ticks: ByteBuf;
    // private values: ByteBuf;
    equals(o: Object | null): boolean;
    getCategory(): MetricCategory;
    getName(): string;
    getSampler(): () => number;
    hashCode(): number;
    onEndTick(currentTick: number): void;
    onFinished(): void;
    onStartTick(): void;
    result(): MetricSampler$SamplerResult;
    samplingPhase(): MetricSampler$SamplingPhase;
    triggersThreshold(): boolean;
    // private verifyRunning(): void;
}