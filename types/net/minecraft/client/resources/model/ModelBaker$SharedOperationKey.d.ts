import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelBaker } from '../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
export interface ModelBaker$SharedOperationKey<T extends Object | number | string | boolean> extends Object{
    compute(modelBakery: ModelBaker): T;
}