import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostClassCache } from '../../../../com/oracle/truffle/host/HostClassCache.d.ts'
import type { HostObject } from '../../../../com/oracle/truffle/host/HostObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostObject$ContainsKeyNode extends Node {
    constructor()
    execute(node: Node, receiver: HostObject, key: Object, hostClassCache: HostClassCache): boolean;
}