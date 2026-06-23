import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MultiVariant } from '../../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { BlockModelDefinitionGenerator } from '../../../../../../net/minecraft/client/data/models/blockstates/BlockModelDefinitionGenerator.d.ts'
import type { ConditionBuilder } from '../../../../../../net/minecraft/client/data/models/blockstates/ConditionBuilder.d.ts'
import type { MultiPartGenerator$Entry } from '../../../../../../net/minecraft/client/data/models/blockstates/MultiPartGenerator$Entry.d.ts'
import type { BlockStateModelDispatcher } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelDispatcher.d.ts'
import type { Condition } from '../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/Condition.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { StateDefinition } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
export class MultiPartGenerator extends Object implements BlockModelDefinitionGenerator {
    static multiPart(paramblock: Block): MultiPartGenerator;
    private constructor(block: Block)
    // private block: Block;
    // private parts: MultiPartGenerator$Entry[];
    block(): Block;
    create(): BlockStateModelDispatcher;
    // private validateCondition(condition: (param0: StateDefinition<Object, any>) => (param0: Object | null) => boolean): void;
    with(variants: MultiVariant): MultiPartGenerator;
    with(condition: ConditionBuilder, variants: MultiVariant): MultiPartGenerator;
    with(condition: (param0: StateDefinition<Object, any>) => (param0: Object | null) => boolean, variants: MultiVariant): MultiPartGenerator;
}