import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BuiltSectionInfo } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/BuiltSectionInfo.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { VisibilitySet } from '../../../../../../../../net/minecraft/client/renderer/chunk/VisibilitySet.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { BlockEntity } from '../../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class BuiltSectionInfo$Builder extends Object {
    constructor()
    // private animatedSprites: TextureAtlasSprite[];
    // private blockRenderPasses: TerrainRenderPass[];
    // private culledBlockEntities: BlockEntity[];
    // private globalBlockEntities: BlockEntity[];
    readonly occlusionData: VisibilitySet;
    addBlockEntity(arg0: BlockEntity, arg1: boolean): void;
    addRenderPass(arg0: TerrainRenderPass): void;
    addSprite(arg0: TextureAtlasSprite): void;
    build(): BuiltSectionInfo;
    setOcclusionData(arg0: VisibilitySet): void;
}