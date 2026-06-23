import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { ScriptEngine } from '../../../../../../javax/script/ScriptEngine.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { ScriptManager$AbstractScriptRunner } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager$AbstractScriptRunner.d.ts'
import type { ScriptManager$MainScriptRunner } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager$MainScriptRunner.d.ts'
export class ScriptManager$ThreadLocalScriptRunner extends ScriptManager$AbstractScriptRunner {
    constructor(null_: ScriptManager$ThreadLocalScriptRunner, script: AbstractScript)
    // private runners: ThreadLocal<ScriptManager$MainScriptRunner>;
    readonly script: AbstractScript;
    execute(bindings: { [key: string]: any }): Object;
    getScript(): AbstractScript;
    getScriptEngine(): ScriptEngine;
}