import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class InventoryRightTabIndex extends Enum<InventoryRightTabIndex> {
    static Armor: InventoryRightTabIndex;
    static Crafting: InventoryRightTabIndex;
    static FullScreen: InventoryRightTabIndex;
    static None: InventoryRightTabIndex;
    static getByName(paramarg0: string): InventoryRightTabIndex;
    static getByName(paramarg0: string, paramarg1: InventoryRightTabIndex): InventoryRightTabIndex;
    static getByValue(paramarg0: number): InventoryRightTabIndex;
    static getByValue(paramarg0: number, paramarg1: InventoryRightTabIndex): InventoryRightTabIndex;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InventoryRightTabIndex;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: InventoryRightTabIndex)
    readonly value: number;
    getValue(): number;
    name(): "None" | "FullScreen" | "Crafting" | "Armor";
}