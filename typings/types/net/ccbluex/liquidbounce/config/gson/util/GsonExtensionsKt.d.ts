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
    static array(self: JsonElement[], index: number): JsonElement[] | null;
    static array(self: JsonObject, key: string): JsonElement[] | null;
    static boolean(self: JsonElement[], index: number): boolean | null;
    static boolean(self: JsonObject, key: string): boolean | null;
    static deserialize<T extends unknown>(self: JsonDeserializationContext, json: JsonElement): T;
    static double(self: JsonElement[], index: number): number | null;
    static double(self: JsonObject, key: string): number | null;
    static getOrNull(self: JsonElement[], index: number): JsonElement | null;
    static int(self: JsonElement[], index: number): number | null;
    static int(self: JsonObject, key: string): number | null;
    static jsonArray(initialCapacity: number, builderAction: (param0: JsonArrayBuilder) => void): JsonElement[];
    static jsonArrayOf(...elements: JsonElement[]): JsonElement[];
    static jsonObject(builderAction: (param0: JsonObjectBuilder) => void): JsonObject;
    static long(self: JsonElement[], index: number): number | null;
    static long(self: JsonObject, key: string): number | null;
    static mapToJsonArray<T extends unknown>(self: T[], transform: (param0: T) => JsonElement | null): JsonElement[];
    static obj(self: JsonElement[], index: number): JsonObject | null;
    static obj(self: JsonObject, key: string): JsonObject | null;
    static parseTree(self: JsonReader): JsonElement;
    /**
     * Read JSON content
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/util/GsonExtensions.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/util/GsonExtensions.kt:43}
     */
    static readJson<T extends unknown>(self: File, charset: Charset): T;
    static readJson<T extends unknown>(self: InputStream, charset: Charset): T;
    static readJson<T extends unknown>(self: Reader, gson: Gson): T;
    static readJson<T extends unknown>(self: CharSequence): T;
    /**
     * Unlike {@link JsonObject.get} followed by `asString` and friends, these return `null` for an absent key
     * instead of throwing.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/util/GsonExtensions.kt#L151 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/util/GsonExtensions.kt:151}
     */
    static string(self: JsonElement[], index: number): string | null;
    static string(self: JsonObject, key: string): string | null;
}