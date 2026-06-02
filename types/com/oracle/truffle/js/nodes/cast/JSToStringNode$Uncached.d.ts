import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToStringNode$Uncached extends JSToStringNode {
    static create(): JSToStringNode;
    static createSymbolToString(): JSToStringNode;
    static createUndefinedToEmpty(): JSToStringNode;
    static getUncached(): JSToStringNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    executeString(operand: Object): TruffleString;
}