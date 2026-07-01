import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$VarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
import type { GlobalEnvironment } from '../../../../../../com/oracle/truffle/js/parser/env/GlobalEnvironment.d.ts'
export class Environment$GlobalLexVarRef extends Environment$VarRef {
    constructor(null_: Environment, name: TruffleString, isConst: boolean, globalEnv: GlobalEnvironment)
    // private checkTDZ: boolean;
    // private globalEnv: GlobalEnvironment;
    // private isConst: boolean;
    // private required: boolean;
    createDeleteNode(): JavaScriptNode;
    createReadNode(): JavaScriptNode;
    createWriteNode(rhs: JavaScriptNode): JavaScriptNode;
    getFrameSlot(): JSFrameSlot;
    hasBeenDeclared(): boolean;
    hasTDZCheck(): boolean;
    isConst(): boolean;
    isFunctionLocal(): boolean;
    isGlobal(): boolean;
    setHasBeenDeclared(declared: boolean): void;
    withRequired(required: boolean): Environment$VarRef;
    withTDZCheck(): Environment$VarRef;
}