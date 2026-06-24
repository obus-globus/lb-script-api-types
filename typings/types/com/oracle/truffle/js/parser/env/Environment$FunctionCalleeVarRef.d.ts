import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$AbstractArgumentsVarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$AbstractArgumentsVarRef.d.ts'
export class Environment$FunctionCalleeVarRef extends Environment$AbstractArgumentsVarRef {
    constructor(null_: Environment, frameLevel: number, name: TruffleString, current: Environment)
    createReadNode(): JavaScriptNode;
    createWriteNode(rhs: JavaScriptNode): JavaScriptNode;
}