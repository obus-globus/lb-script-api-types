import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdToken extends Object implements JsonSerializable<IdToken>, Serializable {
    static fromJson(paramarg0: number[]): Object | null;
    static fromJson(paramarg0: JsonReader): Object | null;
    static fromJson(paramarg0: InputStream): Object | null;
    static fromJson(paramarg0: Reader): Object | null;
    static fromJson(paramarg0: string): Object | null;
    constructor()
    // private audience: string;
    // private expirationTime: number;
    // private issuedAt: number;
    // private issuer: string;
    // private name: string;
    // private notBefore: number;
    // private objectIdentifier: string;
    // private preferredUsername: string;
    // private subject: string;
    // private tenantIdentifier: string;
    // private uniqueName: string;
    // private upn: string;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
}