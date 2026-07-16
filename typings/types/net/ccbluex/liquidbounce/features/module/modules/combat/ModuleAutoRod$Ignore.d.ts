import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoRod$Ignore extends Enum<ModuleAutoRod$Ignore> implements BooleanSupplier, Tagged {
    static Companion: Tagged$Companion;
    static HOLDING_CONSUMABLE: ModuleAutoRod$Ignore;
    static OPEN_INVENTORY: ModuleAutoRod$Ignore;
    static USING_ITEM: ModuleAutoRod$Ignore;
    static getEntries(): ModuleAutoRod$Ignore[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAutoRod$Ignore;
    static values(): ModuleAutoRod$Ignore[];
    private constructor(tag: string)
    readonly tag: string;
    getAsBoolean(): boolean;
    name(): "OPEN_INVENTORY" | "USING_ITEM" | "HOLDING_CONSUMABLE";
}