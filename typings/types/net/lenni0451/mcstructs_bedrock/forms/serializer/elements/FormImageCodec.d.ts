import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FormImage } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormImage.d.ts'
export class FormImageCodec extends Object implements JsonDeserializer<FormImage>, JsonSerializer<FormImage> {
    constructor()
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): FormImage;
    serialize(arg0: FormImage, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}