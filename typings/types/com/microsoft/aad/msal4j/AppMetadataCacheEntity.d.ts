import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AppMetadataCacheEntity extends Object implements JsonSerializable<AppMetadataCacheEntity> {
    static APP_METADATA_CACHE_ENTITY_ID: string;
    constructor()
    // private clientId: string;
    // private environment: string;
    // private familyId: string;
    clientId(): string;
    clientId(arg0: string): void;
    environment(): string;
    environment(arg0: string): void;
    familyId(): string;
    familyId(arg0: string): void;
    getKey(): string;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
}