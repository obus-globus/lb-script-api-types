import type { Gson } from '../../../../../../com/google/gson/Gson.d.ts'
import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonReader } from '../../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { JsonArrayBuilder } from '../../../../../../net/ccbluex/liquidbounce/config/gson/util/JsonArrayBuilder.d.ts'
import type { JsonObjectBuilder } from '../../../../../../net/ccbluex/liquidbounce/config/gson/util/JsonObjectBuilder.d.ts'
export class GsonExtensionsKt extends Object {
    static deserialize<T extends unknown>(self: JsonDeserializationContext, json: JsonElement): T;
    static getOrNull(self: JsonElement[], index: number): JsonElement | null;
    static jsonArray(initialCapacity: number, builderAction: (param0: JsonArrayBuilder) => void): JsonElement[];
    static jsonArrayOf(...elements: JsonElement[]): JsonElement[];
    static jsonObject(builderAction: (param0: JsonObjectBuilder) => void): JsonObject;
    static mapToJsonArray<T extends unknown>(self: T[], transform: (param0: T) => JsonElement | null): JsonElement[];
    static parseTree(self: JsonReader): JsonElement;
    /**
     * Read JSON content
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/util/GsonExtensions.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/util/GsonExtensions.kt:43}
     */
    static readJson<T extends unknown>(self: File, charset: Charset): T;
    static readJson<T extends unknown>(self: InputStream, charset: Charset): T;
    static readJson<T extends unknown>(self: Reader, gson: Gson): T;
    static readJson<T extends unknown>(self: CharSequence): T;
}