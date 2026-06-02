import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NumberPrototypeBuiltins$JSNumberToPrecisionNode } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltins$JSNumberToPrecisionNode.d.ts'
import type { NumberPrototypeBuiltinsFactory$JSNumberToPrecisionNodeGen$ToPrecisionForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltinsFactory$JSNumberToPrecisionNodeGen$ToPrecisionForeignObject0Data.d.ts'
import type { NumberPrototypeBuiltinsFactory$JSNumberToPrecisionNodeGen$ToPrecisionForeignObjectUndefined0Data } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltinsFactory$JSNumberToPrecisionNodeGen$ToPrecisionForeignObjectUndefined0Data.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToNumberNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NumberPrototypeBuiltinsFactory$JSNumberToPrecisionNodeGen extends NumberPrototypeBuiltins$JSNumberToPrecisionNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): NumberPrototypeBuiltins$JSNumberToPrecisionNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private state_0_: number;
    // private state_1_: number;
    // private toNumberNode: JSToNumberNode;
    // private toPrecisionForeignObject0_cache: NumberPrototypeBuiltinsFactory$JSNumberToPrecisionNodeGen$ToPrecisionForeignObject0Data;
    // private toPrecisionForeignObjectUndefined0_cache: NumberPrototypeBuiltinsFactory$JSNumberToPrecisionNodeGen$ToPrecisionForeignObjectUndefined0Data;
    // private toStringNode: JSToStringNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): Object;
    getArguments(): JavaScriptNode[];
    // private toPrecisionForeignObject1Boundary(state_0: number, arguments0Value_: Object, arguments1Value_: Object, toNumberNode_2: JSToNumberNode): Object;
    // private toPrecisionForeignObjectUndefined1Boundary(state_0: number, arguments0Value_: Object, arguments1Value_: Object, toStringNode_2: JSToStringNode): Object;
}