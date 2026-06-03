import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Credential extends Object implements JsonSerializable<Credential> {
    static fromJson(paramarg0: number[]): Object | null;
    static fromJson(paramarg0: JsonReader): Object | null;
    static fromJson(paramarg0: InputStream): Object | null;
    static fromJson(paramarg0: Reader): Object | null;
    static fromJson(paramarg0: string): Object | null;
    constructor()
    // private clientId: string;
    // private environment: string;
    // private homeAccountId: string;
    // private secret: string;
    // private userAssertionHash: string;
    clientId(): string;
    clientId(arg0: string): void;
    environment(): string;
    environment(arg0: string): void;
    homeAccountId(): string;
    homeAccountId(arg0: string): void;
    secret(): string;
    secret(arg0: string): void;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJsonBytes(): number[];
    toJsonString(): string;
    userAssertionHash(): string;
    userAssertionHash(arg0: string): void;
}