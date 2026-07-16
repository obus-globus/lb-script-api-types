import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BlockModelGenerators } from '../../../../../net/minecraft/client/data/models/BlockModelGenerators.d.ts'
import type { ModelTemplate } from '../../../../../net/minecraft/client/data/models/model/ModelTemplate.d.ts'
import type { TextureMapping } from '../../../../../net/minecraft/client/data/models/model/TextureMapping.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockModelGenerators$PlantType extends Enum<BlockModelGenerators$PlantType> {
    static EMISSIVE_NOT_TINTED: BlockModelGenerators$PlantType;
    static NOT_TINTED: BlockModelGenerators$PlantType;
    static TINTED: BlockModelGenerators$PlantType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BlockModelGenerators$PlantType;
    static values(): BlockModelGenerators$PlantType[];
    private constructor(blockTemplate: ModelTemplate, flowerPotTemplate: ModelTemplate, isEmissive: boolean)
    // private blockTemplate: ModelTemplate;
    // private flowerPotTemplate: ModelTemplate;
    // private isEmissive: boolean;
    createItemModel(generator: BlockModelGenerators, block: Block): Identifier;
    getCross(): ModelTemplate;
    getCrossPot(): ModelTemplate;
    getPlantTextureMapping(standAlone: Block): TextureMapping;
    getTextureMapping(block: Block): TextureMapping;
    name(): "TINTED" | "NOT_TINTED" | "EMISSIVE_NOT_TINTED";
}