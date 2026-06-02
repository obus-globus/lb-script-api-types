import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { VisibilitySet } from '../../../../../../../../net/minecraft/client/renderer/chunk/VisibilitySet.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { BlockEntity } from '../../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class BuiltSectionInfo extends Object {
    static EMPTY: BuiltSectionInfo;
    private constructor(arg0: E[], arg1: E[], arg2: E[], arg3: E[], arg4: VisibilitySet)
    animatedSprites: TextureAtlasSprite[];
    culledBlockEntities: BlockEntity[];
    flags: number;
    globalBlockEntities: BlockEntity[];
    visibilityData: number;
}