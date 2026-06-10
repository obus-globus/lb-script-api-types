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
export class GsonExtensionsKt extends Object {
    static deserialize(jsonDeserializationContext: JsonDeserializationContext, json: JsonElement): Object | null;
    static getOrNull(jsonArray: JsonElement[], index: number): JsonElement;
    static jsonArray(initialCapacity: number, builderAction: (param0: Object) => void): JsonElement[];
    static jsonArrayOf(elements: (Object | null)[]): JsonElement[];
    static jsonObject(builderAction: (param0: Object) => void): JsonObject;
    static parseTree(jsonReader: JsonReader): JsonElement;
    /**
     * Read JSON content
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/util/GsonExtensions.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/util/GsonExtensions.kt:40}
     */
    static readJson(paramarg0: File, paramarg1: Charset): Object | null;
    static readJson(paramarg0: InputStream, paramarg1: Charset): Object | null;
    static readJson(paramarg0: Reader, paramarg1: Gson): Object | null;
    static readJson(charSequence: CharSequence): Object | null;
}