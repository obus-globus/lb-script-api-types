import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroupSerializer$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/gson/serializer/ModeValueGroupSerializer$Companion.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
export class ModeValueGroupSerializer extends Object implements JsonSerializer<ModeValueGroup<Mode>> {
    static Companion: ModeValueGroupSerializer$Companion;
    static FILE_SERIALIZER: ModeValueGroupSerializer;
    static INTEROP_SERIALIZER: ModeValueGroupSerializer;
    private constructor(withValueType: boolean)
    // private withValueType: boolean;
    serialize(src: ModeValueGroup<Mode>, typeOfSrc: Type, context: JsonSerializationContext): JsonElement;
}