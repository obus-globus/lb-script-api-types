import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ScopeVariables$ResolvedSlot } from '../../../../../../com/oracle/truffle/js/runtime/interop/ScopeVariables$ResolvedSlot.d.ts'
export class ScopeVariables$ResolvedThisSlot extends ScopeVariables$ResolvedSlot {
    constructor()
    constructor(slot: number, frameLevel: number, scopeLevel: number, descriptor: FrameDescriptor)
    createReadNode(): JavaScriptNode;
}