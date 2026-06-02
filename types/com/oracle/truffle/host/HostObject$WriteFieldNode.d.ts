import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostFieldDesc } from '../../../../com/oracle/truffle/host/HostFieldDesc.d.ts'
import type { HostObject } from '../../../../com/oracle/truffle/host/HostObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostObject$WriteFieldNode extends Node {
    constructor()
    execute(node: Node, field: HostFieldDesc, object: HostObject, value: Object): void;
}