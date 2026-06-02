import type { InputConstants$Key } from '../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Regex } from '../../../../../../kotlin/text/Regex.d.ts'
import type { SimpleStringTypeAdapter } from '../../../../../../net/ccbluex/liquidbounce/config/gson/adapter/SimpleStringTypeAdapter.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SimpleStringTypeAdapter$Companion extends Object {
    FILE: SimpleStringTypeAdapter<File>;
    IDENTIFIER: SimpleStringTypeAdapter<Identifier>;
    INPUT_KEY: SimpleStringTypeAdapter<InputConstants$Key>;
    KT_REGEX: SimpleStringTypeAdapter<Regex>;
}