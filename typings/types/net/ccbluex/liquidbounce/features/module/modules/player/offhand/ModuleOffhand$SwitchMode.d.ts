import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { InventoryAction$Click } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction$Click.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class ModuleOffhand$SwitchMode extends Enum<ModuleOffhand$SwitchMode> implements Tagged {
    static AUTOMATIC: ModuleOffhand$SwitchMode;
    static Companion: Tagged$Companion;
    static PICKUP: ModuleOffhand$SwitchMode;
    static SMART: ModuleOffhand$SwitchMode;
    static SWITCH: ModuleOffhand$SwitchMode;
    static getEntries(): ModuleOffhand$SwitchMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleOffhand$SwitchMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    performSwitch(from: ItemSlot): InventoryAction$Click[];
    name(): "SMART" | "SWITCH" | "PICKUP" | "AUTOMATIC";
}