import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSDoubleToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSToStringNode$Uncached } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode$Uncached.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToStringNodeGen$UncachedNodeGen extends JSToStringNode$Uncached {
    static create(): JSToStringNode;
    static create(): JSToStringNode$Uncached;
    static createSymbolToString(): JSToStringNode;
    static createUndefinedToEmpty(): JSToStringNode;
    static getUncached(): JSToStringNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private doubleToStringNode: JSDoubleToStringNode;
    // private state_0_: number;
    // private toPrimitiveHintStringNode: JSToPrimitiveNode;
    // private toStringNode: JSToStringNode;
    // private executeAndSpecialize(arg0Value: Object): TruffleString;
    executeString(arg0Value: Object): TruffleString;
}