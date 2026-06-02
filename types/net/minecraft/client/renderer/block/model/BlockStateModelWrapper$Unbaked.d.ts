import type { Transformation } from '../../../../../../com/mojang/math/Transformation.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockTintSource } from '../../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { BlockModel } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockModel$BakingContext } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$BakingContext.d.ts'
import type { BlockModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$Unbaked.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class BlockStateModelWrapper$Unbaked extends Record implements BlockModel$Unbaked {
    constructor(model: BlockState, tints: BlockTintSource[], transformation: Optional<Transformation>)
    // private model: BlockState;
    // private tints: BlockTintSource[];
    // private transformation: Optional<Transformation>;
    bake(context: BlockModel$BakingContext, transformation: Matrix4fc): BlockModel;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): BlockState;
    tints(): BlockTintSource[];
    toString(): string;
    transformation(): Optional<Transformation>;
}