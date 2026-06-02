import type { JsonElement } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializer.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TextSerializer_v1_15 extends Object implements JsonSerializer<TextComponent> {
    constructor()
    serialize(arg0: TextComponent, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}