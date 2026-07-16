import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class XavierInitializer$RandomType extends Enum<XavierInitializer$RandomType> {
    static GAUSSIAN: XavierInitializer$RandomType;
    static UNIFORM: XavierInitializer$RandomType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): XavierInitializer$RandomType;
    static values(): XavierInitializer$RandomType[];
    private constructor()
    name(): "UNIFORM" | "GAUSSIAN";
}