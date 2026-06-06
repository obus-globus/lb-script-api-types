import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket.d.ts'
/**
 * Packet Deserializer
 *
 * Allows deserializing packets from json to class
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt#L82 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt:82}
 */
export class PacketDeserializer extends Object implements JsonDeserializer<AxochatPacket> {
    constructor()
    // private packetRegistry: { [key: string]: Class<AxochatPacket> };
    /**
     * Gson invokes this call-back method during deserialization when it encounters a field of the
     * specified type.
     *
     * In the implementation of this call-back method, you should consider invoking
     * {@link JsonDeserializationContext.deserialize} method to create objects
     * for any non-trivial field of the returned object. However, you should never invoke it on
     * the same type passing `json` since that will cause an infinite loop (Gson will call your
     * call-back method again).
     *
     * @throws JsonParseException if json is not in the expected format of `typeofT`
     *
     * @param json The Json data being deserialized
     * @param typeOfT The type of the Object to deserialize to
     * @returns a deserialized object of the specified type typeOfT which is a subclass of `T`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt:102}
     */
    deserialize(json: JsonElement, typeOfT: Type, context: JsonDeserializationContext | null): AxochatPacket | null;
    register(name: string): void;
    /**
     * Register packet
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt:91}
     */
    registerPacket(packetName: string, packetClass: Class<AxochatPacket>): void;
}