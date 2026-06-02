import type { JsonWriter } from '../../../com/azure/json/JsonWriter.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../java/io/Writer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JsonSerializable<T extends JsonSerializable<T>> extends Object{
    toJson(arg0: JsonWriter): JsonWriter;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJsonBytes(): number[];
    toJsonString(): string;
}