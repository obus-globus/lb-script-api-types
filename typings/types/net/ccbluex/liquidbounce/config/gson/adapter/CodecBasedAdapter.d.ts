import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodecBasedAdapter$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/gson/adapter/CodecBasedAdapter$Companion.d.ts'
import type { DataComponentPatch } from '../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RegistryOps } from '../../../../../../net/minecraft/resources/RegistryOps.d.ts'
/**
 * [Fabric Documentation](https://docs.fabricmc.net/1.21/develop/codecs)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/adapter/CodecBasedAdapter.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/adapter/CodecBasedAdapter.kt:43}
 */
export class CodecBasedAdapter<T extends unknown> extends Object implements JsonDeserializer<T>, JsonSerializer<T> {
    static COMPONENT: CodecBasedAdapter<Component>;
    static Companion: CodecBasedAdapter$Companion;
    /**
     * For ItemStack
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/adapter/CodecBasedAdapter.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/adapter/CodecBasedAdapter.kt:74}
     */
    static DATA_COMPONENT_PATCH: CodecBasedAdapter<DataComponentPatch>;
    static TRANSLATED_COMPONENT: JsonSerializer<Component>;
    constructor(codec: Codec<T>)
    // private codec: Codec<T>;
    // private /*not mapped: */ getJsonOps(): RegistryOps<JsonElement>;
    deserialize(jsonElement: JsonElement | null, type: Type, jsonDeserializationContext: JsonDeserializationContext): T | null;
    serialize(t: T | null, type: Type, jsonSerializationContext: JsonSerializationContext): JsonElement | null;
}