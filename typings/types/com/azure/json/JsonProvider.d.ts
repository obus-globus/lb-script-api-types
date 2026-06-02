import type { JsonOptions } from '../../../com/azure/json/JsonOptions.d.ts'
import type { JsonReader } from '../../../com/azure/json/JsonReader.d.ts'
import type { JsonWriter } from '../../../com/azure/json/JsonWriter.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Writer } from '../../../java/io/Writer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JsonProvider extends Object{
    createReader(arg0: InputStream, arg1: JsonOptions): JsonReader;
    createReader(arg0: Reader, arg1: JsonOptions): JsonReader;
    createReader(arg0: number[], arg1: JsonOptions): JsonReader;
    createReader(arg0: string, arg1: JsonOptions): JsonReader;
    createWriter(arg0: OutputStream, arg1: JsonOptions): JsonWriter;
    createWriter(arg0: Writer, arg1: JsonOptions): JsonWriter;
}