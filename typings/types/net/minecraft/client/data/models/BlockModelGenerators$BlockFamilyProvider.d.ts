import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockModelGenerators } from '../../../../../net/minecraft/client/data/models/BlockModelGenerators.d.ts'
import type { ModelTemplate } from '../../../../../net/minecraft/client/data/models/model/ModelTemplate.d.ts'
import type { TextureMapping } from '../../../../../net/minecraft/client/data/models/model/TextureMapping.d.ts'
import type { Variant } from '../../../../../net/minecraft/client/renderer/block/dispatch/Variant.d.ts'
import type { BlockFamily } from '../../../../../net/minecraft/data/BlockFamily.d.ts'
import type { BlockFamily$Variant } from '../../../../../net/minecraft/data/BlockFamily$Variant.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockModelGenerators$BlockFamilyProvider extends Object {
    constructor(null_: BlockModelGenerators, mapping: TextureMapping)
    // private family: BlockFamily;
    // private fullBlock: Variant;
    // private mapping: TextureMapping;
    // private models: Map<ModelTemplate, Identifier>;
    // private skipGeneratingModelsFor: Block[];
    button(block: Block): BlockModelGenerators$BlockFamilyProvider;
    customFence(block: Block): BlockModelGenerators$BlockFamilyProvider;
    customFenceGate(block: Block): BlockModelGenerators$BlockFamilyProvider;
    customHangingSign(hangingSign: Block): BlockModelGenerators$BlockFamilyProvider;
    donateModelTo(donor: Block, copyTo: Block): BlockModelGenerators$BlockFamilyProvider;
    // private door(door: Block): BlockModelGenerators$BlockFamilyProvider;
    fence(block: Block): BlockModelGenerators$BlockFamilyProvider;
    fenceGate(block: Block): BlockModelGenerators$BlockFamilyProvider;
    fullBlock(block: Block, template: ModelTemplate): BlockModelGenerators$BlockFamilyProvider;
    // private fullBlockVariant(variant: Block): BlockModelGenerators$BlockFamilyProvider;
    generateFor(family: BlockFamily): BlockModelGenerators$BlockFamilyProvider;
    // private getOrCreateModel(modelTemplate: ModelTemplate, block: Block): Identifier;
    hangingSign(hangingSign: Block): BlockModelGenerators$BlockFamilyProvider;
    // private hangingSign(hangingSign: Block, particleBlock: Block, wallVarient: BlockFamily$Variant): BlockModelGenerators$BlockFamilyProvider;
    // private pillar(variant: Block): BlockModelGenerators$BlockFamilyProvider;
    pressurePlate(block: Block): BlockModelGenerators$BlockFamilyProvider;
    sign(sign: Block): BlockModelGenerators$BlockFamilyProvider;
    slab(slab: Block): BlockModelGenerators$BlockFamilyProvider;
    stairs(stairs: Block): BlockModelGenerators$BlockFamilyProvider;
    // private trapdoor(result: Block): void;
    wall(block: Block): BlockModelGenerators$BlockFamilyProvider;
}