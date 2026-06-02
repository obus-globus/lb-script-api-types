import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class MetricType extends Enum<MetricType> {
    static COUNTER: MetricType;
    static GAUGE: MetricType;
    static HISTOGRAM: MetricType;
    static of(paramarg0: string): MetricType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MetricType;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    readonly value: string;
    getValue(): string;
    name(): "COUNTER" | "GAUGE" | "HISTOGRAM";
}