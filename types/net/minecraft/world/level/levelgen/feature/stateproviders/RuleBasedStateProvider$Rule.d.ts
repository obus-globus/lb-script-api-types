import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPredicate } from '../../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class RuleBasedStateProvider$Rule extends Record {
    static CODEC: Codec<RuleBasedStateProvider$Rule>;
    constructor(ifTrue: BlockPredicate, then: BlockStateProvider)
    // private ifTrue: BlockPredicate;
    // private then: BlockStateProvider;
    equals(o: Object | null): boolean;
    hashCode(): number;
    ifTrue(): BlockPredicate;
    then(): BlockStateProvider;
    toString(): string;
}