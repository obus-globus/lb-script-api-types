import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Model } from '../../../../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
export interface FabricModel<S extends unknown> extends Object{
    copyTransforms(arg0: Model<Object>): void;
    getChildPart(arg0: string): ModelPart;
}