import type { JsonObject } from '../../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonSerializationContext } from '../../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerData } from '../../../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
export class ServerInfoSerializer extends Object implements JsonSerializer<ServerData> {
    static INSTANCE: ServerInfoSerializer;
    serialize(src: ServerData, typeOfSrc: Type, context: JsonSerializationContext): JsonObject;
}