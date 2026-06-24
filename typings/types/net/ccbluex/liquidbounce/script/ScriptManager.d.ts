import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PolyglotScript } from '../../../../net/ccbluex/liquidbounce/script/PolyglotScript.d.ts'
import type { ScriptDebugOptions } from '../../../../net/ccbluex/liquidbounce/script/ScriptDebugOptions.d.ts'
/**
 * The ScriptManager allows to extend the client by loading supported scripts at runtime.
 * Scripts can be written in various languages when installed through GraalVM
 * and can interact with the client through the Script API.
 *
 * Scripts are stored in the scripts directory and can be organized in subdirectories when using a main script file.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:33}
 */
export class ScriptManager extends Object {
    static INSTANCE: ScriptManager;
    // private isInitialized: boolean;
    /**
     * The root directory where all scripts are stored. This directory is created if it does not exist.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:49}
     */
    readonly root: File;
    /**
     * A list that holds all the loaded scripts.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:44}
     */
    readonly scripts: PolyglotScript[];
    /**
     * Disables all loaded scripts. This method iterates over the list of loaded scripts and disables each one.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L172 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:172}
     */
    disableAll(): void;
    /**
     * Enables all loaded scripts. This method iterates over the list of loaded scripts and enables each one.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L160 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:160}
     */
    enableAll(): void;
    initializeEngine(): void;
    /**
     * Loads all scripts found in the scripts directory. This method scans the directory for script files
     * and directories containing a main script file. It then loads and enables all found scripts.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:70}
     */
    loadAll(): void;
    // private loadCatched(file: File): PolyglotScript | null;
    /**
     * Loads a script from a file. This method creates a new Script object, initializes it, and adds it to the list
     * of loaded scripts.
     *
     * @param file The script file to load.
     * @param language The language of the script. If not specified, it is inferred from the file.
     * @returns The loaded script.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L127 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:127}
     */
    loadScript(file: File, language: string, debugOptions: ScriptDebugOptions): PolyglotScript;
    /**
     * Reloads all scripts. This method unloads all currently loaded scripts, loads them again from the scripts
     * directory, and then enables them. It logs a message upon successful completion.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L179 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:179}
     */
    reload(): void;
    /**
     * Unloads all currently loaded scripts. This method disables each script and clears the list of loaded scripts.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L104 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:104}
     */
    unloadAll(): void;
    /**
     * Unloads a specific script. This method disables the script and removes it from the list of loaded scripts.
     *
     * @param script The script to unload.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L149 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:149}
     */
    unloadScript(script: PolyglotScript): void;
}