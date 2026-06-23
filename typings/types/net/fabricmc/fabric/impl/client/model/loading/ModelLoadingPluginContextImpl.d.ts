import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockStateResolver } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/BlockStateResolver.d.ts'
import type { BlockStateResolver$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/BlockStateResolver$Context.d.ts'
import type { ExtraModelKey } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ExtraModelKey.d.ts'
import type { ModelLoadingPlugin$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelLoadingPlugin$Context.d.ts'
import type { ModelModifier$AfterBakeBlock } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$AfterBakeBlock.d.ts'
import type { ModelModifier$AfterBakeBlock$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$AfterBakeBlock$Context.d.ts'
import type { ModelModifier$AfterBakeItem } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$AfterBakeItem.d.ts'
import type { ModelModifier$AfterBakeItem$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$AfterBakeItem$Context.d.ts'
import type { ModelModifier$BeforeBakeBlock } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$BeforeBakeBlock.d.ts'
import type { ModelModifier$BeforeBakeBlock$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$BeforeBakeBlock$Context.d.ts'
import type { ModelModifier$BeforeBakeItem } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$BeforeBakeItem.d.ts'
import type { ModelModifier$BeforeBakeItem$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$BeforeBakeItem$Context.d.ts'
import type { ModelModifier$OnLoad } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$OnLoad.d.ts'
import type { ModelModifier$OnLoad$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$OnLoad$Context.d.ts'
import type { ModelModifier$OnLoadBlock } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$OnLoadBlock.d.ts'
import type { ModelModifier$OnLoadBlock$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$OnLoadBlock$Context.d.ts'
import type { UnbakedExtraModel } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/UnbakedExtraModel.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { BlockStateModel } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { ItemModel } from '../../../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ItemModel$Unbaked } from '../../../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { UnbakedModel } from '../../../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ModelLoadingPluginContextImpl extends Object implements ModelLoadingPlugin$Context {
    constructor()
    // private afterBakeBlockModifiers: Event<(param0: BlockStateModel, param1: ModelModifier$AfterBakeBlock$Context) => BlockStateModel>;
    // private afterBakeItemModifiers: Event<(param0: ItemModel, param1: ModelModifier$AfterBakeItem$Context) => ItemModel>;
    // private beforeBakeBlockModifiers: Event<(param0: BlockStateModel$UnbakedRoot, param1: ModelModifier$BeforeBakeBlock$Context) => BlockStateModel$UnbakedRoot>;
    // private beforeBakeItemModifiers: Event<(param0: ItemModel$Unbaked, param1: ModelModifier$BeforeBakeItem$Context) => ItemModel$Unbaked>;
    // private blockStateResolvers: Map<Block, (param0: BlockStateResolver$Context) => void>;
    // private extraModels: Map<ExtraModelKey<Object>, UnbakedExtraModel<Object>>;
    // private onLoadBlockModifiers: Event<(param0: BlockStateModel$UnbakedRoot, param1: ModelModifier$OnLoadBlock$Context) => BlockStateModel$UnbakedRoot>;
    // private onLoadModifiers: Event<(param0: UnbakedModel, param1: ModelModifier$OnLoad$Context) => UnbakedModel>;
    addModel<T extends unknown>(arg0: ExtraModelKey<T>, arg1: UnbakedExtraModel<T>): void;
    modifyBlockModelAfterBake(): Event<(param0: BlockStateModel, param1: ModelModifier$AfterBakeBlock$Context) => BlockStateModel>;
    modifyBlockModelBeforeBake(): Event<(param0: BlockStateModel$UnbakedRoot, param1: ModelModifier$BeforeBakeBlock$Context) => BlockStateModel$UnbakedRoot>;
    modifyBlockModelOnLoad(): Event<(param0: BlockStateModel$UnbakedRoot, param1: ModelModifier$OnLoadBlock$Context) => BlockStateModel$UnbakedRoot>;
    modifyItemModelAfterBake(): Event<(param0: ItemModel, param1: ModelModifier$AfterBakeItem$Context) => ItemModel>;
    modifyItemModelBeforeBake(): Event<(param0: ItemModel$Unbaked, param1: ModelModifier$BeforeBakeItem$Context) => ItemModel$Unbaked>;
    modifyModelOnLoad(): Event<(param0: UnbakedModel, param1: ModelModifier$OnLoad$Context) => UnbakedModel>;
    registerBlockStateResolver(arg0: Block, arg1: (param0: BlockStateResolver$Context) => void): void;
}