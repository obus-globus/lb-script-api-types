import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToStringOrNumberNode extends JavaScriptBaseNode {
    static create(): JSToStringOrNumberNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doSymbol(value: Symbol): Object;
    execute(operand: Object): Object;
}