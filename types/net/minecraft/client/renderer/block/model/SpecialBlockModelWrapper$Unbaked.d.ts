import type { Transformation } from '../../../../../../com/mojang/math/Transformation.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockModel } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockModel$BakingContext } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$BakingContext.d.ts'
import type { BlockModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$Unbaked.d.ts'
import type { SpecialModelRenderer$Unbaked } from '../../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$Unbaked.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class SpecialBlockModelWrapper$Unbaked<T extends Object | number | string | boolean> extends Record implements BlockModel$Unbaked {
    constructor(model: SpecialModelRenderer$Unbaked<T>, transformation: Optional<Transformation>)
    // private model: SpecialModelRenderer$Unbaked<T>;
    // private transformation: Optional<Transformation>;
    bake(context: BlockModel$BakingContext, transformation: Matrix4fc): BlockModel;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): SpecialModelRenderer$Unbaked<T>;
    toString(): string;
    transformation(): Optional<Transformation>;
}