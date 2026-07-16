import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoRod$Ignore extends Enum<ModuleAutoRod$Ignore> implements BooleanSupplier, Tagged {
    static Companion: Tagged$Companion;
    static HOLDING_CONSUMABLE: ModuleAutoRod$Ignore;
    static OPEN_INVENTORY: ModuleAutoRod$Ignore;
    static USING_ITEM: ModuleAutoRod$Ignore;
    static getEntries(): ModuleAutoRod$Ignore[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoRod$Ignore;
    static values(): ModuleAutoRod$Ignore[];
    private constructor(tag: string)
    readonly tag: string;
    getAsBoolean(): boolean;
    name(): "OPEN_INVENTORY" | "USING_ITEM" | "HOLDING_CONSUMABLE";
}