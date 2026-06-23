import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockStateModelPart } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { ModelBaker$Interner } from '../../../../../net/minecraft/client/resources/model/ModelBaker$Interner.d.ts'
import type { ModelBaker$SharedOperationKey } from '../../../../../net/minecraft/client/resources/model/ModelBaker$SharedOperationKey.d.ts'
import type { ResolvedModel } from '../../../../../net/minecraft/client/resources/model/ResolvedModel.d.ts'
import type { MaterialBaker } from '../../../../../net/minecraft/client/resources/model/sprite/MaterialBaker.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ModelBaker extends Object {
    compute<T extends unknown>(key: (param0: ModelBaker) => T): T;
    getModel(location: Identifier): ResolvedModel;
    interner(): ModelBaker$Interner;
    materials(): MaterialBaker;
    missingBlockModelPart(): BlockStateModelPart;
}