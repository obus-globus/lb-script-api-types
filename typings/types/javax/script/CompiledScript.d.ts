import type { ScriptContext } from '../../javax/script/ScriptContext.d.ts'
import type { ScriptEngine } from '../../javax/script/ScriptEngine.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class CompiledScript extends Object {
    constructor()
    eval(): Object;
    eval(arg0: Bindings): Object;
    eval(arg0: ScriptContext): Object;
    getEngine(): ScriptEngine;
}