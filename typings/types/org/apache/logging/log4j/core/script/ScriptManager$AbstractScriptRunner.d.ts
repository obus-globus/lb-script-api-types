import type { ScriptManager$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ScriptEngine } from '../../../../../../javax/script/ScriptEngine.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { ScriptManager } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager.d.ts'
import type { ScriptManager$ScriptRunner } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager$ScriptRunner.d.ts'
export abstract class ScriptManager$AbstractScriptRunner extends Object implements ScriptManager$ScriptRunner {
    private constructor(null_: ScriptManager)
    constructor(null_: ScriptManager, arg1: ScriptManager$1)
    createBindings(): { [key: string]: any };
    getScript(): AbstractScript;
    getScriptEngine(): ScriptEngine;
}