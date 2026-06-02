import type { Reader } from '../../java/io/Reader.d.ts'
import type { ScriptContext } from '../../javax/script/ScriptContext.d.ts'
import type { ScriptEngineFactory } from '../../javax/script/ScriptEngineFactory.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ScriptEngine extends Object{
    createBindings(): Bindings;
    eval(arg0: Reader): Object;
    eval(arg0: Reader, arg1: Bindings): Object;
    eval(arg0: Reader, arg1: ScriptContext): Object;
    eval(arg0: string): Object;
    eval(arg0: string, arg1: Bindings): Object;
    eval(arg0: string, arg1: ScriptContext): Object;
    get(arg0: string): Object;
    getBindings(arg0: number): Bindings;
    getContext(): ScriptContext;
    getFactory(): ScriptEngineFactory;
    put(arg0: string, arg1: Object): void;
    setBindings(arg0: Bindings, arg1: number): void;
    setContext(arg0: ScriptContext): void;
}