import type { JsonOptions } from '../../../com/azure/json/JsonOptions.d.ts'
import type { JsonReader } from '../../../com/azure/json/JsonReader.d.ts'
import type { JsonWriter } from '../../../com/azure/json/JsonWriter.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Writer } from '../../../java/io/Writer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class JsonProviders extends Object {
    static createReader(paramarg0: number[]): JsonReader;
    static createReader(paramarg0: number[], paramarg1: JsonOptions): JsonReader;
    static createReader(paramarg0: InputStream): JsonReader;
    static createReader(paramarg0: InputStream, paramarg1: JsonOptions): JsonReader;
    static createReader(paramarg0: Reader): JsonReader;
    static createReader(paramarg0: Reader, paramarg1: JsonOptions): JsonReader;
    static createReader(paramarg0: string): JsonReader;
    static createReader(paramarg0: string, paramarg1: JsonOptions): JsonReader;
    static createWriter(paramarg0: OutputStream): JsonWriter;
    static createWriter(paramarg0: OutputStream, paramarg1: JsonOptions): JsonWriter;
    static createWriter(paramarg0: Writer): JsonWriter;
    static createWriter(paramarg0: Writer, paramarg1: JsonOptions): JsonWriter;
    private constructor()
}