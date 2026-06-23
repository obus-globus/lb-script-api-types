import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockStateModelPart } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { ModelBaker } from '../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelBaker$Interner } from '../../../../../net/minecraft/client/resources/model/ModelBaker$Interner.d.ts'
import type { ModelBaker$SharedOperationKey } from '../../../../../net/minecraft/client/resources/model/ModelBaker$SharedOperationKey.d.ts'
import type { ModelBakery$MissingModels } from '../../../../../net/minecraft/client/resources/model/ModelBakery$MissingModels.d.ts'
import type { ResolvedModel } from '../../../../../net/minecraft/client/resources/model/ResolvedModel.d.ts'
import type { MaterialBaker } from '../../../../../net/minecraft/client/resources/model/sprite/MaterialBaker.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModelBakery$ModelBakerImpl extends Object implements ModelBaker {
    private constructor(null_: ModelBakery$ModelBakerImpl, materials: MaterialBaker, interner: ModelBaker$Interner, missingModels: ModelBakery$MissingModels)
    // private cacheComputeFunction: (param0: (param0: ModelBaker) => Object) => Object;
    // private interner: ModelBaker$Interner;
    // private materials: MaterialBaker;
    // private missingModels: ModelBakery$MissingModels;
    // private operationCache: Map<(param0: ModelBaker) => Object, Object>;
    compute<T extends unknown>(key: (param0: ModelBaker) => T): T;
    getModel(location: Identifier): ResolvedModel;
    interner(): ModelBaker$Interner;
    materials(): MaterialBaker;
    missingBlockModelPart(): BlockStateModelPart;
}