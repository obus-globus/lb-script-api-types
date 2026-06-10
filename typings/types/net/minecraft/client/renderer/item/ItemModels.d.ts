import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
export class ItemModels extends Object {
    static CODEC: Codec<ItemModel$Unbaked>;
    static ID_MAPPER: ExtraCodecs$LateBoundIdMapper<Identifier, MapCodec<ItemModel$Unbaked>>;
    static bootstrap(): void;
    constructor()
}