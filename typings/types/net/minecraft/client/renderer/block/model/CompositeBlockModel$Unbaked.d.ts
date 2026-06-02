import type { Transformation } from '../../../../../../com/mojang/math/Transformation.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockModel } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockModel$BakingContext } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$BakingContext.d.ts'
import type { BlockModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$Unbaked.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class CompositeBlockModel$Unbaked extends Record implements BlockModel$Unbaked {
    constructor(normal: BlockModel$Unbaked, custom: BlockModel$Unbaked, transformation: Optional<Transformation>)
    // private custom: BlockModel$Unbaked;
    // private normal: BlockModel$Unbaked;
    // private transformation: Optional<Transformation>;
    bake(context: BlockModel$BakingContext, transformation: Matrix4fc): BlockModel;
    custom(): BlockModel$Unbaked;
    equals(o: Object | null): boolean;
    hashCode(): number;
    normal(): BlockModel$Unbaked;
    toString(): string;
    transformation(): Optional<Transformation>;
}