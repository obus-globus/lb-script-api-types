import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RequestedClaimAdditionalInfo extends Object implements JsonSerializable<RequestedClaimAdditionalInfo> {
    constructor(arg0: boolean, arg1: string, arg2: string[])
    readonly essential: boolean;
    readonly value: string;
    readonly values: string[];
    fromJson(arg0: JsonReader): RequestedClaimAdditionalInfo;
    getValue(): string;
    getValues(): string[];
    isEssential(): boolean;
    setEssential(arg0: boolean): void;
    setValue(arg0: string): void;
    setValues(arg0: string[]): void;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
}