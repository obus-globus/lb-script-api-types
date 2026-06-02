import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToBigIntNode$JSPrimitiveToBigIntNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode$JSPrimitiveToBigIntNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToBigIntNode extends JavaScriptBaseNode {
    static create(): JSToBigIntNode;
    static getUncached(): JSToBigIntNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doOther(value: Object, toPrimitiveNode: JSToPrimitiveNode, primitiveToBigInt: JSToBigIntNode$JSPrimitiveToBigIntNode): BigInt;
    execute(value: Object): BigInt;
    executeBigInteger(value: Object): BigInt;
}