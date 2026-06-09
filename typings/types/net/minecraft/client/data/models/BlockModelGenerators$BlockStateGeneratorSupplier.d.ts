import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockModelDefinitionGenerator } from '../../../../../net/minecraft/client/data/models/blockstates/BlockModelDefinitionGenerator.d.ts'
import type { ModelInstance } from '../../../../../net/minecraft/client/data/models/model/ModelInstance.d.ts'
import type { TextureMapping } from '../../../../../net/minecraft/client/data/models/model/TextureMapping.d.ts'
import type { Variant } from '../../../../../net/minecraft/client/renderer/block/dispatch/Variant.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export interface BlockModelGenerators$BlockStateGeneratorSupplier extends Object {
    create(block: Block, normal: Variant, mapping: TextureMapping, modelOutput: (param0: Identifier, param1: ModelInstance) => void): BlockModelDefinitionGenerator;
}