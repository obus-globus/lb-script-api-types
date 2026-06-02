import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class FlatLayerInfo extends Object {
    static CODEC: Codec<FlatLayerInfo>;
    constructor(height: number, block: Block)
    // private block: Block;
    readonly height: number;
    getBlockState(): BlockState;
    getHeight(): number;
    heightLimited(maxHeight: number): FlatLayerInfo;
    toString(): string;
}