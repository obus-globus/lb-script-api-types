import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { HoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { EntityHoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/EntityHoverEvent.d.ts'
import type { ItemHoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/ItemHoverEvent.d.ts'
import type { TextHoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/TextHoverEvent.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StyleCodecs_v1_21_6$HoverEventCodec extends Object {
    static CODEC: Codec<HoverEvent>;
    static ENTITY: MapCodec<EntityHoverEvent>;
    static ITEM: MapCodec<ItemHoverEvent>;
    static TEXT: MapCodec<TextHoverEvent>;
    constructor()
}