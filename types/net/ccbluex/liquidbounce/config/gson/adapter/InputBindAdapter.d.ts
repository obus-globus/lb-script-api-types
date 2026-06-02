import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InputBind } from '../../../../../../net/ccbluex/liquidbounce/utils/input/InputBind.d.ts'
export class InputBindAdapter extends Object implements JsonDeserializer<InputBind>, JsonSerializer<InputBind> {
    static INSTANCE: InputBindAdapter;
    deserialize(json: JsonElement, typeOfT: Type, context: JsonDeserializationContext): InputBind;
    serialize(src: InputBind, typeOfSrc: Type, context: JsonSerializationContext): JsonElement;
}