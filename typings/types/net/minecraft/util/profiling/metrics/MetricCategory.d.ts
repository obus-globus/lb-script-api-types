import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MetricCategory extends Enum<MetricCategory> {
    static CHUNK_RENDERING: MetricCategory;
    static CHUNK_RENDERING_DISPATCHING: MetricCategory;
    static CONSECUTIVE_EXECUTORS: MetricCategory;
    static CPU: MetricCategory;
    static EVENT_LOOPS: MetricCategory;
    static GPU: MetricCategory;
    static JVM: MetricCategory;
    static PATH_FINDING: MetricCategory;
    static TICK_LOOP: MetricCategory;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MetricCategory;
    static values(): MetricCategory[];
    private constructor(description: string)
    readonly description: string;
    getDescription(): string;
    name(): "PATH_FINDING" | "EVENT_LOOPS" | "CONSECUTIVE_EXECUTORS" | "TICK_LOOP" | "JVM" | "CHUNK_RENDERING" | "CHUNK_RENDERING_DISPATCHING" | "CPU" | "GPU";
}