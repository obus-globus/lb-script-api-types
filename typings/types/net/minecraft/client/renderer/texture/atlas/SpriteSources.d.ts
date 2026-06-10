import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteSourcesAccessor } from '../../../../../../net/fabricmc/fabric/mixin/client/rendering/SpriteSourcesAccessor.d.ts'
import type { SpriteSource } from '../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
export class SpriteSources extends Object implements SpriteSourcesAccessor {
    static CODEC: Codec<SpriteSource>;
    static FILE_CODEC: Codec<SpriteSource[]>;
    static bootstrap(): void;
    static getSpriteSourceCodecs(): ExtraCodecs$LateBoundIdMapper<Identifier, MapCodec<SpriteSource>>;
    constructor()
}