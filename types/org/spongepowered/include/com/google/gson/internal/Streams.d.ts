import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JsonElement } from '../../../../../../../org/spongepowered/include/com/google/gson/JsonElement.d.ts'
import type { JsonReader } from '../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class Streams extends Object {
    static parse(paramarg0: JsonReader): JsonElement;
    static write(paramarg0: JsonElement, paramarg1: JsonWriter): void;
    static writerForAppendable(paramarg0: Appendable): Writer;
}