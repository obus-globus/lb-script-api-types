import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ManagedIdentityResponse extends Object implements JsonSerializable<ManagedIdentityResponse> {
    static fromJson<T extends JsonSerializable<T>>(paramarg0: number[]): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: JsonReader): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: InputStream): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: Reader): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: string): T;
    static fromJson(paramarg0: JsonReader): ManagedIdentityResponse;
    constructor()
    accessToken: string;
    clientId: string;
    expiresOn: string;
    resource: string;
    tokenType: string;
    getAccessToken(): string;
    getClientId(): string;
    getExpiresOn(): string;
    getResource(): string;
    getTokenType(): string;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
}