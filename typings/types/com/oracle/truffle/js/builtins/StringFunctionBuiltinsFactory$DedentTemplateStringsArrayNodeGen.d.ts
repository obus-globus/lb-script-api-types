import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$CreateCodePointIteratorNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CreateCodePointIteratorNode.d.ts'
import type { StringFunctionBuiltins$DedentTemplateStringsArrayNode } from '../../../../../com/oracle/truffle/js/builtins/StringFunctionBuiltins$DedentTemplateStringsArrayNode.d.ts'
import type { JSCollectionsNormalizeNode } from '../../../../../com/oracle/truffle/js/builtins/helper/JSCollectionsNormalizeNode.d.ts'
import type { JSToObjectNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringFunctionBuiltinsFactory$DedentTemplateStringsArrayNodeGen extends StringFunctionBuiltins$DedentTemplateStringsArrayNode {
    static create(paramcontext: JSContext): StringFunctionBuiltins$DedentTemplateStringsArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private collectionsNormalize_: JSCollectionsNormalizeNode;
    // private createCodePointIterator_: TruffleString$CreateCodePointIteratorNode;
    // private rawToObjectNode_: JSToObjectNode;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: JSContext): JSArrayObject;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: JSContext): JSArrayObject;
}