import type { FrameInstance } from '../../../../../com/oracle/truffle/api/frame/FrameInstance.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebuggerSession$Caller extends Object {
    constructor(frameInstance: FrameInstance)
    constructor(frameInstance: FrameInstance, callNode: Node)
    // private frame: MaterializedFrame;
    // private node: Node;
}