import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemTintSource } from '../../../../../net/minecraft/client/color/item/ItemTintSource.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModel$BakingContext } from '../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class CuboidItemModelWrapper$Unbaked extends Record implements ItemModel$Unbaked {
    static MAP_CODEC: MapCodec<CuboidItemModelWrapper$Unbaked>;
    constructor(model: Identifier, transformation: Optional<Transformation>, tints: ItemTintSource[])
    // private model: Identifier;
    // private tints: ItemTintSource[];
    // private transformation: Optional<Transformation>;
    bake(context: ItemModel$BakingContext, transformation: Matrix4fc): ItemModel;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): Identifier;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    tints(): ItemTintSource[];
    toString(): string;
    transformation(): Optional<Transformation>;
    type(): MapCodec<CuboidItemModelWrapper$Unbaked>;
}