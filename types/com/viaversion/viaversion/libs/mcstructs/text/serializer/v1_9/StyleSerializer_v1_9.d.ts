import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { ClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { ClickEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEventAction.d.ts'
import type { HoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { HoverEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEventAction.d.ts'
import type { SerializerMap } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/SerializerMap.d.ts'
import type { SerializerMap$Builder } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/SerializerMap$Builder.d.ts'
import type { StyleSerializer_v1_8 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/v1_8/StyleSerializer_v1_8.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StyleSerializer_v1_9 extends StyleSerializer_v1_8 {
    constructor(arg0: SNbt<Object>)
    createClickEventSerializer(arg0: SerializerMap$Builder<ClickEvent, ClickEventAction, string>): SerializerMap<ClickEvent, ClickEventAction, string>;
    createHoverEventSerializer(arg0: SerializerMap$Builder<HoverEvent, HoverEventAction, TextComponent>): SerializerMap<HoverEvent, HoverEventAction, TextComponent>;
}