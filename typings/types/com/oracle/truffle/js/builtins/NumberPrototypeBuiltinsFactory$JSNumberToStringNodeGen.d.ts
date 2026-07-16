import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NumberPrototypeBuiltins$JSNumberToStringNode } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltins$JSNumberToStringNode.d.ts'
import type { NumberPrototypeBuiltinsFactory$JSNumberToStringNodeGen$ToStringForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltinsFactory$JSNumberToStringNodeGen$ToStringForeignObject0Data.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSDoubleToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { JSToDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToIntegerAsIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsIntNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NumberPrototypeBuiltinsFactory$JSNumberToStringNodeGen extends NumberPrototypeBuiltins$JSNumberToStringNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): NumberPrototypeBuiltins$JSNumberToStringNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private doubleToString: JSDoubleToStringNode;
    // private state_0_: number;
    // private state_1_: number;
    // private toDouble: JSToDoubleNode;
    // private toIntegerNode: JSToIntegerAsIntNode;
    // private toStringForeignObject0_cache: NumberPrototypeBuiltinsFactory$JSNumberToStringNodeGen$ToStringForeignObject0Data;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): Object;
    // private execute_generic2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int1(state_0__: number, frameValue: VirtualFrame): Object;
    getArguments(): JavaScriptNode[];
    // private toStringForeignObject1Boundary(state_0: number, arguments0Value_: Object, arguments1Value_: Object, toIntegerNode_2: JSToIntegerAsIntNode, doubleToString_5: JSDoubleToStringNode): Object;
}