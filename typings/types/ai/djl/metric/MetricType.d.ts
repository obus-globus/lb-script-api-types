import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class MetricType extends Enum<MetricType> {
    static COUNTER: MetricType;
    static GAUGE: MetricType;
    static HISTOGRAM: MetricType;
    static of(paramarg0: string): MetricType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MetricType;
    static values(): MetricType[];
    private constructor(arg2: string)
    readonly value: string;
    getValue(): string;
    name(): "COUNTER" | "GAUGE" | "HISTOGRAM";
}