import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Variance extends Enum<Variance> {
    static INVARIANT: Variance;
    static IN_VARIANCE: Variance;
    static OUT_VARIANCE: Variance;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Variance;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: boolean, arg4: boolean, arg5: number)
    // private allowsInPosition: boolean;
    readonly allowsOutPosition: boolean;
    readonly label: string;
    // private superpositionFactor: number;
    getAllowsOutPosition(): boolean;
    getLabel(): string;
    toString(): string;
    name(): "INVARIANT" | "IN_VARIANCE" | "OUT_VARIANCE";
}