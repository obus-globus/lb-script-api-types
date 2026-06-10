import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemTintSource } from '../../../../../net/minecraft/client/color/item/ItemTintSource.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
export class ItemTintSources extends Object {
    static CODEC: Codec<ItemTintSource>;
    static ID_MAPPER: ExtraCodecs$LateBoundIdMapper<Identifier, MapCodec<ItemTintSource>>;
    static bootstrap(): void;
    constructor()
}