import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LightMode extends Enum<LightMode> {
    static FLAT: LightMode;
    static SMOOTH: LightMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LightMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "SMOOTH" | "FLAT";
}