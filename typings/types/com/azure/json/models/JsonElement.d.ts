import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonArray } from '../../../../com/azure/json/models/JsonArray.d.ts'
import type { JsonBoolean } from '../../../../com/azure/json/models/JsonBoolean.d.ts'
import type { JsonNull } from '../../../../com/azure/json/models/JsonNull.d.ts'
import type { JsonNumber } from '../../../../com/azure/json/models/JsonNumber.d.ts'
import type { JsonObject } from '../../../../com/azure/json/models/JsonObject.d.ts'
import type { JsonString } from '../../../../com/azure/json/models/JsonString.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class JsonElement extends Object implements JsonSerializable<JsonElement> {
    static fromJson<T extends JsonSerializable<T>>(paramarg0: number[]): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: JsonReader): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: InputStream): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: Reader): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: string): T;
    constructor()
    asArray(): JsonArray;
    asBoolean(): JsonBoolean;
    asNull(): JsonNull;
    asNumber(): JsonNumber;
    asObject(): JsonObject;
    asString(): JsonString;
    isArray(): boolean;
    isBoolean(): boolean;
    isNull(): boolean;
    isNumber(): boolean;
    isObject(): boolean;
    isString(): boolean;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJsonBytes(): number[];
    toJsonString(): string;
}