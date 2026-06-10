import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockTypes extends Object {
    static CODEC: MapCodec<Block>;
    static bootstrap(paramregistry: MapCodec<Block>[]): MapCodec<Block>;
    constructor()
}