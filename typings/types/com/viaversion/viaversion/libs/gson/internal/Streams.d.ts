import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonReader } from '../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Streams extends Object {
    static parse(paramarg0: JsonReader): JsonElement;
    static write(paramarg0: JsonElement, paramarg1: JsonWriter): void;
    static writerForAppendable(paramarg0: Appendable): Writer;
    private constructor()
}