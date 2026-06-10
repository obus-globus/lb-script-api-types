import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelInstance } from '../../../../../../net/minecraft/client/data/models/model/ModelInstance.d.ts'
import type { ModelTemplate } from '../../../../../../net/minecraft/client/data/models/model/ModelTemplate.d.ts'
import type { TextureMapping } from '../../../../../../net/minecraft/client/data/models/model/TextureMapping.d.ts'
import type { TexturedModel$Provider } from '../../../../../../net/minecraft/client/data/models/model/TexturedModel$Provider.d.ts'
import type { Material } from '../../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class TexturedModel extends Object {
    static ANVIL: (param0: Block) => TexturedModel;
    static CARPET: (param0: Block) => TexturedModel;
    static CHAIN: (param0: Block) => TexturedModel;
    static COLUMN: (param0: Block) => TexturedModel;
    static COLUMN_ALT: (param0: Block) => TexturedModel;
    static COLUMN_HORIZONTAL: (param0: Block) => TexturedModel;
    static COLUMN_HORIZONTAL_ALT: (param0: Block) => TexturedModel;
    static COLUMN_WITH_WALL: (param0: Block) => TexturedModel;
    static CORAL_FAN: (param0: Block) => TexturedModel;
    static CUBE: (param0: Block) => TexturedModel;
    static CUBE_INNER_FACES: (param0: Block) => TexturedModel;
    static CUBE_MIRRORED: (param0: Block) => TexturedModel;
    static CUBE_TOP: (param0: Block) => TexturedModel;
    static CUBE_TOP_BOTTOM: (param0: Block) => TexturedModel;
    static FLOWERBED_1: (param0: Block) => TexturedModel;
    static FLOWERBED_2: (param0: Block) => TexturedModel;
    static FLOWERBED_3: (param0: Block) => TexturedModel;
    static FLOWERBED_4: (param0: Block) => TexturedModel;
    static GLAZED_TERRACOTTA: (param0: Block) => TexturedModel;
    static HANGING_LANTERN: (param0: Block) => TexturedModel;
    static LANTERN: (param0: Block) => TexturedModel;
    static LEAF_LITTER_1: (param0: Block) => TexturedModel;
    static LEAF_LITTER_2: (param0: Block) => TexturedModel;
    static LEAF_LITTER_3: (param0: Block) => TexturedModel;
    static LEAF_LITTER_4: (param0: Block) => TexturedModel;
    static LEAVES: (param0: Block) => TexturedModel;
    static MOSSY_CARPET_SIDE: (param0: Block) => TexturedModel;
    static ORIENTABLE: (param0: Block) => TexturedModel;
    static ORIENTABLE_ONLY_TOP: (param0: Block) => TexturedModel;
    static SEAGRASS: (param0: Block) => TexturedModel;
    static TOP_BOTTOM_WITH_WALL: (param0: Block) => TexturedModel;
    static createAllSame(parammaterial: Material): TexturedModel;
    static createDefault(parammapping: (param0: Block) => TextureMapping, paramtemplate: ModelTemplate): (param0: Block) => TexturedModel;
    private constructor(mapping: TextureMapping, template: ModelTemplate)
    readonly mapping: TextureMapping;
    readonly template: ModelTemplate;
    create(block: Block, modelOutput: (param0: Identifier, param1: ModelInstance) => void): Identifier;
    createWithSuffix(block: Block, extraSuffix: string, modelOutput: (param0: Identifier, param1: ModelInstance) => void): Identifier;
    getMapping(): TextureMapping;
    getTemplate(): ModelTemplate;
    updateTextures(mutator: (param0: TextureMapping) => void): TexturedModel;
}