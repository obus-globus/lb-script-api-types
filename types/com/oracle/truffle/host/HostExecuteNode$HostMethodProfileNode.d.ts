import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostMethodDesc$SingleMethod } from '../../../../com/oracle/truffle/host/HostMethodDesc$SingleMethod.d.ts'
export abstract class HostExecuteNode$HostMethodProfileNode extends Node {
    constructor()
    execute(node: Node, method: HostMethodDesc$SingleMethod): HostMethodDesc$SingleMethod;
}