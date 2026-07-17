import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$GetPropertyFlagsNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$GetPropertyFlagsNode.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { HasPropertyCacheNode } from '../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private functionLengthGetPropertyFlags: DynamicObject$GetPropertyFlagsNode;
    // private functionNameGetPropertyFlags: DynamicObject$GetPropertyFlagsNode;
    // private getFunctionLengthNode: PropertyGetNode;
    // private getFunctionNameNode: PropertyGetNode;
    // private hasFunctionLengthNode: HasPropertyCacheNode;
    // private hasFunctionLengthProfile: ConditionProfile;
    // private hasIntegerFunctionLengthProfile: ConditionProfile;
    // private isJSFunctionProfile: ConditionProfile;
    // private copyLength(boundFunction: JSFunctionObject, target: Object, argCount: number): void;
    // private copyName(boundFunction: JSFunctionObject, target: Object, prefix: TruffleString): void;
    execute(boundFunction: JSFunctionObject, targetFunction: JSFunctionObject, prefix: TruffleString, argCount: number): void;
    execute(boundFunction: JSFunctionObject, target: Object, prefix: TruffleString, argCount: number): void;
}