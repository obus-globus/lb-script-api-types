import type { Class } from '../../../../../../../java/lang/Class.d.ts'
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
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleBlockIn$Order;
    static values(): ModuleBlockIn$Order[];
    private constructor(tag: string)
    readonly tag: string;
    positions(): BlockPos[];
    name(): "Normal" | "Random" | "BottomTop" | "TopBottom";
}