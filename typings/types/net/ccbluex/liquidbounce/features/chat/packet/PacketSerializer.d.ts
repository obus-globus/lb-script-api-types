import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket.d.ts'
/**
 * Packet Serializer
 *
 * Allows serializing packets from class to json
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt:39}
 */
export class PacketSerializer extends Object implements JsonSerializer<AxochatPacket> {
    constructor()
    // private packetRegistry: Map<Class<AxochatPacket>, string>;
    register(name: string): void;
    /**
     * Register packet
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt:46}
     */
    registerPacket(packetName: string, packetClass: Class<AxochatPacket>): void;
    /**
     * Gson invokes this call-back method during serialization when it encounters a field of the
     * specified type.
     *
     *
     * In the implementation of this call-back method, you should consider invoking
     * {@link JsonSerializationContext.serialize} method to create JsonElements for any
     * non-trivial field of the `src` object. However, you should never invoke it on the
     * `src` object itself since that will cause an infinite loop (Gson will call your
     * call-back method again).
     *
     * @param src the object that needs to be converted to Json.
     * @param typeOfSrc the actual type (fully genericized version) of the source object.
     * @returns a JsonElement corresponding to the specified object.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/PacketGsonExtension.kt:69}
     */
    serialize(src: AxochatPacket, typeOfSrc: Type, context: JsonSerializationContext): JsonElement;
}