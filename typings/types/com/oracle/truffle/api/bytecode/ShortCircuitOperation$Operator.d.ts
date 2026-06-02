import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ShortCircuitOperation$Operator extends Enum<ShortCircuitOperation$Operator> {
    static AND_RETURN_CONVERTED: ShortCircuitOperation$Operator;
    static AND_RETURN_VALUE: ShortCircuitOperation$Operator;
    static OR_RETURN_CONVERTED: ShortCircuitOperation$Operator;
    static OR_RETURN_VALUE: ShortCircuitOperation$Operator;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ShortCircuitOperation$Operator;
    static values(): (Object | null)[];
    private constructor()
    name(): "AND_RETURN_VALUE" | "AND_RETURN_CONVERTED" | "OR_RETURN_VALUE" | "OR_RETURN_CONVERTED";
}