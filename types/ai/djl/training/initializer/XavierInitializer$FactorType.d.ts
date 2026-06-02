import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class XavierInitializer$FactorType extends Enum<XavierInitializer$FactorType> {
    static AVG: XavierInitializer$FactorType;
    static IN: XavierInitializer$FactorType;
    static OUT: XavierInitializer$FactorType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): XavierInitializer$FactorType;
    static values(): (Object | null)[];
    private constructor()
    name(): "AVG" | "IN" | "OUT";
}