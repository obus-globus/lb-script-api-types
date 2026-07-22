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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:40}
 */
export class ScriptManager extends Object {
    static INSTANCE: ScriptManager;
    // private isInitialized: boolean;
    /**
     * The root directory where all scripts are stored. This directory is created if it does not exist.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:52}
     */
    readonly root: File;
    /**
     * A list that holds all the loaded scripts.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:47}
     */
    readonly scripts: PolyglotScript[];
    /**
     * Disables all loaded scripts. This method iterates over the list of loaded scripts and disables each one.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L175 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:175}
     */
    disableAll(): void;
    /**
     * Enables all loaded scripts. This method iterates over the list of loaded scripts and enables each one.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L163 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:163}
     */
    enableAll(): void;
    initializeEngine(): void;
    /**
     * Loads all scripts found in the scripts directory. This method scans the directory for script files
     * and directories containing a main script file. It then loads and enables all found scripts.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:74}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L135 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:135}
     */
    loadScript(file: File, language: string, debugOptions: ScriptDebugOptions): PolyglotScript;
    /**
     * Reloads all scripts. This method unloads all currently loaded scripts, loads them again from the scripts
     * directory, and then enables them. It logs a message upon successful completion.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L183 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:183}
     */
    reload(): void;
    /**
     * Unloads all currently loaded scripts. This method disables each script and clears the list of loaded scripts.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L107 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:107}
     */
    unloadAll(): void;
    /**
     * Unloads a specific script. This method disables the script and removes it from the list of loaded scripts.
     *
     * @param script The script to unload.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt#L154 | src/main/kotlin/net/ccbluex/liquidbounce/script/ScriptManager.kt:154}
     */
    unloadScript(script: PolyglotScript): void;
}