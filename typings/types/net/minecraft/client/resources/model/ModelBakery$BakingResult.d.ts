import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BakedModelsHooks } from '../../../../../net/fabricmc/fabric/impl/client/model/loading/BakedModelsHooks.d.ts'
import type { BlockStateModel } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { ClientItem$Properties } from '../../../../../net/minecraft/client/renderer/item/ClientItem$Properties.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ModelBakery$MissingModels } from '../../../../../net/minecraft/client/resources/model/ModelBakery$MissingModels.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModelBakery$BakingResult extends Record implements BakedModelsHooks {
    constructor(missingModels: ModelBakery$MissingModels, blockStateModels: Map<BlockState, BlockStateModel>, itemStackModels: Map<Identifier, ItemModel>, itemProperties: Map<Identifier, ClientItem$Properties>)
    // private blockStateModels: Map<BlockState, BlockStateModel>;
    // private extraModels: Map<Object | null, Object | null>;
    // private itemProperties: Map<Identifier, ClientItem$Properties>;
    // private itemStackModels: Map<Identifier, ItemModel>;
    // private missingModels: ModelBakery$MissingModels;
    blockStateModels(): Map<BlockState, BlockStateModel>;
    equals(o: Object | null): boolean;
    fabric_getExtraModels(): Map<Object | null, Object | null>;
    fabric_setExtraModels(arg0: Map<Object | null, Object | null>): void;
    getBlockStateModel(blockState: BlockState): BlockStateModel;
    hashCode(): number;
    itemProperties(): Map<Identifier, ClientItem$Properties>;
    itemStackModels(): Map<Identifier, ItemModel>;
    missingModels(): ModelBakery$MissingModels;
    toString(): string;
}