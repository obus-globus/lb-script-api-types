import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConstructorBuiltins$CreateDynamicFunctionNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$CreateDynamicFunctionNode.d.ts'
import type { ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey.d.ts'
import type { ConstructorBuiltinsFactory$CreateDynamicFunctionNodeGen$CachedData } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltinsFactory$CreateDynamicFunctionNodeGen$CachedData.d.ts'
import type { ScriptNode } from '../../../../../com/oracle/truffle/js/nodes/ScriptNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
export class ConstructorBuiltinsFactory$CreateDynamicFunctionNodeGen extends ConstructorBuiltins$CreateDynamicFunctionNode {
    static create(paramcontext: JSContext, paramgeneratorFunction: boolean, paramasyncFunction: boolean): ConstructorBuiltins$CreateDynamicFunctionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, generatorFunction: boolean, asyncFunction: boolean)
    // private cached_cache: ConstructorBuiltinsFactory$CreateDynamicFunctionNodeGen$CachedData;
    // private state_0_: number;
    // private uncached_cache_: Map<ConstructorBuiltins$CreateDynamicFunctionNode$CachedSourceKey, ScriptNode>;
    // private executeAndSpecialize(arg0Value: string, arg1Value: string, arg2Value: string, arg3Value: ScriptOrModule): JSFunctionObject;
    executeFunction(arg0Value: string, arg1Value: string, arg2Value: string, arg3Value: ScriptOrModule): JSFunctionObject;
}