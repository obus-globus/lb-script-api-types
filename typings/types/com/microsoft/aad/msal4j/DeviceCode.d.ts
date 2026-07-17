import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DeviceCode extends Object implements JsonSerializable<DeviceCode> {
    static fromJson(paramarg0: JsonReader): DeviceCode;
    constructor()
    // private clientId: string;
    // private correlationId: string;
    // private deviceCode: string;
    // private expiresIn: number;
    // private interval: number;
    // private message: string;
    // private scopes: string;
    // private userCode: string;
    // private verificationUri: string;
    clientId(): string;
    clientId(arg0: string): DeviceCode;
    correlationId(): string;
    correlationId(arg0: string): DeviceCode;
    deviceCode(): string;
    expiresIn(): number;
    interval(): number;
    message(): string;
    scopes(): string;
    scopes(arg0: string): DeviceCode;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
    userCode(): string;
    verificationUri(): string;
}