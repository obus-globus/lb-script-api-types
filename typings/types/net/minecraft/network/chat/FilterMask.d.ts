import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { FilterMask$Type } from '../../../../net/minecraft/network/chat/FilterMask$Type.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
export class FilterMask extends Object {
    static CODEC: Codec<FilterMask>;
    static FILTERED_STYLE: Style;
    static FULLY_FILTERED: FilterMask;
    static PASS_THROUGH: FilterMask;
    static read(paraminput: FriendlyByteBuf): FilterMask;
    static write(paramoutput: FriendlyByteBuf, parammask: FilterMask): void;
    constructor(length: number)
    // private mask: BitSet;
    // private type: FilterMask$Type;
    apply(text: string): string;
    applyWithFormatting(text: string): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    isFullyFiltered(): boolean;
    // private mask(): BitSet;
    setFiltered(index: number): void;
    // private type(): FilterMask$Type;
}