import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class TextureHelper extends Object {
    static BAKE_FLIP_U: number;
    static BAKE_FLIP_V: number;
    static BAKE_LOCK_UV: number;
    static BAKE_NORMALIZED: number;
    static BAKE_ROTATE_180: number;
    static BAKE_ROTATE_270: number;
    static BAKE_ROTATE_90: number;
    static BAKE_ROTATE_NONE: number;
    static bakeSprite(paramarg0: MutableQuadViewImpl, paramarg1: TextureAtlasSprite, paramarg2: number): void;
    private constructor()
}