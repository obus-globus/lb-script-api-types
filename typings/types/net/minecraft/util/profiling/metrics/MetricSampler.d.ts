import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { DoubleSupplier } from '../../../../../java/util/function/DoubleSupplier.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetricCategory } from '../../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
import type { MetricSampler$MetricSamplerBuilder } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$MetricSamplerBuilder.d.ts'
import type { MetricSampler$SamplerResult } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$SamplerResult.d.ts'
import type { MetricSampler$ThresholdTest } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$ThresholdTest.d.ts'
export class MetricSampler extends Object {
    static builder(parammetricName: string, paramcategory: MetricCategory, paramsampler: (param0: Object | null) => number, paramcontext: Object | null): MetricSampler$MetricSamplerBuilder<Object>;
    static create(parammetricName: string, paramcategory: MetricCategory, paramcontext: Object | null, paramsampler: (param0: Object | null) => number): MetricSampler;
    static create(paramname: string, paramcategory: MetricCategory, paramsampler: () => number): MetricSampler;
    constructor(name: string, category: MetricCategory, sampler: () => number, beforeTick: () => void, thresholdTest: MetricSampler$ThresholdTest)
    // private beforeTick: () => void;
    readonly category: MetricCategory;
    // private currentValue: number;
    // private isRunning: boolean;
    readonly name: string;
    // private sampler: () => number;
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
    triggersThreshold(): boolean;
    // private verifyRunning(): void;
}