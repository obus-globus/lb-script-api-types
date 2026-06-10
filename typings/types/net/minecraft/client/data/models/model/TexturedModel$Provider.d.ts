import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelInstance } from '../../../../../../net/minecraft/client/data/models/model/ModelInstance.d.ts'
import type { TextureMapping } from '../../../../../../net/minecraft/client/data/models/model/TextureMapping.d.ts'
import type { TexturedModel } from '../../../../../../net/minecraft/client/data/models/model/TexturedModel.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export interface TexturedModel$Provider extends Object {
    create(block: Block, modelOutput: (param0: Identifier, param1: ModelInstance) => void): Identifier;
    createWithSuffix(block: Block, suffix: string, modelOutput: (param0: Identifier, param1: ModelInstance) => void): Identifier;
    get(block: Block): TexturedModel;
    updateTexture(mutator: (param0: TextureMapping) => void): (param0: Block) => TexturedModel;
}