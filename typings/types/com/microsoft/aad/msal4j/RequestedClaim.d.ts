import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { RequestedClaimAdditionalInfo } from '../../../../com/microsoft/aad/msal4j/RequestedClaimAdditionalInfo.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RequestedClaim extends Object implements JsonSerializable<RequestedClaim> {
    constructor()
    constructor(arg0: string, arg1: RequestedClaimAdditionalInfo)
    name: string;
    // private requestedClaimAdditionalInfo: RequestedClaimAdditionalInfo;
    any(): JavaMap<string, Object>;
    getRequestedClaimAdditionalInfo(): RequestedClaimAdditionalInfo;
    setRequestedClaimAdditionalInfo(arg0: RequestedClaimAdditionalInfo): void;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
}