import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class XavierInitializer$FactorType extends Enum<XavierInitializer$FactorType> {
    static AVG: XavierInitializer$FactorType;
    static IN: XavierInitializer$FactorType;
    static OUT: XavierInitializer$FactorType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): XavierInitializer$FactorType;
    static values(): XavierInitializer$FactorType[];
    private constructor()
    name(): "AVG" | "IN" | "OUT";
}