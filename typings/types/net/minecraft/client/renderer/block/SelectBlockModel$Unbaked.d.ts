import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SelectBlockModel$UnbakedSwitch } from '../../../../../net/minecraft/client/renderer/block/SelectBlockModel$UnbakedSwitch.d.ts'
import type { BlockModel } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockModel$BakingContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel$BakingContext.d.ts'
import type { BlockModel$Unbaked } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel$Unbaked.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class SelectBlockModel$Unbaked extends Record implements BlockModel$Unbaked {
    constructor(transformation: Optional<Transformation>, unbakedSwitch: SelectBlockModel$UnbakedSwitch<any, Object>, fallback: Optional<BlockModel$Unbaked>)
    // private fallback: Optional<BlockModel$Unbaked>;
    // private transformation: Optional<Transformation>;
    // private unbakedSwitch: SelectBlockModel$UnbakedSwitch<any, Object>;
    bake(context: BlockModel$BakingContext, transformation: Matrix4fc): BlockModel;
    equals(o: Object | null): boolean;
    fallback(): Optional<BlockModel$Unbaked>;
    hashCode(): number;
    toString(): string;
    transformation(): Optional<Transformation>;
    unbakedSwitch(): SelectBlockModel$UnbakedSwitch<any, Object>;
}