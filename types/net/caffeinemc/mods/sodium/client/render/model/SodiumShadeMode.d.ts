import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class SodiumShadeMode extends Enum<SodiumShadeMode> {
    static ENHANCED: SodiumShadeMode;
    static VANILLA: SodiumShadeMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SodiumShadeMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "ENHANCED" | "VANILLA";
}