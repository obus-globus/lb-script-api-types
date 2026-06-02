import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BooleanParser$Operation extends Enum<BooleanParser$Operation> {
    static AND: BooleanParser$Operation;
    static NOT: BooleanParser$Operation;
    static OPEN: BooleanParser$Operation;
    static OR: BooleanParser$Operation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BooleanParser$Operation;
    static values(): (Object | null)[];
    private constructor()
    compute(arg0: boolean, arg1: boolean[]): boolean;
    name(): "AND" | "OR" | "NOT" | "OPEN";
}