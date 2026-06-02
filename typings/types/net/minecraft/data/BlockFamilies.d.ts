import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockFamily } from '../../../net/minecraft/data/BlockFamily.d.ts'
import type { BlockFamily$Builder } from '../../../net/minecraft/data/BlockFamily$Builder.d.ts'
import type { Block } from '../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockFamilies extends Object {
    static ACACIA_PLANKS: BlockFamily;
    static ANDESITE: BlockFamily;
    static BAMBOO_MOSAIC: BlockFamily;
    static BAMBOO_PLANKS: BlockFamily;
    static BIRCH_PLANKS: BlockFamily;
    static BLACKSTONE: BlockFamily;
    static BRICKS: BlockFamily;
    static CHERRY_PLANKS: BlockFamily;
    static COBBLED_DEEPSLATE: BlockFamily;
    static COBBLESTONE: BlockFamily;
    static COPPER_BLOCK: BlockFamily;
    static CRIMSON_PLANKS: BlockFamily;
    static CUT_COPPER: BlockFamily;
    static CUT_RED_SANDSTONE: BlockFamily;
    static CUT_SANDSTONE: BlockFamily;
    static DARK_OAK_PLANKS: BlockFamily;
    static DARK_PRISMARINE: BlockFamily;
    static DEEPSLATE: BlockFamily;
    static DEEPSLATE_BRICKS: BlockFamily;
    static DEEPSLATE_TILES: BlockFamily;
    static DIORITE: BlockFamily;
    static END_STONE: BlockFamily;
    static END_STONE_BRICKS: BlockFamily;
    static EXPOSED_COPPER: BlockFamily;
    static EXPOSED_CUT_COPPER: BlockFamily;
    static GRANITE: BlockFamily;
    static JUNGLE_PLANKS: BlockFamily;
    static MANGROVE_PLANKS: BlockFamily;
    static MOSSY_COBBLESTONE: BlockFamily;
    static MOSSY_STONE_BRICKS: BlockFamily;
    static MUD_BRICKS: BlockFamily;
    static NETHER_BRICKS: BlockFamily;
    static OAK_PLANKS: BlockFamily;
    static OXIDIZED_COPPER: BlockFamily;
    static OXIDIZED_CUT_COPPER: BlockFamily;
    static PALE_OAK_PLANKS: BlockFamily;
    static POLISHED_ANDESITE: BlockFamily;
    static POLISHED_BLACKSTONE: BlockFamily;
    static POLISHED_BLACKSTONE_BRICKS: BlockFamily;
    static POLISHED_DEEPSLATE: BlockFamily;
    static POLISHED_DIORITE: BlockFamily;
    static POLISHED_GRANITE: BlockFamily;
    static POLISHED_TUFF: BlockFamily;
    static PRISMARINE: BlockFamily;
    static PRISMARINE_BRICKS: BlockFamily;
    static PURPUR: BlockFamily;
    static QUARTZ: BlockFamily;
    static RED_NETHER_BRICKS: BlockFamily;
    static RED_SANDSTONE: BlockFamily;
    static RESIN_BRICKS: BlockFamily;
    static SANDSTONE: BlockFamily;
    static SMOOTH_QUARTZ: BlockFamily;
    static SMOOTH_RED_SANDSTONE: BlockFamily;
    static SMOOTH_SANDSTONE: BlockFamily;
    static SPRUCE_PLANKS: BlockFamily;
    static STONE: BlockFamily;
    static STONE_BRICK: BlockFamily;
    static TUFF: BlockFamily;
    static TUFF_BRICKS: BlockFamily;
    static WARPED_PLANKS: BlockFamily;
    static WAXED_COPPER_BLOCK: BlockFamily;
    static WAXED_CUT_COPPER: BlockFamily;
    static WAXED_EXPOSED_COPPER: BlockFamily;
    static WAXED_EXPOSED_CUT_COPPER: BlockFamily;
    static WAXED_OXIDIZED_COPPER: BlockFamily;
    static WAXED_OXIDIZED_CUT_COPPER: BlockFamily;
    static WAXED_WEATHERED_COPPER: BlockFamily;
    static WAXED_WEATHERED_CUT_COPPER: BlockFamily;
    static WEATHERED_COPPER: BlockFamily;
    static WEATHERED_CUT_COPPER: BlockFamily;
    static familyBuilder(parambase: Block): BlockFamily$Builder;
    static getAllFamilies(): Stream<BlockFamily>;
    static getFamily(parambase: Block): BlockFamily;
    constructor()
}