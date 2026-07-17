import type { JavaMap } from '../../../../../JavaMap.d.ts'
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
    private constructor(bakedModels: ModelBakery$BakingResult, modelGroups: JavaMap<any, any>, blockStateModels: JavaMap<BlockState, BlockStateModel>, blockModels: JavaMap<BlockState, BlockModel>, fluidModels: JavaMap<Fluid, FluidModel>, entityModelSet: EntityModelSet)
    // private bakedModels: ModelBakery$BakingResult;
    // private blockModels: JavaMap<BlockState, BlockModel>;
    // private blockStateModels: JavaMap<BlockState, BlockStateModel>;
    // private entityModelSet: EntityModelSet;
    // private fluidModels: JavaMap<Fluid, FluidModel>;
    // private modelGroups: JavaMap<any, any>;
    bakedModels(): ModelBakery$BakingResult;
    blockModels(): JavaMap<BlockState, BlockModel>;
    blockStateModels(): JavaMap<BlockState, BlockStateModel>;
    entityModelSet(): EntityModelSet;
    equals(o: Object | null): boolean;
    fluidModels(): JavaMap<Fluid, FluidModel>;
    hashCode(): number;
    modelGroups(): JavaMap<any, any>;
    toString(): string;
}