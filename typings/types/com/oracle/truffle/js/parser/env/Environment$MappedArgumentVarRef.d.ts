import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$AbstractArgumentsVarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$AbstractArgumentsVarRef.d.ts'
import type { Environment$VarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
export class Environment$MappedArgumentVarRef extends Environment$AbstractArgumentsVarRef {
    constructor(null_: Environment$MappedArgumentVarRef, frameSlot: JSFrameSlot, scopeLevel: number, frameLevel: number, name: TruffleString, current: Environment)
    readonly frameSlot: JSFrameSlot;
    // private parameterIndex: number;
    createReadNode(): JavaScriptNode;
    createWriteNode(rhs: JavaScriptNode): JavaScriptNode;
    // private findArgumentsObject(): Environment$VarRef;
}