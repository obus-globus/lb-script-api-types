import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MetricSampler$SamplingPhase extends Enum<MetricSampler$SamplingPhase> {
    static END_TICK: MetricSampler$SamplingPhase;
    static EXTRACT: MetricSampler$SamplingPhase;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MetricSampler$SamplingPhase;
    static values(): (Object | null)[];
    private constructor()
    name(): "EXTRACT" | "END_TICK";
}