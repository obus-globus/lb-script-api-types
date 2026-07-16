import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
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
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): MinimapHudComponent$ExtraElement$Placement;
    static values(): MinimapHudComponent$ExtraElement$Placement[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";
}