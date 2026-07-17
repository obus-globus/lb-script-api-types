import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { RequestedClaim } from '../../../../com/microsoft/aad/msal4j/RequestedClaim.d.ts'
import type { RequestedClaimAdditionalInfo } from '../../../../com/microsoft/aad/msal4j/RequestedClaimAdditionalInfo.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClaimsRequest extends Object implements JsonSerializable<ClaimsRequest> {
    static formatAsClaimsRequest(paramarg0: string): ClaimsRequest;
    constructor()
    // private accessTokenRequestedClaims: RequestedClaim[];
    idTokenRequestedClaims: RequestedClaim[];
    // private userInfoRequestedClaims: RequestedClaim[];
    formatAsJSONString(): string;
    getIdTokenRequestedClaims(): RequestedClaim[];
    requestClaimInAccessToken(arg0: string, arg1: RequestedClaimAdditionalInfo): void;
    requestClaimInIdToken(arg0: string, arg1: RequestedClaimAdditionalInfo): void;
    requestClaimInUserInfo(arg0: string, arg1: RequestedClaimAdditionalInfo): void;
    setIdTokenRequestedClaims(arg0: RequestedClaim[]): void;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
    // private writeClaimsToJsonWriter(arg0: JsonWriter, arg1: string, arg2: RequestedClaim[]): void;
}