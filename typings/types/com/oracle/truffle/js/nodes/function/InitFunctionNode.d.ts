import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutConstantNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutConstantNode.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
export class InitFunctionNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramstrictProperties: boolean, paramisConstructor: boolean, paramisBound: boolean, paramisGenerator: boolean, paramprototypeNotWritable: boolean): InitFunctionNode;
    static create(paramfunctionData: JSFunctionData): InitFunctionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(functionData: JSFunctionData)
    constructor(functionData: JSFunctionData, context: JSContext, strictProperties: boolean, isConstructor: boolean, isBound: boolean, isGenerator: boolean, prototypeNotWritable: boolean)
    // private argumentsCallerFlags: number;
    // private context: JSContext;
    // private functionData: JSFunctionData;
    // private lengthFlags: number;
    // private nameFlags: number;
    // private prototypeFlags: number;
    // private setArgumentsAccessorNode: DynamicObject$PutNode;
    // private setArgumentsNode: DynamicObject$PutConstantNode;
    // private setCallerAccessorNode: DynamicObject$PutNode;
    // private setCallerNode: DynamicObject$PutConstantNode;
    // private setLengthNode: DynamicObject$PutConstantNode;
    // private setNameNode: DynamicObject$PutConstantNode;
    // private setPrototypeNode: DynamicObject$PutConstantNode;
    // private strictProperties: boolean;
    execute(function_: JSFunctionObject): JSFunctionObject;
    execute(function_: JSFunctionObject, functionData: JSFunctionData): JSFunctionObject;
    execute(function_: JSFunctionObject, length: number, name: TruffleString): JSFunctionObject;
}