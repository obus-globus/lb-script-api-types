import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { ClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { ClickEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEventAction.d.ts'
import type { HoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { HoverEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEventAction.d.ts'
import type { SerializerMap } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/SerializerMap.d.ts'
import type { SerializerMap$Builder } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/SerializerMap$Builder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class EventSerializersBase extends Object {
    constructor(arg0: SNbt<any>)
    // private clickEventSerializer: SerializerMap<ClickEvent, ClickEventAction, string>;
    // private hoverEventSerializer: SerializerMap<HoverEvent, HoverEventAction, TextComponent>;
    createClickEventSerializer(arg0: SerializerMap$Builder<ClickEvent, ClickEventAction, string>): SerializerMap<ClickEvent, ClickEventAction, string>;
    createHoverEventSerializer(arg0: SerializerMap$Builder<HoverEvent, HoverEventAction, TextComponent>): SerializerMap<HoverEvent, HoverEventAction, TextComponent>;
}