import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { FrameDescriptor } from '../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { MaterializedFrame } from '../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { ExecutableNode } from '../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EngineAccessor$GuardedExecutableNode extends ExecutableNode {
    constructor(languageSPI: TruffleLanguage<Object>, fragment: ExecutableNode, frameLocation: MaterializedFrame)
    // private fragment: ExecutableNode;
    // private frameDescriptor: FrameDescriptor;
    // private assureAdopted(): void;
    execute(frame: VirtualFrame): Object;
}