import type { TypeAdapter } from '../../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { InputConstants$Key } from '../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Regex } from '../../../../../../kotlin/text/Regex.d.ts'
import type { SimpleStringTypeAdapter$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/gson/adapter/SimpleStringTypeAdapter$Companion.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SimpleStringTypeAdapter<T extends Object | number | string | boolean> extends TypeAdapter<T> {
    static Companion: SimpleStringTypeAdapter$Companion;
    static FILE: SimpleStringTypeAdapter<File>;
    static IDENTIFIER: SimpleStringTypeAdapter<Identifier>;
    static INPUT_KEY: SimpleStringTypeAdapter<InputConstants$Key>;
    static KT_REGEX: SimpleStringTypeAdapter<Regex>;
    constructor(fromString: (param0: string) => T, toString: (param0: T) => string)
    readonly fromString: (param0: string) => T;
    readonly toString: (param0: T) => string;
    read(reader: JsonReader): T | null;
    write(writer: JsonWriter, value: T | null): void;
}