import type { TypeAdapter } from '../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../com/google/gson/stream/JsonWriter.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class ByteBufferTypeAdapter extends TypeAdapter<ByteBuffer> {
    constructor()
    read(arg0: JsonReader): ByteBuffer;
    write(arg0: JsonWriter, arg1: ByteBuffer): void;
}