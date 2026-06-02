import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FluidModel } from '../../../../../net/minecraft/client/renderer/block/FluidModel.d.ts'
import type { BlockStateModel } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModelPart } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { MissingItemModel } from '../../../../../net/minecraft/client/renderer/item/MissingItemModel.d.ts'
import type { ModelBaker$Interner } from '../../../../../net/minecraft/client/resources/model/ModelBaker$Interner.d.ts'
import type { ResolvedModel } from '../../../../../net/minecraft/client/resources/model/ResolvedModel.d.ts'
import type { MaterialBaker } from '../../../../../net/minecraft/client/resources/model/sprite/MaterialBaker.d.ts'
export class ModelBakery$MissingModels extends Record {
    static bake(paramunbaked: ResolvedModel, parammaterials: MaterialBaker, paraminterner: ModelBaker$Interner): ModelBakery$MissingModels;
    constructor(blockPart: BlockStateModelPart, block: BlockStateModel, item: MissingItemModel, fluid: FluidModel)
    // private block: BlockStateModel;
    // private blockPart: BlockStateModelPart;
    // private fluid: FluidModel;
    // private item: MissingItemModel;
    block(): BlockStateModel;
    blockPart(): BlockStateModelPart;
    equals(o: Object | null): boolean;
    fluid(): FluidModel;
    hashCode(): number;
    item(): MissingItemModel;
    toString(): string;
}