import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class MinimapHudComponent$EntityValueGroup$OutOfBounds extends Enum<MinimapHudComponent$EntityValueGroup$OutOfBounds> implements Tagged {
    static ALL: MinimapHudComponent$EntityValueGroup$OutOfBounds;
    static Companion: Tagged$Companion;
    static NONE: MinimapHudComponent$EntityValueGroup$OutOfBounds;
    static getEntries(): MinimapHudComponent$EntityValueGroup$OutOfBounds[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MinimapHudComponent$EntityValueGroup$OutOfBounds;
    static values(): MinimapHudComponent$EntityValueGroup$OutOfBounds[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NONE" | "ALL";
}