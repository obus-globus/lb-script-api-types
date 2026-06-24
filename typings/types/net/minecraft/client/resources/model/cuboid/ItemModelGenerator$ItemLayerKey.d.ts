import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelBaker$SharedOperationKey } from '../../../../../../net/minecraft/client/resources/model/ModelBaker$SharedOperationKey.d.ts'
import type { QuadCollection } from '../../../../../../net/minecraft/client/resources/model/geometry/QuadCollection.d.ts'
import type { Material$Baked } from '../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
export class ItemModelGenerator$ItemLayerKey extends Record implements ModelBaker$SharedOperationKey<QuadCollection> {
    private constructor(material: Material$Baked, modelState: ModelState, layerIndex: number)
    // private layerIndex: number;
    // private material: Material$Baked;
    // private modelState: ModelState;
    compute(modelBakery: ModelBaker): QuadCollection;
    equals(o: Object | null): boolean;
    hashCode(): number;
    layerIndex(): number;
    material(): Material$Baked;
    modelState(): ModelState;
    toString(): string;
}