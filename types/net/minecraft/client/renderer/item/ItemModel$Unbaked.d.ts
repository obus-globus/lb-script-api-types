import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModel$BakingContext } from '../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { ResolvableModel } from '../../../../../net/minecraft/client/resources/model/ResolvableModel.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export interface ItemModel$Unbaked extends Object, ResolvableModel{
    bake(context: ItemModel$BakingContext, transformation: Matrix4fc): ItemModel;
    type(): MapCodec<ItemModel$Unbaked>;
}