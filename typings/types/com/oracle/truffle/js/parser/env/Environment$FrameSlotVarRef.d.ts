import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$AbstractFrameVarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$AbstractFrameVarRef.d.ts'
import type { Environment$VarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Environment$FrameSlotVarRef extends Environment$AbstractFrameVarRef {
    constructor(null_: Environment$FrameSlotVarRef, frameSlot: JSFrameSlot, scopeLevel: number, frameLevel: number, name: Object, current: Environment)
    constructor(null_: Environment$FrameSlotVarRef, frameSlot: JSFrameSlot, scopeLevel: number, frameLevel: number, name: Object, current: Environment, checkTDZ: boolean)
    // private checkTDZ: boolean;
    readonly frameSlot: JSFrameSlot;
    createReadNode(): JavaScriptNode;
    createWriteNode(rhs: JavaScriptNode): JavaScriptNode;
    getFrameSlot(): JSFrameSlot;
    hasTDZCheck(): boolean;
    isConst(): boolean;
    withTDZCheck(): Environment$VarRef;
}