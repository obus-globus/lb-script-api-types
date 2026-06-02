import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LoopNode extends Node {
    static reportLoopCount(paramsource: Node, paramiterations: number): void;
    constructor()
    execute(frame: VirtualFrame): Object;
    getRepeatingNode(): RepeatingNode;
}