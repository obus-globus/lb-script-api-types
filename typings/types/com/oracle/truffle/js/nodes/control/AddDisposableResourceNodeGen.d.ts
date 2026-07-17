import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { AddDisposableResourceNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AddDisposableResourceNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { DisposeCapability } from '../../../../../../com/oracle/truffle/js/runtime/util/DisposeCapability.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AddDisposableResourceNodeGen extends AddDisposableResourceNode {
    static addCallback(paramcapability: DisposeCapability, paramdisposeMethod: Object, paramargument: Object, paramasyncDispose: boolean, paramnode: Node, paramgrowProfile: InlinedBranchProfile): void;
    static create(paramcontext: JSContext, paramasyncDispose: boolean): AddDisposableResourceNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, asyncDispose: boolean)
    // private state_0_: number;
    executeImpl(arg0Value: DisposeCapability, arg1Value: Object): void;
}