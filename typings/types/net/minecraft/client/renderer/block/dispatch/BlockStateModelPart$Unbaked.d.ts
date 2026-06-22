import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockStateModelPart } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel } from '../../../../../../net/minecraft/client/resources/model/ResolvableModel.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
export interface BlockStateModelPart$Unbaked extends Object, ResolvableModel{
    bake(modelBakery: ModelBaker): BlockStateModelPart;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
}