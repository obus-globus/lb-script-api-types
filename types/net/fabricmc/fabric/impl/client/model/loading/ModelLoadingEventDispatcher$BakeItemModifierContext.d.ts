import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelModifier$AfterBakeItem$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$AfterBakeItem$Context.d.ts'
import type { ModelModifier$BeforeBakeItem$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$BeforeBakeItem$Context.d.ts'
import type { ItemModel$BakingContext } from '../../../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { ItemModel$Unbaked } from '../../../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Matrix4fc } from '../../../../../../../org/joml/Matrix4fc.d.ts'
export class ModelLoadingEventDispatcher$BakeItemModifierContext extends Object implements ModelModifier$AfterBakeItem$Context, ModelModifier$BeforeBakeItem$Context {
    private constructor(arg0: Identifier, arg1: ItemModel$BakingContext, arg2: Matrix4fc)
    // private bakeContext: ItemModel$BakingContext;
    // private itemId: Identifier;
    // private sourceModel: ItemModel$Unbaked;
    // private transformation: Matrix4fc;
    bakingContext(): ItemModel$BakingContext;
    itemId(): Identifier;
    // private prepareAfterBake(arg0: ItemModel$Unbaked): void;
    sourceModel(): ItemModel$Unbaked;
    transformation(): Matrix4fc;
}