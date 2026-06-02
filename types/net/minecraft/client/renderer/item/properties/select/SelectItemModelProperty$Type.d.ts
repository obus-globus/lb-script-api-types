import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SelectItemModel$UnbakedSwitch } from '../../../../../../../net/minecraft/client/renderer/item/SelectItemModel$UnbakedSwitch.d.ts'
import type { SelectItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/select/SelectItemModelProperty.d.ts'
export class SelectItemModelProperty$Type<P extends SelectItemModelProperty<T>, T extends Object | number | string | boolean> extends Record {
    static create(parampropertyMapCodec: MapCodec<Object>, paramvalueCodec: Codec<Object>): SelectItemModelProperty$Type<Object, Object>;
    static createCasesFieldCodec(paramvalueCodec: Codec<Object>): MapCodec<Object>;
    constructor(switchCodec: MapCodec<SelectItemModel$UnbakedSwitch<P, T>>)
    // private switchCodec: MapCodec<SelectItemModel$UnbakedSwitch<P, T>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    switchCodec(): MapCodec<SelectItemModel$UnbakedSwitch<P, T>>;
    toString(): string;
}