import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Dimension } from '../../../ai/djl/metric/Dimension.d.ts'
import type { Metric } from '../../../ai/djl/metric/Metric.d.ts'
import type { Unit } from '../../../ai/djl/metric/Unit.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class Metrics extends Object {
    constructor()
    readonly limit: number;
    // private metrics: JavaMap<string, Metric[]>;
    readonly onLimit: (param0: Metrics, param1: string) => void;
    addMetric(arg0: Metric): void;
    addMetric(arg0: string, arg1: Number): void;
    addMetric(arg0: string, arg1: Number, arg2: Unit, ...arg3: Dimension[]): void;
    getMetric(arg0: string): Metric[];
    getMetricNames(): string[];
    hasMetric(arg0: string): boolean;
    latestMetric(arg0: string): Metric;
    mean(arg0: string): number;
    percentile(arg0: string, arg1: number): Metric;
    setLimit(arg0: number): void;
    setOnLimit(arg0: (param0: Metrics, param1: string) => void): void;
}