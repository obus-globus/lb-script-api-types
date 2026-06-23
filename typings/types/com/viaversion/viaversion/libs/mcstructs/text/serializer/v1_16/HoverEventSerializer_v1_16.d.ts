import type { JsonElement } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializer.d.ts'
import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { HoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { TextComponentSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/TextComponentSerializer.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class HoverEventSerializer_v1_16 extends Object implements JsonSerializer<HoverEvent> {
    constructor(arg0: TextComponentSerializer, arg1: SNbt<any>)
    // private sNbt: SNbt<any>;
    // private textComponentSerializer: TextComponentSerializer;
    serialize(arg0: HoverEvent, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}