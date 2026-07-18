import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostContext$ToGuestValueNode } from '../../../../com/oracle/truffle/host/HostContext$ToGuestValueNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostContext$ToGuestValuesNode extends Node {
    static create(): HostContext$ToGuestValuesNode;
    private constructor()
    // private generic: boolean;
    // private needsCopy: boolean;
    // private toGuestValue: HostContext$ToGuestValueNode[];
    apply(context: HostContext, args: Object[]): Object[];
    // private fastToGuestValues(node: HostContext$ToGuestValueNode, context: HostContext, args: Object[]): Object[];
    // private fastToGuestValuesUnroll(nodes: HostContext$ToGuestValueNode[], context: HostContext, args: Object[]): Object[];
}