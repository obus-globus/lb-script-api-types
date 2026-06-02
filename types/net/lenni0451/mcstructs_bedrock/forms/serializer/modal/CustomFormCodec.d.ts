import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CustomForm } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/types/CustomForm.d.ts'
export class CustomFormCodec extends Object implements JsonDeserializer<CustomForm>, JsonSerializer<CustomForm> {
    constructor()
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): CustomForm;
    serialize(arg0: CustomForm, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}