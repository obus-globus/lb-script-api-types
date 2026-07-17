import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UserDiscoveryResponse extends Object implements JsonSerializable<UserDiscoveryResponse> {
    static fromJson(paramarg0: JsonReader): UserDiscoveryResponse;
    constructor()
    // private accountType: string;
    // private cloudAudienceUrn: string;
    // private federationActiveAuthUrl: string;
    // private federationMetadataUrl: string;
    // private federationProtocol: string;
    // private version: number;
    accountType(): string;
    cloudAudienceUrn(): string;
    federationActiveAuthUrl(): string;
    federationMetadataUrl(): string;
    federationProtocol(): string;
    isAccountFederated(): boolean;
    isAccountManaged(): boolean;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
    version(): number;
}