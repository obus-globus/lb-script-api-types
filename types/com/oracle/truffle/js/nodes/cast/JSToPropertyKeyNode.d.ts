import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToPropertyKeyNode extends JavaScriptBaseNode {
    static create(): JSToPropertyKeyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doOther(value: Object, toPrimitiveNode: JSToPrimitiveNode, toStringNode: JSToStringNode, isSymbol: InlinedConditionProfile): Object;
    doSymbol(value: Symbol): Symbol;
    doTString(value: TruffleString): TruffleString;
    execute(operand: Object): Object;
}