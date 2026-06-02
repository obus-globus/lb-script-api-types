import type { MapCodec } from '../../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ItemModel } from '../../../../../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModel$BakingContext } from '../../../../../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { ItemModel$Unbaked } from '../../../../../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { Matrix4fc } from '../../../../../../../../../org/joml/Matrix4fc.d.ts'
export abstract class WrapperUnbakedItemModel extends Object implements ItemModel$Unbaked {
    constructor()
    constructor(arg0: ItemModel$Unbaked)
    // private wrapped: ItemModel$Unbaked;
    bake(arg0: ItemModel$BakingContext, arg1: Matrix4fc): ItemModel;
    resolveDependencies(arg0: ResolvableModel$Resolver): void;
    type(): MapCodec<ItemModel$Unbaked>;
}