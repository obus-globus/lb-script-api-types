import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { InstanceDiscoveryMetadataEntry } from '../../../../com/microsoft/aad/msal4j/InstanceDiscoveryMetadataEntry.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AadInstanceDiscoveryResponse extends Object implements JsonSerializable<AadInstanceDiscoveryResponse> {
    static fromJson(paramarg0: JsonReader): AadInstanceDiscoveryResponse;
    constructor()
    // private correlationId: string;
    // private error: string;
    // private errorCodes: number[];
    // private errorDescription: string;
    // private metadata: InstanceDiscoveryMetadataEntry[];
    // private tenantDiscoveryEndpoint: string;
    correlationId(): string;
    error(): string;
    errorCodes(): number[];
    errorDescription(): string;
    metadata(): InstanceDiscoveryMetadataEntry[];
    tenantDiscoveryEndpoint(): string;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
}