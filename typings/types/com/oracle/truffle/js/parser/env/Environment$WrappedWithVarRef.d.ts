import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$VarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
import type { Environment$WrappedVarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$WrappedVarRef.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Environment$WrappedWithVarRef extends Environment$WrappedVarRef {
    constructor(null_: Environment, name: Object, wrappee: Environment$VarRef, withObjVarRef: Environment$VarRef)
    // private withObjVarRef: Environment$VarRef;
    createAccessWrapperNode(delegateNode: JavaScriptNode, withAccessNode: JSTargetableNode): JavaScriptNode;
    createCompoundAssignNode(): Pair<() => JavaScriptNode, (param0: JavaScriptNode) => Object | null>;
    createWriteNode(rhs: JavaScriptNode): JavaScriptNode;
    withRequired(required: boolean): Environment$VarRef;
    withTDZCheck(): Environment$VarRef;
}