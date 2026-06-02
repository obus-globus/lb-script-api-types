import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StuckInBodyLayer$PlacementStyle extends Enum<StuckInBodyLayer$PlacementStyle> {
    static IN_CUBE: StuckInBodyLayer$PlacementStyle;
    static ON_SURFACE: StuckInBodyLayer$PlacementStyle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StuckInBodyLayer$PlacementStyle;
    static values(): (Object | null)[];
    private constructor()
    name(): "IN_CUBE" | "ON_SURFACE";
}