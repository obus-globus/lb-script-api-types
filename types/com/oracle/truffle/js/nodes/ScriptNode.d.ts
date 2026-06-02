import type { RootCallTarget } from '../../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { IndirectCallNode } from '../../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { FunctionRootNode } from '../../../../../com/oracle/truffle/js/nodes/function/FunctionRootNode.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionData } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ScriptNode extends Object {
    static fromFunctionData(paramfunctionData: JSFunctionData): ScriptNode;
    static fromFunctionRoot(paramroot: FunctionRootNode): ScriptNode;
    private constructor(functionData: JSFunctionData, callTarget: RootCallTarget)
    readonly callTarget: RootCallTarget;
    readonly functionData: JSFunctionData;
    argumentsToRun(realm: JSRealm): Object[];
    argumentsToRunWithArguments(realm: JSRealm, args: Object[]): Object[];
    argumentsToRunWithThisObject(realm: JSRealm, thisObj: Object): Object[];
    argumentsToRunWithThisObjectWithArguments(realm: JSRealm, thisObj: Object, args: Object[]): Object[];
    // private createFunction(realm: JSRealm, materializedFrame: MaterializedFrame): JSFunctionObject;
    getCallTarget(): RootCallTarget;
    getFunctionData(): JSFunctionData;
    getRootNode(): RootNode;
    run(realm: JSRealm): Object;
    run(args: Object[]): Object;
    runEval(callNode: IndirectCallNode, realm: JSRealm): Object;
    runEval(callNode: IndirectCallNode, realm: JSRealm, thisObj: Object, materializedFrame: MaterializedFrame): Object;
}