import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$VarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
import type { Environment$WrappedVarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$WrappedVarRef.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Environment$WrappedGlobalVarRef extends Environment$WrappedVarRef {
    constructor(null_: Environment, name: Object, wrappee: Environment$VarRef)
    createAccessWrapperNode(delegateNode: JavaScriptNode, scopeAccessNode: JSTargetableNode): JavaScriptNode;
    withRequired(required: boolean): Environment$VarRef;
    withTDZCheck(): Environment$VarRef;
}