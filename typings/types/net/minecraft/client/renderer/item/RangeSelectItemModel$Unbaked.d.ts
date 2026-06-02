import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModel$BakingContext } from '../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { RangeSelectItemModel$Entry } from '../../../../../net/minecraft/client/renderer/item/RangeSelectItemModel$Entry.d.ts'
import type { RangeSelectItemModelProperty } from '../../../../../net/minecraft/client/renderer/item/properties/numeric/RangeSelectItemModelProperty.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class RangeSelectItemModel$Unbaked extends Record implements ItemModel$Unbaked {
    static MAP_CODEC: MapCodec<RangeSelectItemModel$Unbaked>;
    // private entries: RangeSelectItemModel$Entry[];
    // private fallback: Optional<ItemModel$Unbaked>;
    // private property: RangeSelectItemModelProperty;
    // private scale: number;
    // private transformation: Optional<Transformation>;
    bake(context: ItemModel$BakingContext, transformation: Matrix4fc): ItemModel;
    entries(): RangeSelectItemModel$Entry[];
    equals(o: Object | null): boolean;
    fallback(): Optional<ItemModel$Unbaked>;
    hashCode(): number;
    property(): RangeSelectItemModelProperty;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    scale(): number;
    toString(): string;
    transformation(): Optional<Transformation>;
    type(): MapCodec<RangeSelectItemModel$Unbaked>;
}