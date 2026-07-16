import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AssumedValue } from '../../../../../com/oracle/truffle/api/utilities/AssumedValue.d.ts'
import type { ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ScriptNode } from '../../../../../com/oracle/truffle/js/nodes/ScriptNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
export abstract class ConstructorBuiltins$CreateDynamicFunctionNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, generatorFunction: boolean, asyncFunction: boolean)
    // private asyncFunction: boolean;
    // private context: JSContext;
    // private generatorFunction: boolean;
    cacheLookup(cache: Map<ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey, ScriptNode>, sourceKey: ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey): ScriptNode;
    createAssumedValue(): AssumedValue<ScriptNode>;
    createCache(): Map<ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey, ScriptNode>;
    doCached(paramList: string, body: string, sourceName: string, activeScriptOrModule: ScriptOrModule, cachedParamList: string, cachedBody: string, cachedSourceName: string, cachedParsedFunction: AssumedValue<ScriptNode>): JSFunctionObject;
    doUncached(paramList: string, body: string, sourceName: string, activeScriptOrModule: ScriptOrModule, cache: Map<ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey, ScriptNode>): JSFunctionObject;
    executeFunction(paramList: string, body: string, sourceName: string, activeScriptOrModule: ScriptOrModule): JSFunctionObject;
    // private parseAndEvalFunction(cache: Map<ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey, ScriptNode>, realm: JSRealm, paramList: string, body: string, sourceName: string, activeScriptOrModule: ScriptOrModule): JSFunctionObject;
    parseFunction(paramList: string, body: string, sourceName: string, activeScriptOrModule: ScriptOrModule): ScriptNode;
}