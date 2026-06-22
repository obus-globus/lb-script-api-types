import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CustomUnbakedBlockStateModel } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/CustomUnbakedBlockStateModel.d.ts'
import type { BlockStateModel } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { ModelBaker } from '../../../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
export interface CompositeBlockStateModel$Unbaked extends Object, CustomUnbakedBlockStateModel{
    bake(modelBakery: ModelBaker): BlockStateModel;
    models(): BlockStateModel$Unbaked[];
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
}