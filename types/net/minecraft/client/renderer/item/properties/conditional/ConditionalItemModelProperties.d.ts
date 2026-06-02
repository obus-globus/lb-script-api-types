import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConditionalItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/conditional/ConditionalItemModelProperty.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../../../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
export class ConditionalItemModelProperties extends Object {
    static ID_MAPPER: ExtraCodecs$LateBoundIdMapper<Identifier, Object>;
    static MAP_CODEC: MapCodec<ConditionalItemModelProperty>;
    static bootstrap(): void;
    constructor()
}