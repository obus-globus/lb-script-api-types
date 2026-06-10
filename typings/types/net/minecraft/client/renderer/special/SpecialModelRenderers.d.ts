import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$Unbaked.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
export class SpecialModelRenderers extends Object {
    static CODEC: Codec<SpecialModelRenderer$Unbaked<Object>>;
    static ID_MAPPER: ExtraCodecs$LateBoundIdMapper<Identifier, MapCodec<SpecialModelRenderer$Unbaked<Object>>>;
    static bootstrap(): void;
    constructor()
}