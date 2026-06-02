import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HudComponent } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponent.d.ts'
export class ReadOnlyComponentSerializer extends Object implements JsonSerializer<HudComponent> {
    static INSTANCE: ReadOnlyComponentSerializer;
    serialize(src: HudComponent, typeOfSrc: Type, context: JsonSerializationContext): JsonObject;
}