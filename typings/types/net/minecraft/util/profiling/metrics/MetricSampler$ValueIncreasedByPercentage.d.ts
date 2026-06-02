import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetricSampler$ThresholdTest } from '../../../../../net/minecraft/util/profiling/metrics/MetricSampler$ThresholdTest.d.ts'
export class MetricSampler$ValueIncreasedByPercentage extends Object implements MetricSampler$ThresholdTest {
    constructor(percentageIncreaseThreshold: number)
    // private percentageIncreaseThreshold: number;
    // private previousValue: number;
    test(value: number): boolean;
}