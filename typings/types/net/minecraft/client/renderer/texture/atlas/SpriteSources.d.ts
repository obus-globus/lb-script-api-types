import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteSourcesAccessor } from '../../../../../../net/fabricmc/fabric/mixin/client/rendering/SpriteSourcesAccessor.d.ts'
import type { SpriteSource } from '../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource.d.ts'
export class SpriteSources extends Object implements SpriteSourcesAccessor {
    static CODEC: Codec<SpriteSource>;
    static FILE_CODEC: Codec<SpriteSource[]>;
    static bootstrap(): void;
    constructor()
}