import type { Object2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelDiscovery$ModelWrapper } from '../../../../../net/minecraft/client/resources/model/ModelDiscovery$ModelWrapper.d.ts'
import type { ResolvableModel } from '../../../../../net/minecraft/client/resources/model/ResolvableModel.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { ResolvedModel } from '../../../../../net/minecraft/client/resources/model/ResolvedModel.d.ts'
import type { UnbakedModel } from '../../../../../net/minecraft/client/resources/model/UnbakedModel.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModelDiscovery extends Object {
    constructor(unbakedModels: Map<Identifier, UnbakedModel>, missingUnbakedModel: UnbakedModel)
    // private missingModel: ModelDiscovery$ModelWrapper;
    // private modelWrappers: Map<Identifier, ModelDiscovery$ModelWrapper>;
    // private parentDiscoveryQueue: ModelDiscovery$ModelWrapper[];
    // private resolver: ResolvableModel$Resolver;
    // private uncachedResolver: (param0: Object) => ModelDiscovery$ModelWrapper;
    addRoot(model: ResolvableModel): void;
    addSpecialModel(id: Identifier, model: UnbakedModel): void;
    // private createAndQueueWrapper(id: Identifier, rawModel: UnbakedModel): ModelDiscovery$ModelWrapper;
    // private discoverDependencies(toValidate: ModelDiscovery$ModelWrapper[]): void;
    // private getOrCreateModel(id: Identifier): ModelDiscovery$ModelWrapper;
    missingModel(): ResolvedModel;
    resolve(): Map<Identifier, ResolvedModel>;
}