import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class GuestToHostRootNode extends RootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(targetType: Class<Object>, methodName: string)
    // private boundaryName: string;
    // private seenError: boolean;
    execute(frame: VirtualFrame): Object;
    executeImpl(receiver: Object, arguments: Object[]): Object;
    getName(): string;
    isCloningAllowed(): boolean;
    isInstrumentable(): boolean;
}