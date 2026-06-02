import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { Environment$VarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Environment$WrappedVarRef extends Environment$VarRef {
    constructor(null_: Environment$WrappedVarRef, name: Object, wrappee: Environment$VarRef)
    readonly wrappee: Environment$VarRef;
    createAccessWrapperNode(delegateNode: JavaScriptNode, scopeAccessNode: JSTargetableNode): JavaScriptNode;
    createDeleteNode(): JavaScriptNode;
    createReadNode(): JavaScriptNode;
    createWriteNode(rhs: JavaScriptNode): JavaScriptNode;
    getFrameSlot(): JSFrameSlot;
    getWrappee(): Environment$VarRef;
    hasTDZCheck(): boolean;
    isFunctionLocal(): boolean;
    isGlobal(): boolean;
}