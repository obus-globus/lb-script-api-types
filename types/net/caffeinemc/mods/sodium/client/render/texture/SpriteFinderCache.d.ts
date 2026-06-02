import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SodiumSpriteFinder } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/texture/SodiumSpriteFinder.d.ts'
export class SpriteFinderCache extends Object {
    static forBlockAtlas(): SodiumSpriteFinder;
    static forItemAtlas(): SodiumSpriteFinder;
    static resetItemSpriteFinder(): void;
    static resetSpriteFinder(): void;
    constructor()
}