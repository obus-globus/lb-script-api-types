import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptLanguage } from '../../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSInteropCallNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSInteropGetIteratorNode extends JSInteropCallNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doDefault(receiver: JSObject, language: JavaScriptLanguage, hasIteratorCheck: boolean, iteratorPropertyGetNode: PropertyGetNode, isCallableNode: IsCallableNode, callNode: JSFunctionCallNode, nextPropertyGetNode: PropertyGetNode, exceptionBranch: InlinedBranchProfile): Object;
    execute(receiver: JSObject, language: JavaScriptLanguage, hasIteratorCheck: boolean): Object;
    getIterator(receiver: JSObject, language: JavaScriptLanguage): Object;
    hasIterator(receiver: JSObject, language: JavaScriptLanguage): boolean;
}