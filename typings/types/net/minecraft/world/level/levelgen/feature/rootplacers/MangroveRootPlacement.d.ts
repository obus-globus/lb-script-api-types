import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class MangroveRootPlacement extends Record {
    static CODEC: Codec<MangroveRootPlacement>;
    constructor(canGrowThrough: Holder<Block>[], muddyRootsIn: Holder<Block>[], muddyRootsProvider: BlockStateProvider, maxRootWidth: number, maxRootLength: number, randomSkewChance: number)
    // private canGrowThrough: Holder<Block>[];
    // private maxRootLength: number;
    // private maxRootWidth: number;
    // private muddyRootsIn: Holder<Block>[];
    // private muddyRootsProvider: BlockStateProvider;
    // private randomSkewChance: number;
    canGrowThrough(): Holder<Block>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxRootLength(): number;
    maxRootWidth(): number;
    muddyRootsIn(): Holder<Block>[];
    muddyRootsProvider(): BlockStateProvider;
    randomSkewChance(): number;
    toString(): string;
}