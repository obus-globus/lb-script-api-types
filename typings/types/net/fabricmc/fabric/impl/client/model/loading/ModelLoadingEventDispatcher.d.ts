import type { Operation } from '../../../../../../../com/llamalad7/mixinextras/injector/wrapoperation/Operation.d.ts'
import type { ThreadLocal } from '../../../../../../../java/lang/ThreadLocal.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockStateResolver } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/BlockStateResolver.d.ts'
import type { BlockStateResolver$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/BlockStateResolver$Context.d.ts'
import type { ExtraModelKey } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ExtraModelKey.d.ts'
import type { ModelLoadingPlugin } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelLoadingPlugin.d.ts'
import type { ModelLoadingPlugin$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelLoadingPlugin$Context.d.ts'
import type { UnbakedExtraModel } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/UnbakedExtraModel.d.ts'
import type { ModelLoadingEventDispatcher$BlockStateResolverContext } from '../../../../../../../net/fabricmc/fabric/impl/client/model/loading/ModelLoadingEventDispatcher$BlockStateResolverContext.d.ts'
import type { ModelLoadingEventDispatcher$OnLoadBlockModifierContext } from '../../../../../../../net/fabricmc/fabric/impl/client/model/loading/ModelLoadingEventDispatcher$OnLoadBlockModifierContext.d.ts'
import type { ModelLoadingEventDispatcher$OnLoadModifierContext } from '../../../../../../../net/fabricmc/fabric/impl/client/model/loading/ModelLoadingEventDispatcher$OnLoadModifierContext.d.ts'
import type { ModelLoadingPluginContextImpl } from '../../../../../../../net/fabricmc/fabric/impl/client/model/loading/ModelLoadingPluginContextImpl.d.ts'
import type { BlockStateModel } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { ItemModel } from '../../../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModel$BakingContext } from '../../../../../../../net/minecraft/client/renderer/item/ItemModel$BakingContext.d.ts'
import type { ItemModel$Unbaked } from '../../../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { BlockStateModelLoader$LoadedModels } from '../../../../../../../net/minecraft/client/resources/model/BlockStateModelLoader$LoadedModels.d.ts'
import type { ModelBaker } from '../../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { UnbakedModel } from '../../../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Matrix4fc } from '../../../../../../../org/joml/Matrix4fc.d.ts'
export class ModelLoadingEventDispatcher extends Object {
    static CURRENT: ThreadLocal<ModelLoadingEventDispatcher>;
    constructor(arg0: (param0: ModelLoadingPlugin$Context) => void[])
    // private blockStateResolverContext: ModelLoadingEventDispatcher$BlockStateResolverContext;
    // private onLoadBlockModifierContext: ModelLoadingEventDispatcher$OnLoadBlockModifierContext;
    // private onLoadModifierContext: ModelLoadingEventDispatcher$OnLoadModifierContext;
    // private pluginContext: ModelLoadingPluginContextImpl;
    getExtraModels(): Map<ExtraModelKey<Object>, UnbakedExtraModel<Object>>;
    modifyBlockModel(arg0: BlockStateModel$UnbakedRoot, arg1: BlockState, arg2: ModelBaker, arg3: (param0: (Object | null)[]) => BlockStateModel): BlockStateModel;
    // private modifyBlockModelOnLoad(arg0: BlockState, arg1: BlockStateModel$UnbakedRoot): BlockStateModel$UnbakedRoot;
    modifyBlockModelsOnLoad(arg0: BlockStateModelLoader$LoadedModels): BlockStateModelLoader$LoadedModels;
    modifyItemModel(arg0: ItemModel$Unbaked, arg1: Identifier, arg2: ItemModel$BakingContext, arg3: Matrix4fc, arg4: (param0: (Object | null)[]) => ItemModel): ItemModel;
    // private modifyModelOnLoad(arg0: Identifier, arg1: UnbakedModel): UnbakedModel;
    modifyModelsOnLoad(arg0: Map<Identifier, UnbakedModel>): Map<Identifier, UnbakedModel>;
    // private putResolvedBlockStates(arg0: Map<BlockState, BlockStateModel$UnbakedRoot>): void;
    // private resolveBlockStates(arg0: (param0: BlockStateResolver$Context) => void, arg1: Block, arg2: (param0: BlockState, param1: BlockStateModel$UnbakedRoot) => void): void;
}