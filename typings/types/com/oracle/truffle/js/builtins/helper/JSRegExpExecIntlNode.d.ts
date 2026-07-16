import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { IsPristineObjectNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/IsPristineObjectNode.d.ts'
import type { JSRegExpExecIntlNode$JSRegExpExecBuiltinNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNode$JSRegExpExecBuiltinNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsJSClassNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSClassNode.d.ts'
import type { IsJSObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSRegExpExecIntlNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): JSRegExpExecIntlNode;
    static createIsJSRegExpNode(): IsJSClassNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private getExecNode: PropertyGetNode;
    // private isCallableNode: IsCallableNode;
    // private isJSObjectNode: IsJSObjectNode;
    // private isPristineObjectNode: IsPristineObjectNode;
    // private specialCallNode: JSFunctionCallNode;
    // private callJSFunction(regExp: Object, input: Object, exec: Object, validResultProfile: InlinedConditionProfile): Object;
    // private doCallJSFunction(exec: Object, regExp: Object, input: Object): Object;
    doOther(regExp: Object, input: TruffleString, isCallableProfile: InlinedConditionProfile, validResultProfile: InlinedConditionProfile): Object;
    doRegExp(regExp: JSRegExpObject, input: TruffleString, builtinExec: JSRegExpExecIntlNode$JSRegExpExecBuiltinNode, isPristineProfile: InlinedConditionProfile, isCallableProfile: InlinedConditionProfile, validResultProfile: InlinedConditionProfile): Object;
    execute(regExp: Object, input: TruffleString): Object;
    // private getExecProperty(regExp: Object): Object;
    // private isCallable(obj: Object): boolean;
    // private isJSObject(obj: Object): boolean;
    // private isPristine(regExp: JSDynamicObject): boolean;
}