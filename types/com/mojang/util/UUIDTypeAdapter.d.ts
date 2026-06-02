import type { TypeAdapter } from '../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../com/google/gson/stream/JsonWriter.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
export class UUIDTypeAdapter extends TypeAdapter<UUID> {
    constructor()
    read(arg0: JsonReader): UUID;
    write(arg0: JsonWriter, arg1: UUID): void;
}