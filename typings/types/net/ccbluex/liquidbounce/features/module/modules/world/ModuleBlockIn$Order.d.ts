import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class ModuleBlockIn$Order extends Enum<ModuleBlockIn$Order> implements Tagged {
    static BottomTop: ModuleBlockIn$Order;
    static Companion: Tagged$Companion;
    static Normal: ModuleBlockIn$Order;
    static Random: ModuleBlockIn$Order;
    static TopBottom: ModuleBlockIn$Order;
    static getEntries(): ModuleBlockIn$Order[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleBlockIn$Order;
    static values(): ModuleBlockIn$Order[];
    private constructor(tag: string)
    readonly tag: string;
    positions(): BlockPos[];
    name(): "Normal" | "Random" | "BottomTop" | "TopBottom";
}