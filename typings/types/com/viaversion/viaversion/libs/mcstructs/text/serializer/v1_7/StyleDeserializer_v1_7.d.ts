import type { JsonDeserializationContext } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { Style } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { EventSerializers_v1_7 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/v1_7/EventSerializers_v1_7.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
export class StyleDeserializer_v1_7 extends EventSerializers_v1_7 implements JsonDeserializer<Style> {
    constructor(arg0: SNbt<any>)
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): Style;
}