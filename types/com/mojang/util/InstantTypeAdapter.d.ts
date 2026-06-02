import type { TypeAdapter } from '../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
export class InstantTypeAdapter extends TypeAdapter<Instant> {
    constructor()
    read(arg0: JsonReader): Instant;
    write(arg0: JsonWriter, arg1: Instant): void;
}