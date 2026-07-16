import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ParameterNameRenderingPolicy extends Enum<ParameterNameRenderingPolicy> {
    static ALL: ParameterNameRenderingPolicy;
    static NONE: ParameterNameRenderingPolicy;
    static ONLY_NON_SYNTHESIZED: ParameterNameRenderingPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ParameterNameRenderingPolicy;
    static values(): ParameterNameRenderingPolicy[];
    private constructor()
    name(): "ALL" | "ONLY_NON_SYNTHESIZED" | "NONE";
}