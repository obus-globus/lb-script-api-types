import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientInfo extends Object implements JsonSerializable<ClientInfo> {
    static createFromJson(paramarg0: string): ClientInfo;
    constructor()
    // private uniqueIdentifier: string;
    // private uniqueTenantIdentifier: string;
    getUniqueIdentifier(): string;
    getUniqueTenantIdentifier(): string;
    toAccountIdentifier(): string;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
}