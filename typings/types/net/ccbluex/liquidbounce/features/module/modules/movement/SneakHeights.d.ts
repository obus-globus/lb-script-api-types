import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EntityDimensions } from '../../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
export class SneakHeights extends Enum<SneakHeights> implements Tagged {
    static Companion: Tagged$Companion;
    static ONEEIGHT: SneakHeights;
    static ONEFIFTEEN: SneakHeights;
    static ONENINE: SneakHeights;
    static getEntries(): SneakHeights[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SneakHeights;
    static values(): (Object | null)[];
    private constructor(tag: string, dimensions: EntityDimensions)
    readonly dimensions: EntityDimensions;
    readonly tag: string;
    name(): "ONEEIGHT" | "ONENINE" | "ONEFIFTEEN";
}