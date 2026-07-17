import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostContext$ToGuestValueNode extends Node {
    constructor()
    doCached(node: Node, receiver: Object, cachedReceiver: Class<Object>): Object;
    doNull(node: Node, receiver: Object): Object;
    doUncached(node: Node, receiver: Object): Object;
    execute(node: Node, receiver: Object): Object;
}