import type { JsonDeserializationContext } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { HoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { HoverEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEventAction.d.ts'
import type { TextComponentSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/TextComponentSerializer.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class HoverEventDeserializer_v1_16 extends Object implements JsonDeserializer<HoverEvent> {
    constructor(arg0: TextComponentSerializer, arg1: SNbt<Object>)
    // private sNbt: SNbt<Object>;
    // private textComponentSerializer: TextComponentSerializer;
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): HoverEvent;
    deserialize(arg0: HoverEventAction, arg1: JsonElement): HoverEvent;
    deserializeLegacy(arg0: HoverEventAction, arg1: TextComponent): HoverEvent;
}