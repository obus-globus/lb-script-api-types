import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$VarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Environment$AbstractFrameVarRef extends Environment$VarRef {
    constructor(null_: Environment$AbstractFrameVarRef, scopeLevel: number, frameLevel: number, name: Object, resolvedEnv: Environment)
    readonly frameLevel: number;
    // private resolvedEnv: Environment;
    readonly scopeLevel: number;
    createDeleteNode(): JavaScriptNode;
    createScopeFrameNode(): ScopeFrameNode;
    // private getBlockScopeSlot(): JSFrameSlot;
    // private getEffectiveScopeLevel(): number;
    getFrameLevel(): number;
    getScopeLevel(): number;
    isFunctionLocal(): boolean;
    isGlobal(): boolean;
    isInCurrentFunctionFrame(): boolean;
}