import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RootNode$Constant extends RootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(value: Object)
    // private value: Object;
    execute(frame: VirtualFrame): Object;
}