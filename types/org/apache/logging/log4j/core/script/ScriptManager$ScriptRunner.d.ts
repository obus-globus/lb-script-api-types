import type { ScriptEngine } from '../../../../../../javax/script/ScriptEngine.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
export interface ScriptManager$ScriptRunner extends Object{
    createBindings(): Bindings;
    execute(bindings: Bindings): Object;
    getScript(): AbstractScript;
    getScriptEngine(): ScriptEngine;
}