import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { HoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { HoverEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEventAction.d.ts'
import type { SerializerMap } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/SerializerMap.d.ts'
import type { SerializerMap$Builder } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/SerializerMap$Builder.d.ts'
import type { StyleDeserializer_v1_9 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/v1_9/StyleDeserializer_v1_9.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StyleDeserializer_v1_12 extends StyleDeserializer_v1_9 {
    constructor(arg0: SNbt<Object>)
    createHoverEventSerializer(arg0: SerializerMap$Builder<HoverEvent, HoverEventAction, TextComponent>): SerializerMap<HoverEvent, HoverEventAction, TextComponent>;
}