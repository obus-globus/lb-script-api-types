import type { JsonElement } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializer.d.ts'
import type { Style } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { ClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StyleSerializer_v1_16 extends Object implements JsonSerializer<Style> {
    constructor()
    serialize(arg0: Style, arg1: Type, arg2: JsonSerializationContext): JsonElement;
    // private serializeClickEvent(arg0: ClickEvent): string;
}