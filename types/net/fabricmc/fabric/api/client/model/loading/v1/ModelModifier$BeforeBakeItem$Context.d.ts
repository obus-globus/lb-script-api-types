import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemModel$BakingContext } from '../../../../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Matrix4fc } from '../../../../../../../../org/joml/Matrix4fc.d.ts'
export interface ModelModifier$BeforeBakeItem$Context extends Object{
    bakingContext(): ItemModel$BakingContext;
    itemId(): Identifier;
    transformation(): Matrix4fc;
}