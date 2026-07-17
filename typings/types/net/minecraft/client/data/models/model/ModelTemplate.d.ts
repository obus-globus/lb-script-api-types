import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelInstance } from '../../../../../../net/minecraft/client/data/models/model/ModelInstance.d.ts'
import type { TextureMapping } from '../../../../../../net/minecraft/client/data/models/model/TextureMapping.d.ts'
import type { TextureSlot } from '../../../../../../net/minecraft/client/data/models/model/TextureSlot.d.ts'
import type { Material } from '../../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ModelTemplate extends Object {
    constructor(model: Optional<Identifier>, suffix: Optional<string>, ...requiredSlots: TextureSlot[])
    // private model: Optional<Identifier>;
    // private requiredSlots: TextureSlot[];
    // private suffix: Optional<string>;
    create(target: Identifier, textures: TextureMapping, output: (param0: Identifier, param1: ModelInstance) => void): Identifier;
    create(item: Item, textures: TextureMapping, output: (param0: Identifier, param1: ModelInstance) => void): Identifier;
    create(block: Block, textures: TextureMapping, output: (param0: Identifier, param1: ModelInstance) => void): Identifier;
    // private createMap(mapping: TextureMapping): JavaMap<TextureSlot, Material>;
    createWithOverride(block: Block, suffixOverride: string, textures: TextureMapping, output: (param0: Identifier, param1: ModelInstance) => void): Identifier;
    createWithSuffix(block: Block, extraSuffix: string, textures: TextureMapping, output: (param0: Identifier, param1: ModelInstance) => void): Identifier;
    getDefaultModelLocation(block: Block): Identifier;
}