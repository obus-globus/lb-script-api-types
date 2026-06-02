import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RangeSelectItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/numeric/RangeSelectItemModelProperty.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../../../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
export class RangeSelectItemModelProperties extends Object {
    static ID_MAPPER: ExtraCodecs$LateBoundIdMapper<Identifier, Object>;
    static MAP_CODEC: MapCodec<RangeSelectItemModelProperty>;
    static bootstrap(): void;
    constructor()
}