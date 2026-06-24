import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class AboveRootPlacement extends Record {
    static CODEC: Codec<AboveRootPlacement>;
    constructor(aboveRootProvider: BlockStateProvider, aboveRootPlacementChance: number)
    // private aboveRootPlacementChance: number;
    // private aboveRootProvider: BlockStateProvider;
    aboveRootPlacementChance(): number;
    aboveRootProvider(): BlockStateProvider;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}