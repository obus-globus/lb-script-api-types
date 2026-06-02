import type { JsonDeserializationContext } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Style } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { ClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { ClickEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEventAction.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StyleDeserializer_v1_16 extends Object implements JsonDeserializer<Style> {
    constructor()
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): Style;
    // private deserializeClickEvent(arg0: ClickEventAction, arg1: string): ClickEvent;
}