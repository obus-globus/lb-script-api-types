import type { TypeAdapter } from '../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { ServiceQuality } from '../../../../com/mojang/realmsclient/dto/ServiceQuality.d.ts'
export class ServiceQuality$RealmsServiceQualityJsonAdapter extends TypeAdapter<ServiceQuality> {
    constructor()
    read(jsonReader: JsonReader): ServiceQuality;
    write(jsonWriter: JsonWriter, quality: ServiceQuality): void;
}