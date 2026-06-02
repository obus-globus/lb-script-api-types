import type { BiFunction } from '../../../../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { UnbakedExtraModel } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/UnbakedExtraModel.d.ts'
import type { BlockStateModel } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { ModelState } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { ResolvedModel } from '../../../../../../../../net/minecraft/client/resources/model/ResolvedModel.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SimpleUnbakedExtraModel<T extends Object | number | string | boolean> extends Object implements UnbakedExtraModel<T> {
    static blockStateModel(paramarg0: Identifier): SimpleUnbakedExtraModel<BlockStateModel>;
    static blockStateModel(paramarg0: Identifier, paramarg1: ModelState): SimpleUnbakedExtraModel<BlockStateModel>;
    constructor(arg0: Identifier, arg1: (param0: ResolvedModel, param1: ModelBaker) => T)
    // private bake: (param0: ResolvedModel, param1: ModelBaker) => T;
    // private model: Identifier;
    bake(arg0: ModelBaker): T;
    resolveDependencies(arg0: ResolvableModel$Resolver): void;
}