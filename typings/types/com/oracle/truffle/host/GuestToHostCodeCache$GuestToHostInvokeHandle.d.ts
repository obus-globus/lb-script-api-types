import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { GuestToHostRootNode } from '../../../../com/oracle/truffle/host/GuestToHostRootNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GuestToHostCodeCache$GuestToHostInvokeHandle extends GuestToHostRootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor()
    executeImpl(receiver: Object, callArguments: Object[]): Object;
}