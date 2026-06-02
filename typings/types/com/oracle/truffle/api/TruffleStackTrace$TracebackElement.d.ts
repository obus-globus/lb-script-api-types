import type { RootCallTarget } from '../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { MaterializedFrame } from '../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleStackTrace$TracebackElement extends Object {
    constructor(last: TruffleStackTrace$TracebackElement, callNode: Node, root: RootCallTarget, frame: MaterializedFrame)
    // private callNode: Node;
    // private frame: MaterializedFrame;
    // private last: TruffleStackTrace$TracebackElement;
    // private root: RootCallTarget;
}