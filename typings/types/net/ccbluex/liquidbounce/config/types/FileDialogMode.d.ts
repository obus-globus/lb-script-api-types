import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/config/types/FileValue.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/FileValue.kt:91}
 */
export class FileDialogMode extends Enum<FileDialogMode> {
    static Companion: FileDialogMode$Companion;
    static OPEN_DIRECTORY: FileDialogMode;
    static OPEN_FILE: FileDialogMode;
    static SAVE_FILE: FileDialogMode;
    static getEntries(): FileDialogMode[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FileDialogMode;
    static values(): (Object | null)[];
    private constructor(translationKey: string, fallbackTitle: string)
    // private fallbackTitle: string;
    readonly title: string;
    // private translationKey: string;
    selectFiles(extensions: string[] | null): string[];
    protected selectFilesRaw(extensions: string[] | null): string | null;
    name(): "OPEN_FILE" | "SAVE_FILE" | "OPEN_DIRECTORY";
}