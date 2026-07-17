import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Credential extends Object implements JsonSerializable<Credential> {
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
    toJsonBytes(): number[];
    toJsonString(): string;
    userAssertionHash(): string;
    userAssertionHash(arg0: string): void;
}