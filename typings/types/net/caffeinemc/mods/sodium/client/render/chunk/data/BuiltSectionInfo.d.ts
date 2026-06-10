import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { VisibilitySet } from '../../../../../../../../net/minecraft/client/renderer/chunk/VisibilitySet.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { BlockEntity } from '../../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class BuiltSectionInfo extends Object {
    static EMPTY: BuiltSectionInfo;
    private constructor(arg0: TerrainRenderPass[], arg1: BlockEntity[], arg2: BlockEntity[], arg3: TextureAtlasSprite[], arg4: VisibilitySet)
    animatedSprites: TextureAtlasSprite[];
    culledBlockEntities: BlockEntity[];
    flags: number;
    globalBlockEntities: BlockEntity[];
    visibilityData: number;
}