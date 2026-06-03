import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { Credential } from '../../../../com/microsoft/aad/msal4j/Credential.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
export class IdTokenCacheEntity extends Credential {
    constructor()
    // private credentialType: string;
    // private realm: string;
    credentialType(): string;
    credentialType(arg0: string): void;
    getKey(): string;
    realm(): string;
    realm(arg0: string): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
}