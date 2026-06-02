import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class MinimapHudComponent$ExtraElement$Placement extends Enum<MinimapHudComponent$ExtraElement$Placement> implements Tagged {
    static BOTTOM_LEFT: MinimapHudComponent$ExtraElement$Placement;
    static BOTTOM_RIGHT: MinimapHudComponent$ExtraElement$Placement;
    static Companion: Tagged$Companion;
    static TOP_LEFT: MinimapHudComponent$ExtraElement$Placement;
    static TOP_RIGHT: MinimapHudComponent$ExtraElement$Placement;
    static getEntries(): MinimapHudComponent$ExtraElement$Placement[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MinimapHudComponent$ExtraElement$Placement;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";
}