import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LightMode extends Enum<LightMode> {
    static FLAT: LightMode;
    static SMOOTH: LightMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LightMode;
    static values(): LightMode[];
    private constructor()
    name(): "SMOOTH" | "FLAT";
}