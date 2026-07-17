import type { Class } from '../../../../../../../java/lang/Class.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): SneakHeights;
    static values(): SneakHeights[];
    private constructor(tag: string, dimensions: EntityDimensions)
    readonly dimensions: EntityDimensions;
    readonly tag: string;
    name(): "ONEEIGHT" | "ONENINE" | "ONEFIFTEEN";
}