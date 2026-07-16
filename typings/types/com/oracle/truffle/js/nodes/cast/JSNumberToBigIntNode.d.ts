import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSNumberToBigIntNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(value: Object): BigInt;
    executeBigInt(value: Object): BigInt;
    executeBigIntIfNumberOrNull(value: Object): BigInt;
}