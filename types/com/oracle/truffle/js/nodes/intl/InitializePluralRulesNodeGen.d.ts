import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InitializePluralRulesNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializePluralRulesNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSPluralRulesObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSPluralRulesObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializePluralRulesNodeGen extends InitializePluralRulesNode {
    static create(paramcontext: JSContext): InitializePluralRulesNode;
    static createInitalizePluralRulesNode(paramcontext: JSContext): InitializePluralRulesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    executeInit(arg0Value: JSPluralRulesObject, arg1Value: Object, arg2Value: Object): JSPluralRulesObject;
}