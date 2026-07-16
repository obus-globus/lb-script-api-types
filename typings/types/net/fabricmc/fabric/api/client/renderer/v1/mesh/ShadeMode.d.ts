import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ShadeMode extends Enum<ShadeMode> {
    static ENHANCED: ShadeMode;
    static VANILLA: ShadeMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ShadeMode;
    static values(): ShadeMode[];
    private constructor()
    name(): "ENHANCED" | "VANILLA";
}