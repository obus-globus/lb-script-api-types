import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { WriteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScopeVariables$ResolvedSlot extends Object {
    constructor()
    constructor(slot: number, frameLevel: number, scopeLevel: number, descriptor: FrameDescriptor)
    // private descriptor: FrameDescriptor;
    // private frameLevel: number;
    // private scopeLevel: number;
    // private slot: number;
    createReadNode(): JavaScriptNode;
    createScopeFrameNode(): ScopeFrameNode;
    createWriteNode(): WriteNode;
    hasSlot(): boolean;
    isFunctionFrame(): boolean;
    isModifiable(): boolean;
    toString(): string;
}