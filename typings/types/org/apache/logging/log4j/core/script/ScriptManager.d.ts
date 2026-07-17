import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { ScriptEngineManager } from '../../../../../../javax/script/ScriptEngineManager.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { ScriptManager$ScriptRunner } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager$ScriptRunner.d.ts'
import type { FileWatcher } from '../../../../../../org/apache/logging/log4j/core/util/FileWatcher.d.ts'
import type { WatchManager } from '../../../../../../org/apache/logging/log4j/core/util/WatchManager.d.ts'
export class ScriptManager extends Object implements FileWatcher {
    constructor(configuration: Configuration, watchManager: WatchManager, scriptLanguages: string)
    readonly allowedLanguages: string[];
    // private configuration: Configuration;
    // private languages: string;
    // private manager: ScriptEngineManager;
    // private scriptRunners: JavaMap<string, ScriptManager$ScriptRunner>;
    // private watchManager: WatchManager;
    addScript(script: AbstractScript): boolean;
    createBindings(script: AbstractScript): JavaMap<any, any>;
    execute(id: string, bindings: JavaMap<any, any>): Object;
    fileModified(file: File): void;
    getAllowedLanguages(): string[];
    getScript(id: string): AbstractScript;
    // private getScriptRunner(script: AbstractScript): ScriptManager$ScriptRunner;
}