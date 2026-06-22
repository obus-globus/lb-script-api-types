import type { ScriptEngine } from '../../../../../../javax/script/ScriptEngine.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { ScriptManager$ScriptRunner } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager$ScriptRunner.d.ts'
export abstract class ScriptManager$AbstractScriptRunner extends Object implements ScriptManager$ScriptRunner {
    private constructor(null_: ScriptManager$AbstractScriptRunner)
    createBindings(): Bindings;
    getScript(): AbstractScript;
    getScriptEngine(): ScriptEngine;
}