import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MultiVariant } from '../../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { MultiVariantGenerator } from '../../../../../../net/minecraft/client/data/models/blockstates/MultiVariantGenerator.d.ts'
import type { PropertyDispatch } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class MultiVariantGenerator$Empty extends Object {
    constructor(block: Block)
    // private block: Block;
    with(newStage: PropertyDispatch<MultiVariant>): MultiVariantGenerator;
}