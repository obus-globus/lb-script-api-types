import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { JsonReader } from '../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Writer } from '../../../java/io/Writer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class TypeAdapter<T extends Object | number | string | boolean> extends Object {
    constructor()
    fromJson(arg0: Reader): T;
    fromJson(arg0: string): T;
    fromJsonTree(arg0: JsonElement): T;
    nullSafe(): TypeAdapter<T>;
    read(arg0: JsonReader): T;
    toJson(arg0: T): string;
    toJson(arg0: Writer, arg1: T): void;
    toJsonTree(arg0: T): JsonElement;
    write(arg0: JsonWriter, arg1: T): void;
}