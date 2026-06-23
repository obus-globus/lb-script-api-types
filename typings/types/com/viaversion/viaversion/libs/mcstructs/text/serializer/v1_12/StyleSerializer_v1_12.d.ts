import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { HoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { HoverEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEventAction.d.ts'
import type { SerializerMap } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/SerializerMap.d.ts'
import type { SerializerMap$Builder } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/SerializerMap$Builder.d.ts'
import type { StyleSerializer_v1_9 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/v1_9/StyleSerializer_v1_9.d.ts'
export class StyleSerializer_v1_12 extends StyleSerializer_v1_9 {
    constructor(arg0: SNbt<any>)
    createHoverEventSerializer(arg0: SerializerMap$Builder<HoverEvent, HoverEventAction, TextComponent>): SerializerMap<HoverEvent, HoverEventAction, TextComponent>;
}