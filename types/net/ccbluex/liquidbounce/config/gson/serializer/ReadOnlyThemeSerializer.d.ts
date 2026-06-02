import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Theme } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/Theme.d.ts'
export class ReadOnlyThemeSerializer extends Object implements JsonSerializer<Theme> {
    static INSTANCE: ReadOnlyThemeSerializer;
    serialize(src: Theme, typeOfSrc: Type, context: JsonSerializationContext): JsonObject;
}