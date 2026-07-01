import type { ScriptEngine } from '../../../../../../javax/script/ScriptEngine.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { ScriptManager } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager.d.ts'
import type { ScriptManager$ScriptRunner } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager$ScriptRunner.d.ts'
export abstract class ScriptManager$AbstractScriptRunner extends Object implements ScriptManager$ScriptRunner {
    constructor(null_: ScriptManager, arg1: any)
    createBindings(): { [key: string]: any };
    getScript(): AbstractScript;
    getScriptEngine(): ScriptEngine;
}