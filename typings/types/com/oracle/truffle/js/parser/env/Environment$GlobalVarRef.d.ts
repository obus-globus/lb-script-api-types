import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$VarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
export class Environment$GlobalVarRef extends Environment$VarRef {
    constructor(null_: Environment, name: TruffleString)
    private constructor(null_: Environment, name: TruffleString, required: boolean)
    // private required: boolean;
    createDeleteNode(): JavaScriptNode;
    createReadNode(): JavaScriptNode;
    createWriteNode(rhs: JavaScriptNode): JavaScriptNode;
    getFrameSlot(): JSFrameSlot;
    isGlobal(): boolean;
    withRequired(required: boolean): Environment$VarRef;
}