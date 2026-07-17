import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { Credential } from '../../../../com/microsoft/aad/msal4j/Credential.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
export class AccessTokenCacheEntity extends Credential implements JsonSerializable<Credential> {
    constructor()
    // private cachedAt: string;
    // private credentialType: string;
    // private expiresOn: string;
    // private extExpiresOn: string;
    // private realm: string;
    // private refreshOn: string;
    // private target: string;
    cachedAt(): string;
    cachedAt(arg0: string): void;
    credentialType(arg0: string): void;
    expiresOn(): string;
    expiresOn(arg0: string): void;
    extExpiresOn(): string;
    extExpiresOn(arg0: string): void;
    getKey(): string;
    realm(arg0: string): void;
    refreshOn(): string;
    refreshOn(arg0: string): void;
    target(): string;
    target(arg0: string): void;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
}