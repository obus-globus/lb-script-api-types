import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { NodeInterface } from '../../../../../com/oracle/truffle/api/nodes/NodeInterface.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RepeatingNode extends NodeInterface, Object{
    executeRepeating(frame: VirtualFrame): boolean;
    executeRepeatingWithValue(frame: VirtualFrame): Object;
    initialLoopStatus(): Object;
    shouldContinue(returnValue: Object): boolean;
}