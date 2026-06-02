import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { Credential } from '../../../../com/microsoft/aad/msal4j/Credential.d.ts'
export class RefreshTokenCacheEntity extends Credential {
    constructor()
    // private credentialType: string;
    // private family_id: string;
    credentialType(): string;
    credentialType(arg0: string): void;
    family_id(): string;
    family_id(arg0: string): void;
    getKey(): string;
    isFamilyRT(): boolean;
    toJson(arg0: JsonWriter): JsonWriter;
}