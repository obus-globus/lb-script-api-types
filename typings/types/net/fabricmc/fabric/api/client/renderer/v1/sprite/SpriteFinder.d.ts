import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export interface SpriteFinder extends Object{
    find(arg0: number, arg1: number): TextureAtlasSprite;
    find(arg0: QuadView): TextureAtlasSprite;
}