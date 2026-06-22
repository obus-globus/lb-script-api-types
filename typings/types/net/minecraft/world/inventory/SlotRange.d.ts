import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export interface SlotRange extends Object, StringRepresentable{
    getSerializedName(): string;
    size(): number;
    slots(): (Object | null)[];
}