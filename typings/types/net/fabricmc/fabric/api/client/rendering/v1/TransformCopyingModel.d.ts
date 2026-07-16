import type { Pair } from '../../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelExtensions } from '../../../../../../../net/fabricmc/fabric/impl/client/rendering/ModelExtensions.d.ts'
import type { Model } from '../../../../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
export class TransformCopyingModel<S extends unknown, D extends unknown> extends Model<Pair<S, D>> implements ModelExtensions {
    static create<S extends unknown, D extends unknown>(paramarg0: Model<Object>, paramarg1: Model<Object>, paramarg2: boolean): TransformCopyingModel<S, D>;
    private constructor(arg0: Model<S>, arg1: Model<D>, arg2: boolean)
    // private delegate: Model<D>;
    // private setDelegateAngles: boolean;
    // private source: Model<S>;
    copyTransforms(arg0: Model<Object>): void;
    fabric$calculateChildParts(arg0: ModelPart): void;
    getChildPart(arg0: string): ModelPart;
    setupAnim(arg0: Pair<S, D>): void;
}