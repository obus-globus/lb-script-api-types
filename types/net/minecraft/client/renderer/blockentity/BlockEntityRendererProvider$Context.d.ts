import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockEntityRenderDispatcher } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderDispatcher.d.ts'
import type { EntityRenderDispatcher } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
export class BlockEntityRendererProvider$Context extends Record {
    constructor(blockEntityRenderDispatcher: BlockEntityRenderDispatcher, blockModelResolver: BlockModelResolver, itemModelResolver: ItemModelResolver, entityRenderer: EntityRenderDispatcher, entityModelSet: EntityModelSet, font: Font, sprites: SpriteGetter, playerSkinRenderCache: PlayerSkinRenderCache)
    // private blockEntityRenderDispatcher: BlockEntityRenderDispatcher;
    // private blockModelResolver: BlockModelResolver;
    // private entityModelSet: EntityModelSet;
    // private entityRenderer: EntityRenderDispatcher;
    // private font: Font;
    // private itemModelResolver: ItemModelResolver;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    // private sprites: SpriteGetter;
    bakeLayer(id: ModelLayerLocation): ModelPart;
    blockEntityRenderDispatcher(): BlockEntityRenderDispatcher;
    blockModelResolver(): BlockModelResolver;
    entityModelSet(): EntityModelSet;
    entityRenderer(): EntityRenderDispatcher;
    equals(o: Object | null): boolean;
    font(): Font;
    hashCode(): number;
    itemModelResolver(): ItemModelResolver;
    playerSkinRenderCache(): PlayerSkinRenderCache;
    sprites(): SpriteGetter;
    toString(): string;
}