import type { JsonObject } from '../../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonSerializationContext } from '../../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class ScreenSerializer extends Object implements JsonSerializer<Screen> {
    static INSTANCE: ScreenSerializer;
    serialize(src: Screen | null, typeOfSrc: Type, context: JsonSerializationContext): JsonObject | null;
}