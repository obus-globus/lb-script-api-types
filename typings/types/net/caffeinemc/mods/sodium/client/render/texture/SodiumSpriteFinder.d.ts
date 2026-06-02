import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadView } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { SodiumQuadAtlas } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/SodiumQuadAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export interface SodiumSpriteFinder extends Object{
    find(arg0: number, arg1: number): TextureAtlasSprite;
    find(arg0: ModelQuadView): TextureAtlasSprite;
    getAtlas(): SodiumQuadAtlas;
}