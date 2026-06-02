import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class MangroveRootPlacement extends Record {
    static CODEC: Codec<MangroveRootPlacement>;
    // private canGrowThrough: Holder<T>[];
    // private maxRootLength: number;
    // private maxRootWidth: number;
    // private muddyRootsIn: Holder<T>[];
    // private muddyRootsProvider: BlockStateProvider;
    // private randomSkewChance: number;
    canGrowThrough(): Holder<T>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxRootLength(): number;
    maxRootWidth(): number;
    muddyRootsIn(): Holder<T>[];
    muddyRootsProvider(): BlockStateProvider;
    randomSkewChance(): number;
    toString(): string;
}