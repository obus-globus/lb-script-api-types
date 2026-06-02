import type { JsonObject } from '../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KDocSource } from '../../../me/ntrrgc/tsGenerator/KDocSource.d.ts'
import type { KDocSource$Entry } from '../../../me/ntrrgc/tsGenerator/KDocSource$Entry.d.ts'
export class KDocSource$Companion extends Object {
    MANIFEST_SCHEMA_VERSION: number;
    fromFile(path: string): KDocSource;
    fromJson(json: string): KDocSource;
    // private parseEntry(obj: JsonObject): KDocSource$Entry;
}