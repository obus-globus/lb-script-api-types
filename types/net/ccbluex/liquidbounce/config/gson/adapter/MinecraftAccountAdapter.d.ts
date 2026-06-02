import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MinecraftAccount } from '../../../../../../net/ccbluex/liquidbounce/authlib/account/MinecraftAccount.d.ts'
export class MinecraftAccountAdapter extends Object implements JsonDeserializer<MinecraftAccount>, JsonSerializer<MinecraftAccount> {
    static INSTANCE: MinecraftAccountAdapter;
    deserialize(json: JsonElement, typeOfT: Type, context: JsonDeserializationContext | null): MinecraftAccount;
    serialize(src: MinecraftAccount, typeOfSrc: Type, context: JsonSerializationContext): JsonObject;
}