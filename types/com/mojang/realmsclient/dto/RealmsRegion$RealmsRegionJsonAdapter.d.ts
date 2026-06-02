import type { TypeAdapter } from '../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { RealmsRegion } from '../../../../com/mojang/realmsclient/dto/RealmsRegion.d.ts'
export class RealmsRegion$RealmsRegionJsonAdapter extends TypeAdapter<RealmsRegion> {
    constructor()
    read(jsonReader: JsonReader): RealmsRegion;
    write(jsonWriter: JsonWriter, realmsRegion: RealmsRegion): void;
}