import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { HoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { HoverEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEventAction.d.ts'
import type { TextComponentSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/TextComponentSerializer.d.ts'
import type { HoverEventDeserializer_v1_16 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/v1_16/HoverEventDeserializer_v1_16.d.ts'
export class HoverEventDeserializer_v1_18 extends HoverEventDeserializer_v1_16 {
    constructor(arg0: TextComponentSerializer, arg1: SNbt<any>)
    deserializeLegacy(arg0: HoverEventAction, arg1: TextComponent): HoverEvent;
}