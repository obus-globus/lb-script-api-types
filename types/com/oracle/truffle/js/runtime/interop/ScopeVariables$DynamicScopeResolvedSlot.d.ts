import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { WriteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteNode.d.ts'
import type { ScopeVariables$ResolvedSlot } from '../../../../../../com/oracle/truffle/js/runtime/interop/ScopeVariables$ResolvedSlot.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScopeVariables$DynamicScopeResolvedSlot extends ScopeVariables$ResolvedSlot {
    constructor(key: Object, slot: number, frameLevel: number, scopeLevel: number, descriptor: FrameDescriptor)
    // private key: Object;
    createReadNode(): JavaScriptNode;
    createWriteNode(): WriteNode;
}