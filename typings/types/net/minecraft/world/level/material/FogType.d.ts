import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FogType extends Enum<FogType> {
    static ATMOSPHERIC: FogType;
    static LAVA: FogType;
    static NONE: FogType;
    static POWDER_SNOW: FogType;
    static WATER: FogType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FogType;
    static values(): FogType[];
    private constructor()
    name(): "LAVA" | "WATER" | "POWDER_SNOW" | "ATMOSPHERIC" | "NONE";
}