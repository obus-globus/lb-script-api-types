import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FishingHook$OpenWaterType extends Enum<FishingHook$OpenWaterType> {
    static ABOVE_WATER: FishingHook$OpenWaterType;
    static INSIDE_WATER: FishingHook$OpenWaterType;
    static INVALID: FishingHook$OpenWaterType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FishingHook$OpenWaterType;
    static values(): FishingHook$OpenWaterType[];
    private constructor()
    name(): "ABOVE_WATER" | "INSIDE_WATER" | "INVALID";
}