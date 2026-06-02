import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ComplexInventoryTransaction_Type extends Enum<ComplexInventoryTransaction_Type> {
    static InventoryMismatch: ComplexInventoryTransaction_Type;
    static ItemReleaseTransaction: ComplexInventoryTransaction_Type;
    static ItemUseOnEntityTransaction: ComplexInventoryTransaction_Type;
    static ItemUseTransaction: ComplexInventoryTransaction_Type;
    static NormalTransaction: ComplexInventoryTransaction_Type;
    static getByName(paramarg0: string): ComplexInventoryTransaction_Type;
    static getByName(paramarg0: string, paramarg1: ComplexInventoryTransaction_Type): ComplexInventoryTransaction_Type;
    static getByValue(paramarg0: number): ComplexInventoryTransaction_Type;
    static getByValue(paramarg0: number, paramarg1: ComplexInventoryTransaction_Type): ComplexInventoryTransaction_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ComplexInventoryTransaction_Type;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ComplexInventoryTransaction_Type)
    readonly value: number;
    getValue(): number;
    name(): "NormalTransaction" | "InventoryMismatch" | "ItemUseTransaction" | "ItemUseOnEntityTransaction" | "ItemReleaseTransaction";
}