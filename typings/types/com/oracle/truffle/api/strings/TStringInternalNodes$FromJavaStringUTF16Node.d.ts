import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
export abstract class TStringInternalNodes$FromJavaStringUTF16Node extends AbstractInternalNode {
    constructor()
    execute(node: Node, value: string, charOffset: number, length: number, copy: boolean): TruffleString;
}