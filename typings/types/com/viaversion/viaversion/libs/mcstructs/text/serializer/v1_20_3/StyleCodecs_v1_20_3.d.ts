import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { JsonConverter_v1_20_3 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/impl/v1_20_3/JsonConverter_v1_20_3.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Style } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { EntityHoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/EntityHoverEvent.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StyleCodecs_v1_20_3 extends Object {
    static CODEC: Codec<Style>;
    static MAP_CODEC: MapCodec<Style>;
    static getEntityHoverEventResult(paramarg0: DataConverter<Object>, paramarg1: TextComponent, paramarg2: Codec<TextComponent>, paramarg3: JsonConverter_v1_20_3): Result<EntityHoverEvent>;
    constructor()
}