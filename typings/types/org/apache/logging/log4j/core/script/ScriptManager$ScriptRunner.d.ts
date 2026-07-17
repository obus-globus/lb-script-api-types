import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ScriptEngine } from '../../../../../../javax/script/ScriptEngine.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
export interface ScriptManager$ScriptRunner extends Object{
    createBindings(): JavaMap<any, any>;
    execute(bindings: JavaMap<any, any>): Object;
    getScript(): AbstractScript;
    getScriptEngine(): ScriptEngine;
}