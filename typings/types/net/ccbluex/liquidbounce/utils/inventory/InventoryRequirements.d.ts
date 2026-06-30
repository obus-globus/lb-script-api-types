import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
export class InventoryRequirements extends Enum<InventoryRequirements> implements Predicate<InventoryAction>, Tagged {
    static Companion: Tagged$Companion;
    static NOT_BREAKING: InventoryRequirements;
    static NOT_DURING_COMBAT: InventoryRequirements;
    static NOT_USING_ITEM: InventoryRequirements;
    static NO_MOVEMENT: InventoryRequirements;
    static NO_ROTATION: InventoryRequirements;
    static OPEN_INVENTORY: InventoryRequirements;
    static getEntries(): InventoryRequirements[];
    static isEqual(paramarg0: Object): (param0: Object | null) => boolean;
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static not(paramarg0: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InventoryRequirements;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    and(arg0: (param0: InventoryAction) => boolean): (param0: InventoryAction) => boolean;
    negate(): (param0: InventoryAction) => boolean;
    or(arg0: (param0: InventoryAction) => boolean): (param0: InventoryAction) => boolean;
    test(action: InventoryAction): boolean;
    name(): "NO_MOVEMENT" | "NO_ROTATION" | "NOT_USING_ITEM" | "NOT_BREAKING" | "NOT_DURING_COMBAT" | "OPEN_INVENTORY";
}