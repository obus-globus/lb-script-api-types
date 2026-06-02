import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$AbstractArgumentsVarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$AbstractArgumentsVarRef.d.ts'
export class Environment$ActiveModuleRef extends Environment$AbstractArgumentsVarRef {
    constructor(null_: Environment$ActiveModuleRef, scopeLevel: number, frameLevel: number, current: Environment)
    createReadNode(): JavaScriptNode;
    createWriteNode(rhs: JavaScriptNode): JavaScriptNode;
}