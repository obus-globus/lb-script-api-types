import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface TextureAtlasAccessor extends Object{
    callGetHeight(): number;
    callGetWidth(): number;
    getMaxLevel(): number;
    getTexturesByName(): Map<Identifier, TextureAtlasSprite>;
}