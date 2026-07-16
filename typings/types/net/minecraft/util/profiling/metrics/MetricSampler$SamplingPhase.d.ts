import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MetricSampler$SamplingPhase extends Enum<MetricSampler$SamplingPhase> {
    static END_TICK: MetricSampler$SamplingPhase;
    static EXTRACT: MetricSampler$SamplingPhase;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MetricSampler$SamplingPhase;
    static values(): MetricSampler$SamplingPhase[];
    private constructor()
    name(): "EXTRACT" | "END_TICK";
}