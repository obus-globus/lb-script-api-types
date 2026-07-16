import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class InventorySource_InventorySourceFlags extends Enum<InventorySource_InventorySourceFlags> {
    static NoFlag: InventorySource_InventorySourceFlags;
    static WorldInteractionRandom: InventorySource_InventorySourceFlags;
    static getByName(paramarg0: string): InventorySource_InventorySourceFlags;
    static getByName(paramarg0: string, paramarg1: InventorySource_InventorySourceFlags): InventorySource_InventorySourceFlags;
    static getByValue(paramarg0: number): InventorySource_InventorySourceFlags;
    static getByValue(paramarg0: number, paramarg1: InventorySource_InventorySourceFlags): InventorySource_InventorySourceFlags;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InventorySource_InventorySourceFlags;
    static values(): InventorySource_InventorySourceFlags[];
    private constructor(arg2: number)
    private constructor(arg2: InventorySource_InventorySourceFlags)
    readonly value: number;
    getValue(): number;
    name(): "NoFlag" | "WorldInteractionRandom";
}