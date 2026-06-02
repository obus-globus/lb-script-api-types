import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { MissingItemModel } from '../../../../../net/minecraft/client/renderer/item/MissingItemModel.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { ModelBaker } from '../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { RegistryContextSwapper } from '../../../../../net/minecraft/util/RegistryContextSwapper.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class ItemModel$BakingContext extends Record implements SpecialModelRenderer$BakingContext {
    constructor(blockModelBaker: ModelBaker, entityModelSet: EntityModelSet, sprites: SpriteGetter, playerSkinRenderCache: PlayerSkinRenderCache, missingItemModel: MissingItemModel, contextSwapper: RegistryContextSwapper)
    // private blockModelBaker: ModelBaker;
    // private contextSwapper: RegistryContextSwapper;
    // private entityModelSet: EntityModelSet;
    // private missingItemModel: MissingItemModel;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    // private sprites: SpriteGetter;
    blockModelBaker(): ModelBaker;
    contextSwapper(): RegistryContextSwapper;
    entityModelSet(): EntityModelSet;
    equals(o: Object | null): boolean;
    hashCode(): number;
    missingItemModel(): MissingItemModel;
    missingItemModel(transformation: Matrix4fc): MissingItemModel;
    playerSkinRenderCache(): PlayerSkinRenderCache;
    sprites(): SpriteGetter;
    toString(): string;
}