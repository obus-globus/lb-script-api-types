import type { Dimension } from '../../../ai/djl/metric/Dimension.d.ts'
import type { MetricType } from '../../../ai/djl/metric/MetricType.d.ts'
import type { Unit } from '../../../ai/djl/metric/Unit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class Metric extends Object {
    static parse(paramarg0: string): Metric;
    constructor(arg0: string, arg1: MetricType, arg2: Number, arg3: Unit, ...arg4: Dimension[])
    constructor(arg0: string, arg1: Number)
    constructor(arg0: string, arg1: Number, arg2: Unit, ...arg3: Dimension[])
    readonly dimensions: Dimension[];
    readonly metricName: string;
    readonly metricType: MetricType;
    readonly timestamp: string;
    readonly unit: string;
    readonly value: string;
    copyOf(arg0: string): Metric;
    getDimensions(): Dimension[];
    getMetricName(): string;
    getMetricType(): MetricType;
    getTimestamp(): string;
    getUnit(): Unit;
    getValue(): number;
    toString(): string;
}