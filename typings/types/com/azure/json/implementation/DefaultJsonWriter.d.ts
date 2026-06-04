import type { JsonOptions } from '../../../../com/azure/json/JsonOptions.d.ts'
import type { JsonWriteContext } from '../../../../com/azure/json/JsonWriteContext.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { JsonGenerator } from '../../../../com/azure/json/implementation/jackson/core/JsonGenerator.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
export class DefaultJsonWriter extends JsonWriter {
    static toStream(paramarg0: OutputStream, paramarg1: JsonOptions): JsonWriter;
    static toWriter(paramarg0: Writer, paramarg1: JsonOptions): JsonWriter;
    private constructor(arg0: JsonGenerator, arg1: JsonOptions)
    // private context: JsonWriteContext;
    // private generator: JsonGenerator;
    close(): void;
    flush(): JsonWriter;
    getWriteContext(): JsonWriteContext;
    writeBinary(arg0: number[]): JsonWriter;
    writeBoolean(arg0: boolean): JsonWriter;
    writeDouble(arg0: number): JsonWriter;
    writeEndArray(): JsonWriter;
    writeEndObject(): JsonWriter;
    writeFieldName(arg0: string): JsonWriter;
    writeFloat(arg0: number): JsonWriter;
    writeInt(arg0: number): JsonWriter;
    writeLong(arg0: number): JsonWriter;
    writeNull(): JsonWriter;
    writeRawValue(arg0: string): JsonWriter;
    writeStartArray(): JsonWriter;
    writeStartArray(arg0: string): JsonWriter;
    writeStartObject(): JsonWriter;
    writeStartObject(arg0: string): JsonWriter;
    writeString(arg0: string): JsonWriter;
}