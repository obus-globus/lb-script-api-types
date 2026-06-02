import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class InventorySourceType extends Enum<InventorySourceType> {
    static ContainerInventory: InventorySourceType;
    static CreativeInventory: InventorySourceType;
    static GlobalInventory: InventorySourceType;
    static InvalidInventory: InventorySourceType;
    static NonImplementedFeatureTODO: InventorySourceType;
    static WorldInteraction: InventorySourceType;
    static getByName(paramarg0: string): InventorySourceType;
    static getByName(paramarg0: string, paramarg1: InventorySourceType): InventorySourceType;
    static getByValue(paramarg0: number): InventorySourceType;
    static getByValue(paramarg0: number, paramarg1: InventorySourceType): InventorySourceType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InventorySourceType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: InventorySourceType)
    readonly value: number;
    getValue(): number;
    name(): "InvalidInventory" | "ContainerInventory" | "GlobalInventory" | "WorldInteraction" | "CreativeInventory" | "NonImplementedFeatureTODO";
}