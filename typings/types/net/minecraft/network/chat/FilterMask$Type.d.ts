import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { FilterMask } from '../../../../net/minecraft/network/chat/FilterMask.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class FilterMask$Type extends Enum<FilterMask$Type> implements StringRepresentable {
    static FULLY_FILTERED: FilterMask$Type;
    static PARTIALLY_FILTERED: FilterMask$Type;
    static PASS_THROUGH: FilterMask$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FilterMask$Type;
    static values(): FilterMask$Type[];
    private constructor(serializedName: string, codec: () => MapCodec<FilterMask>)
    // private codec: () => MapCodec<FilterMask>;
    readonly serializedName: string;
    // private codec(): MapCodec<FilterMask>;
    getSerializedName(): string;
    name(): "PASS_THROUGH" | "FULLY_FILTERED" | "PARTIALLY_FILTERED";
}