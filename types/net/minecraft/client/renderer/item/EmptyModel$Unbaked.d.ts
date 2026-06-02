import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModel$BakingContext } from '../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class EmptyModel$Unbaked extends Record implements ItemModel$Unbaked {
    static MAP_CODEC: MapCodec<EmptyModel$Unbaked>;
    constructor()
    bake(context: ItemModel$BakingContext, transformation: Matrix4fc): ItemModel;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    toString(): string;
    type(): MapCodec<EmptyModel$Unbaked>;
}