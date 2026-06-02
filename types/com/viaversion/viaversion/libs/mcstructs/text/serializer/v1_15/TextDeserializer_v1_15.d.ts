import type { JsonDeserializationContext } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TextDeserializer_v1_15 extends Object implements JsonDeserializer<TextComponent> {
    constructor()
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): TextComponent;
}