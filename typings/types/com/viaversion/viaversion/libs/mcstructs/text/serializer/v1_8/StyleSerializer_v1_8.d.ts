import type { JsonElement } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializer.d.ts'
import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { Style } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { EventSerializers_v1_8 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/v1_8/EventSerializers_v1_8.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
export class StyleSerializer_v1_8 extends EventSerializers_v1_8 implements JsonSerializer<Style> {
    constructor(arg0: SNbt<any>)
    serialize(arg0: Style, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}