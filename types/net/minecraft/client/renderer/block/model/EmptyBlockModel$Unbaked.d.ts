import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockModel } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockModel$BakingContext } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$BakingContext.d.ts'
import type { BlockModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel$Unbaked.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class EmptyBlockModel$Unbaked extends Record implements BlockModel$Unbaked {
    constructor()
    bake(context: BlockModel$BakingContext, transformation: Matrix4fc): BlockModel;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}