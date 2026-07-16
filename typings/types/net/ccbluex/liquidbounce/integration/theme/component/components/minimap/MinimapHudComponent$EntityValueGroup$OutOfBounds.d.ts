import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class MinimapHudComponent$EntityValueGroup$OutOfBounds extends Enum<MinimapHudComponent$EntityValueGroup$OutOfBounds> implements Tagged {
    static ALL: MinimapHudComponent$EntityValueGroup$OutOfBounds;
    static Companion: Tagged$Companion;
    static NONE: MinimapHudComponent$EntityValueGroup$OutOfBounds;
    static getEntries(): MinimapHudComponent$EntityValueGroup$OutOfBounds[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): MinimapHudComponent$EntityValueGroup$OutOfBounds;
    static values(): MinimapHudComponent$EntityValueGroup$OutOfBounds[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NONE" | "ALL";
}