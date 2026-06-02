import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class XavierInitializer$RandomType extends Enum<XavierInitializer$RandomType> {
    static GAUSSIAN: XavierInitializer$RandomType;
    static UNIFORM: XavierInitializer$RandomType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): XavierInitializer$RandomType;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNIFORM" | "GAUSSIAN";
}