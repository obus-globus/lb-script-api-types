import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { BlockStateModel } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockModel } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { SpriteGetter } from '../../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockModel$BakingContext extends Record implements SpecialModelRenderer$BakingContext {
    constructor(entityModelSet: EntityModelSet, sprites: SpriteGetter, playerSkinRenderCache: PlayerSkinRenderCache, modelGetter: (param0: BlockState) => BlockStateModel, missingBlockModel: BlockModel)
    // private entityModelSet: EntityModelSet;
    // private missingBlockModel: BlockModel;
    // private modelGetter: (param0: BlockState) => BlockStateModel;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    // private sprites: SpriteGetter;
    entityModelSet(): EntityModelSet;
    equals(o: Object | null): boolean;
    hashCode(): number;
    missingBlockModel(): BlockModel;
    modelGetter(): (param0: BlockState) => BlockStateModel;
    playerSkinRenderCache(): PlayerSkinRenderCache;
    sprites(): SpriteGetter;
    toString(): string;
}