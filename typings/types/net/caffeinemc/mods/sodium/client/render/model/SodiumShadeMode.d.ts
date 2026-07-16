import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class SodiumShadeMode extends Enum<SodiumShadeMode> {
    static ENHANCED: SodiumShadeMode;
    static VANILLA: SodiumShadeMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SodiumShadeMode;
    static values(): SodiumShadeMode[];
    private constructor()
    name(): "ENHANCED" | "VANILLA";
}