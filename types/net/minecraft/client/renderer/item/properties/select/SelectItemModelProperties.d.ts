import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../../../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
export class SelectItemModelProperties extends Object {
    static CODEC: Codec<Object>;
    static ID_MAPPER: ExtraCodecs$LateBoundIdMapper<Identifier, Object>;
    static bootstrap(): void;
    constructor()
}