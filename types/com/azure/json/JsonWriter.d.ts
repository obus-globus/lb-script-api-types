import type { JsonSerializable } from '../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriteContext } from '../../../com/azure/json/JsonWriteContext.d.ts'
import type { WriteValueCallback } from '../../../com/azure/json/WriteValueCallback.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export abstract class JsonWriter extends Object implements Closeable {
    constructor()
    close(): void;
    flush(): JsonWriter;
    getWriteContext(): JsonWriteContext;
    writeArray(arg0: T[], arg1: (param0: JsonWriter, param1: T) => void): JsonWriter;
    writeArray(arg0: T[], arg1: (param0: JsonWriter, param1: T) => void, arg2: boolean): JsonWriter;
    writeArray(arg0: T[], arg1: (param0: JsonWriter, param1: T) => void): JsonWriter;
    writeArray(arg0: T[], arg1: (param0: JsonWriter, param1: T) => void, arg2: boolean): JsonWriter;
    writeArrayField(arg0: string, arg1: T[], arg2: (param0: JsonWriter, param1: T) => void): JsonWriter;
    writeArrayField(arg0: string, arg1: T[], arg2: (param0: JsonWriter, param1: T) => void, arg3: boolean): JsonWriter;
    writeArrayField(arg0: string, arg1: T[], arg2: (param0: JsonWriter, param1: T) => void): JsonWriter;
    writeArrayField(arg0: string, arg1: T[], arg2: (param0: JsonWriter, param1: T) => void, arg3: boolean): JsonWriter;
    // private writeArrayInternal(arg0: T[], arg1: (param0: JsonWriter, param1: T) => void, arg2: string, arg3: boolean): JsonWriter;
    writeBinary(arg0: number[]): JsonWriter;
    writeBinaryField(arg0: string, arg1: number[]): JsonWriter;
    writeBoolean(arg0: boolean): JsonWriter;
    writeBoolean(arg0: boolean): JsonWriter;
    writeBooleanField(arg0: string, arg1: boolean): JsonWriter;
    writeBooleanField(arg0: string, arg1: boolean): JsonWriter;
    writeDouble(arg0: number): JsonWriter;
    writeDoubleField(arg0: string, arg1: number): JsonWriter;
    writeEndArray(): JsonWriter;
    writeEndObject(): JsonWriter;
    writeFieldName(arg0: string): JsonWriter;
    writeFloat(arg0: number): JsonWriter;
    writeFloatField(arg0: string, arg1: number): JsonWriter;
    writeInt(arg0: number): JsonWriter;
    writeIntField(arg0: string, arg1: number): JsonWriter;
    writeJson(arg0: JsonSerializable<Object>): JsonWriter;
    writeJsonField(arg0: string, arg1: JsonSerializable<Object>): JsonWriter;
    writeLong(arg0: number): JsonWriter;
    writeLongField(arg0: string, arg1: number): JsonWriter;
    writeMap(arg0: { [key: string]: T }, arg1: (param0: JsonWriter, param1: T) => void): JsonWriter;
    writeMap(arg0: { [key: string]: T }, arg1: (param0: JsonWriter, param1: T) => void, arg2: boolean): JsonWriter;
    writeMapField(arg0: string, arg1: { [key: string]: T }, arg2: (param0: JsonWriter, param1: T) => void): JsonWriter;
    writeMapField(arg0: string, arg1: { [key: string]: T }, arg2: (param0: JsonWriter, param1: T) => void, arg3: boolean): JsonWriter;
    // private writeMapInternal(arg0: string, arg1: { [key: string]: T }, arg2: (param0: JsonWriter, param1: T) => void, arg3: boolean): JsonWriter;
    writeNull(): JsonWriter;
    writeNullField(arg0: string): JsonWriter;
    writeNullableField<T extends Object | number | string | boolean>(arg0: string, arg1: T, arg2: (param0: JsonWriter, param1: T) => void): JsonWriter;
    writeNumber(arg0: Number): JsonWriter;
    writeNumberField(arg0: string, arg1: Number): JsonWriter;
    writeRawField(arg0: string, arg1: string): JsonWriter;
    writeRawValue(arg0: string): JsonWriter;
    writeStartArray(): JsonWriter;
    writeStartArray(arg0: string): JsonWriter;
    writeStartObject(): JsonWriter;
    writeStartObject(arg0: string): JsonWriter;
    writeString(arg0: string): JsonWriter;
    writeStringField(arg0: string, arg1: string): JsonWriter;
    writeUntyped(arg0: Object): JsonWriter;
    writeUntypedField(arg0: string, arg1: Object): JsonWriter;
}