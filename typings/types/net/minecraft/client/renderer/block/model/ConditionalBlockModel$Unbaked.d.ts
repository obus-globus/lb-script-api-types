import type { Transformation } from '../../../../../../com/mojang/math/Transformation.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockModel } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockModel$BakingContext } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$BakingContext.d.ts'
import type { BlockModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$Unbaked.d.ts'
import type { ConditionalBlockModelProperty } from '../../../../../../net/minecraft/client/renderer/block/model/properties/conditional/ConditionalBlockModelProperty.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class ConditionalBlockModel$Unbaked extends Record implements BlockModel$Unbaked {
    constructor(transformation: Optional<Transformation>, property: ConditionalBlockModelProperty, onTrue: BlockModel$Unbaked, onFalse: BlockModel$Unbaked)
    // private onFalse: BlockModel$Unbaked;
    // private onTrue: BlockModel$Unbaked;
    // private property: ConditionalBlockModelProperty;
    // private transformation: Optional<Transformation>;
    bake(context: BlockModel$BakingContext, transformation: Matrix4fc): BlockModel;
    equals(o: Object | null): boolean;
    hashCode(): number;
    onFalse(): BlockModel$Unbaked;
    onTrue(): BlockModel$Unbaked;
    property(): ConditionalBlockModelProperty;
    toString(): string;
    transformation(): Optional<Transformation>;
}