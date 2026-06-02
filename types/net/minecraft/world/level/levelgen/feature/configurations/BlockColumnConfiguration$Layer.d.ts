import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class BlockColumnConfiguration$Layer extends Record {
    static CODEC: Codec<BlockColumnConfiguration$Layer>;
    constructor(height: IntProvider, state: BlockStateProvider)
    // private height: IntProvider;
    // private state: BlockStateProvider;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): IntProvider;
    state(): BlockStateProvider;
    toString(): string;
}