import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockPredicate } from '../../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { RuleBasedStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/RuleBasedStateProvider.d.ts'
import type { RuleBasedStateProvider$Rule } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/RuleBasedStateProvider$Rule.d.ts'
export class RuleBasedStateProvider$Builder extends Object {
    constructor(fallback: BlockStateProvider)
    // private fallback: BlockStateProvider;
    // private rules: RuleBasedStateProvider$Rule[];
    build(): RuleBasedStateProvider;
    ifTrueThenProvide(ifTrue: BlockPredicate, thenProvide: Block): RuleBasedStateProvider$Builder;
    ifTrueThenProvide(ifTrue: BlockPredicate, thenProvide: BlockState): RuleBasedStateProvider$Builder;
    ifTrueThenProvide(ifTrue: BlockPredicate, thenProvide: BlockStateProvider): RuleBasedStateProvider$Builder;
}