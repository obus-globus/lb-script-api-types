import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { FileDialogMode } from '../../../../../net/ccbluex/liquidbounce/config/types/FileDialogMode.d.ts'
import type { FileValue$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/FileValue$Companion.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
/**
 * A value file input that supports different file dialog modes and optional file type filtering.
 * It will be treated as a relative path if it starts with {@link ConfigSystem.rootFolder}.
 *
 * @param name The name of the configuration option.
 * @param default The default selected file. The default value is {@link ConfigSystem.rootFolder}.
 * @param dialogMode Specifies the type of file dialog to show (e.g., open file, save file, choose folder).
 * @param supportedExtensions A set of allowed file extensions (without the dot), e.g., `setOf("txt", "json")`.        Use `null` to allow any file type. This is ignored if {@link dialogMode} is set to select directories.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/config/types/FileValue.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/FileValue.kt:42}
 */
export class FileValue extends Value<File> {
    static Companion: FileValue$Companion;
    constructor(name: string, default_: File | null, dialogMode: FileDialogMode, supportedExtensions: string[] | null)
    /**
     * The absolute file path.
     *
     * If the file is not absolute, it is resolved relative to the {@link ConfigSystem.rootFolder}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/config/types/FileValue.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/FileValue.kt:68}
     */
    readonly absoluteFile: File;
    readonly dialogMode: FileDialogMode;
    readonly supportedExtensions: string[] | null;
    deserializeFrom(gson: Gson, element: JsonElement): void;
}