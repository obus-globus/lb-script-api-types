import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SodiumSpriteFinder } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/texture/SodiumSpriteFinder.d.ts'
export interface ExtendedTextureAtlas extends Object{
    sodium$getSpriteFinder(): SodiumSpriteFinder;
}