import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemDescriptor_InternalType extends Enum<ItemDescriptor_InternalType> {
    static ComplexAlias: ItemDescriptor_InternalType;
    static Default: ItemDescriptor_InternalType;
    static Deferred: ItemDescriptor_InternalType;
    static Invalid: ItemDescriptor_InternalType;
    static ItemTag: ItemDescriptor_InternalType;
    static Molang: ItemDescriptor_InternalType;
    static getByName(paramarg0: string): ItemDescriptor_InternalType;
    static getByName(paramarg0: string, paramarg1: ItemDescriptor_InternalType): ItemDescriptor_InternalType;
    static getByValue(paramarg0: number): ItemDescriptor_InternalType;
    static getByValue(paramarg0: number, paramarg1: ItemDescriptor_InternalType): ItemDescriptor_InternalType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemDescriptor_InternalType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ItemDescriptor_InternalType)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "Default" | "Molang" | "ItemTag" | "Deferred" | "ComplexAlias";
}