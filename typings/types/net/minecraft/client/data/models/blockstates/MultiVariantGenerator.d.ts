import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MultiVariant } from '../../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { BlockModelDefinitionGenerator } from '../../../../../../net/minecraft/client/data/models/blockstates/BlockModelDefinitionGenerator.d.ts'
import type { MultiVariantGenerator$Empty } from '../../../../../../net/minecraft/client/data/models/blockstates/MultiVariantGenerator$Empty.d.ts'
import type { MultiVariantGenerator$Entry } from '../../../../../../net/minecraft/client/data/models/blockstates/MultiVariantGenerator$Entry.d.ts'
import type { PropertyDispatch } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch.d.ts'
import type { BlockStateModelDispatcher } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelDispatcher.d.ts'
import type { VariantMutator } from '../../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class MultiVariantGenerator extends Object implements BlockModelDefinitionGenerator {
    static dispatch(paramblock: Block, paraminitialModel: MultiVariant): MultiVariantGenerator;
    static dispatch(paramblock: Block): MultiVariantGenerator$Empty;
    private constructor(block: Block, entries: MultiVariantGenerator$Entry[], seenProperties: Property<any>[])
    // private block: Block;
    // private entries: MultiVariantGenerator$Entry[];
    // private seenProperties: Property<any>[];
    block(): Block;
    create(): BlockStateModelDispatcher;
    with(newStage: PropertyDispatch<(param0: Object | null) => Object | null>): MultiVariantGenerator;
    with(singleMutator: (param0: Object | null) => Object | null): MultiVariantGenerator;
}