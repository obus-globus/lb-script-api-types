import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostContext$ToGuestValueNode extends Node {
    constructor()
    doCached(context: HostContext, receiver: Object, cachedReceiver: Class<Object>): Object;
    doNull(context: HostContext, receiver: Object): Object;
    doUncached(context: HostContext, receiver: Object): Object;
    execute(node: Node, context: HostContext, receiver: Object): Object;
}