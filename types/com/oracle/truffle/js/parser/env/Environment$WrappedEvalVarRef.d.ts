import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { Environment$VarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
import type { Environment$WrappedVarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$WrappedVarRef.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Environment$WrappedEvalVarRef extends Environment$WrappedVarRef {
    constructor(null_: Environment$WrappedEvalVarRef, name: Object, wrappee: Environment$VarRef, dynamicScopeRef: Environment$VarRef)
    // private dynamicScopeRef: Environment$VarRef;
    createAccessWrapperNode(delegateNode: JavaScriptNode, scopeAccessNode: JSTargetableNode): JSTargetableNode;
    withRequired(required: boolean): Environment$VarRef;
    withTDZCheck(): Environment$VarRef;
}