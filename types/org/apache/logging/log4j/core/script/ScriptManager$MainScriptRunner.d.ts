import type { CompiledScript } from '../../../../../../javax/script/CompiledScript.d.ts'
import type { ScriptEngine } from '../../../../../../javax/script/ScriptEngine.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { ScriptManager$AbstractScriptRunner } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager$AbstractScriptRunner.d.ts'
export class ScriptManager$MainScriptRunner extends ScriptManager$AbstractScriptRunner {
    constructor(null_: ScriptManager$MainScriptRunner, scriptEngine: ScriptEngine, script: AbstractScript)
    // private compiledScript: CompiledScript;
    readonly script: AbstractScript;
    readonly scriptEngine: ScriptEngine;
    execute(bindings: Bindings): Object;
    getScript(): AbstractScript;
    getScriptEngine(): ScriptEngine;
}