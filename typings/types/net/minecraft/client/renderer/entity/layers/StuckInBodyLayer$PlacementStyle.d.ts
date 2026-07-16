import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StuckInBodyLayer$PlacementStyle extends Enum<StuckInBodyLayer$PlacementStyle> {
    static IN_CUBE: StuckInBodyLayer$PlacementStyle;
    static ON_SURFACE: StuckInBodyLayer$PlacementStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StuckInBodyLayer$PlacementStyle;
    static values(): StuckInBodyLayer$PlacementStyle[];
    private constructor()
    name(): "IN_CUBE" | "ON_SURFACE";
}