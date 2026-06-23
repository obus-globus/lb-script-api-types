import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { FluidModel } from '../../../../../net/minecraft/client/renderer/block/FluidModel.d.ts'
import type { BlockStateModel } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockModel } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { ModelBakery$BakingResult } from '../../../../../net/minecraft/client/resources/model/ModelBakery$BakingResult.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class ModelManager$ReloadState extends Record {
    private constructor(bakedModels: ModelBakery$BakingResult, modelGroups: { [key: string]: any }, blockStateModels: Map<BlockState, BlockStateModel>, blockModels: Map<BlockState, BlockModel>, fluidModels: Map<Fluid, FluidModel>, entityModelSet: EntityModelSet)
    // private bakedModels: ModelBakery$BakingResult;
    // private blockModels: Map<BlockState, BlockModel>;
    // private blockStateModels: Map<BlockState, BlockStateModel>;
    // private entityModelSet: EntityModelSet;
    // private fluidModels: Map<Fluid, FluidModel>;
    // private modelGroups: { [key: string]: any };
    bakedModels(): ModelBakery$BakingResult;
    blockModels(): Map<BlockState, BlockModel>;
    blockStateModels(): Map<BlockState, BlockStateModel>;
    entityModelSet(): EntityModelSet;
    equals(o: Object | null): boolean;
    fluidModels(): Map<Fluid, FluidModel>;
    hashCode(): number;
    modelGroups(): { [key: string]: any };
    toString(): string;
}