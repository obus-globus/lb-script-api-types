import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MultiblockChestResources } from '../../../../net/minecraft/client/renderer/MultiblockChestResources.d.ts'
import type { SpriteMapper } from '../../../../net/minecraft/client/renderer/SpriteMapper.d.ts'
import type { ChestRenderState$ChestMaterialType } from '../../../../net/minecraft/client/renderer/blockentity/state/ChestRenderState$ChestMaterialType.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { SpriteId } from '../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DyeColor } from '../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BannerPattern } from '../../../../net/minecraft/world/level/block/entity/BannerPattern.d.ts'
import type { DecoratedPotPattern } from '../../../../net/minecraft/world/level/block/entity/DecoratedPotPattern.d.ts'
import type { ChestType } from '../../../../net/minecraft/world/level/block/state/properties/ChestType.d.ts'
import type { WoodType } from '../../../../net/minecraft/world/level/block/state/properties/WoodType.d.ts'
export class Sheets extends Object {
    static ARMOR_TRIMS_SHEET: Identifier;
    static BANNER_BASE: SpriteId;
    static BANNER_MAPPER: SpriteMapper;
    static BANNER_PATTERN_BASE: SpriteId;
    static BANNER_SHEET: Identifier;
    static BED_MAPPER: SpriteMapper;
    static BED_SHEET: Identifier;
    static BLOCKS_MAPPER: SpriteMapper;
    static BLOCK_ENTITIES_MAPPER: SpriteMapper;
    static CELESTIAL_SHEET: Identifier;
    static CHEST_CHRISTMAS: MultiblockChestResources<SpriteId>;
    static CHEST_COPPER_EXPOSED: MultiblockChestResources<SpriteId>;
    static CHEST_COPPER_OXIDIZED: MultiblockChestResources<SpriteId>;
    static CHEST_COPPER_UNAFFECTED: MultiblockChestResources<SpriteId>;
    static CHEST_COPPER_WEATHERED: MultiblockChestResources<SpriteId>;
    static CHEST_MAPPER: SpriteMapper;
    static CHEST_REGULAR: MultiblockChestResources<SpriteId>;
    static CHEST_SHEET: Identifier;
    static CHEST_TRAPPED: MultiblockChestResources<SpriteId>;
    static DECORATED_POT_BASE: SpriteId;
    static DECORATED_POT_MAPPER: SpriteMapper;
    static DECORATED_POT_SHEET: Identifier;
    static DECORATED_POT_SIDE: SpriteId;
    static DECORATED_POT_SPRITES: Map<ResourceKey<DecoratedPotPattern>, SpriteId>;
    static DEFAULT_SHULKER_TEXTURE_LOCATION: SpriteId;
    static ENDER_CHEST_LOCATION: SpriteId;
    static GUI_SHEET: Identifier;
    static HANGING_SIGN_MAPPER: SpriteMapper;
    static HANGING_SIGN_SPRITES: Map<WoodType, SpriteId>;
    static ITEMS_MAPPER: SpriteMapper;
    static MAP_DECORATIONS_SHEET: Identifier;
    static PAINTINGS_SHEET: Identifier;
    static SHIELD_BASE: SpriteId;
    static SHIELD_BASE_NO_PATTERN: SpriteId;
    static SHIELD_MAPPER: SpriteMapper;
    static SHIELD_PATTERN_BASE: SpriteId;
    static SHIELD_SHEET: Identifier;
    static SHULKER_MAPPER: SpriteMapper;
    static SHULKER_SHEET: Identifier;
    static SHULKER_TEXTURE_LOCATION: SpriteId[];
    static SIGN_MAPPER: SpriteMapper;
    static SIGN_SHEET: Identifier;
    static SIGN_SPRITES: Map<WoodType, SpriteId>;
    static armorTrimsSheet(paramdecal: boolean): RenderType;
    static chooseSprite(parammaterialType: ChestRenderState$ChestMaterialType, paramtype: ChestType): SpriteId;
    static colorToResourceSprite(paramcolor: DyeColor): Identifier;
    static colorToShulkerSprite(paramcolor: DyeColor): Identifier;
    static createBedSprite(paramcolor: DyeColor): SpriteId;
    static createShulkerSprite(paramcolor: DyeColor): SpriteId;
    static cutoutBlockItemSheet(): RenderType;
    static cutoutBlockSheet(): RenderType;
    static cutoutItemSheet(): RenderType;
    static getBannerSprite(parampattern: Holder<BannerPattern>): SpriteId;
    static getBedSprite(paramcolor: DyeColor): SpriteId;
    static getDecoratedPotSprite(parampattern: ResourceKey<DecoratedPotPattern>): SpriteId;
    static getHangingSignSprite(paramtype: WoodType): SpriteId;
    static getShieldSprite(parampattern: Holder<BannerPattern>): SpriteId;
    static getShulkerBoxSprite(paramcolor: DyeColor): SpriteId;
    static getSignSprite(paramtype: WoodType): SpriteId;
    static translucentBlockItemSheet(): RenderType;
    static translucentBlockSheet(): RenderType;
    static translucentItemSheet(): RenderType;
    constructor()
}