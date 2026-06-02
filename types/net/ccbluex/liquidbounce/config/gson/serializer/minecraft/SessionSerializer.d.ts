import type { JsonObject } from '../../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonSerializationContext } from '../../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { User } from '../../../../../../../net/minecraft/client/User.d.ts'
export class SessionSerializer extends Object implements JsonSerializer<User> {
    static INSTANCE: SessionSerializer;
    serialize(src: User | null, typeOfSrc: Type, context: JsonSerializationContext): JsonObject | null;
}