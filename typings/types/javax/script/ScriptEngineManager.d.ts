import type { JavaMap } from '../../JavaMap.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Function } from '../../java/util/function/Function.d.ts'
import type { ScriptEngine } from '../../javax/script/ScriptEngine.d.ts'
import type { ScriptEngineFactory } from '../../javax/script/ScriptEngineFactory.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ScriptEngineManager extends Object {
    constructor()
    constructor(arg0: ClassLoader)
    // private engineSpis: ScriptEngineFactory[];
    // private extensionAssociations: JavaMap<string, ScriptEngineFactory>;
    // private globalScope: JavaMap<any, any>;
    // private mimeTypeAssociations: JavaMap<string, ScriptEngineFactory>;
    // private nameAssociations: JavaMap<string, ScriptEngineFactory>;
    get(arg0: string): Object;
    getBindings(): JavaMap<any, any>;
    // private getEngineBy(arg0: string, arg1: JavaMap<string, ScriptEngineFactory>, arg2: (param0: ScriptEngineFactory) => string[]): ScriptEngine;
    getEngineByExtension(arg0: string): ScriptEngine;
    getEngineByMimeType(arg0: string): ScriptEngine;
    getEngineByName(arg0: string): ScriptEngine;
    getEngineFactories(): ScriptEngineFactory[];
    // private getServiceLoader(arg0: ClassLoader): ScriptEngineFactory[];
    // private initEngines(arg0: ClassLoader): void;
    put(arg0: string, arg1: Object): void;
    registerEngineExtension(arg0: string, arg1: ScriptEngineFactory): void;
    registerEngineMimeType(arg0: string, arg1: ScriptEngineFactory): void;
    registerEngineName(arg0: string, arg1: ScriptEngineFactory): void;
    setBindings(arg0: JavaMap<any, any>): void;
}