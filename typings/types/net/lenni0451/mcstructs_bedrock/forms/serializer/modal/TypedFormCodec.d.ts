import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Form } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/Form.d.ts'
import type { ActionFormCodec } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/serializer/modal/ActionFormCodec.d.ts'
import type { CustomFormCodec } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/serializer/modal/CustomFormCodec.d.ts'
import type { ModalFormCodec } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/serializer/modal/ModalFormCodec.d.ts'
export class TypedFormCodec extends Object implements JsonDeserializer<Form>, JsonSerializer<Form> {
    constructor()
    // private actionFormCodec: ActionFormCodec;
    // private customFormCodec: CustomFormCodec;
    // private modalFormCodec: ModalFormCodec;
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): Form;
    serialize(arg0: Form, arg1: Type, arg2: JsonSerializationContext): JsonElement;
}