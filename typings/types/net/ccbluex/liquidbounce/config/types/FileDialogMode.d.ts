import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { FileDialogMode$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/FileDialogMode$Companion.d.ts'
/**
 * Defines the mode of the file dialog used in a {@link FileValue}.
 *
 * This controls how the file chooser behaves in the UI (e.g., ClickGUI or similar):
 *
 * - {@link OPEN_FILE}: Opens a dialog to select an existing file.
 * - {@link SAVE_FILE}: Opens a dialog to choose a file path for saving.
 * - {@link OPEN_DIRECTORY}: Opens a dialog to select an existing directory. File extension filters are ignored in this mode.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/FileValue.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/FileValue.kt:91}
 */
export class FileDialogMode extends Enum<FileDialogMode> {
    static Companion: FileDialogMode$Companion;
    static OPEN_DIRECTORY: FileDialogMode;
    static OPEN_FILE: FileDialogMode;
    static SAVE_FILE: FileDialogMode;
    static getEntries(): FileDialogMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): FileDialogMode;
    static values(): FileDialogMode[];
    private constructor(translationKey: string, fallbackTitle: string)
    // private fallbackTitle: string;
    readonly title: string;
    // private translationKey: string;
    selectFiles(extensions: string[] | null): string[];
    protected selectFilesRaw(extensions: string[] | null): string | null;
    name(): "OPEN_FILE" | "SAVE_FILE" | "OPEN_DIRECTORY";
}