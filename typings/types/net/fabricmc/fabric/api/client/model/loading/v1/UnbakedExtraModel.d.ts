import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelBaker } from '../../../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel } from '../../../../../../../../net/minecraft/client/resources/model/ResolvableModel.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
export interface UnbakedExtraModel<T extends Object | number | string | boolean> extends Object, ResolvableModel{
    bake(arg0: ModelBaker): T;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
}