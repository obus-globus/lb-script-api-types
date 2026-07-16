import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { YieldException } from '../../../../../../com/oracle/truffle/js/nodes/control/YieldException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class YieldResultNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    cloneUninitialized(): YieldResultNode;
    generatorYield(frame: VirtualFrame, value: Object): YieldException;
}