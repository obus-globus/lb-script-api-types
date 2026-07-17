import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NumberPrototypeBuiltins$ForeignGetDoubleValueNode } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltins$ForeignGetDoubleValueNode.d.ts'
import type { NumberPrototypeBuiltins$JSNumberToFixedNode } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltins$JSNumberToFixedNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSDoubleToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { JSToIntegerAsIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsIntNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NumberPrototypeBuiltinsFactory$JSNumberToFixedNodeGen extends NumberPrototypeBuiltins$JSNumberToFixedNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): NumberPrototypeBuiltins$JSNumberToFixedNode;
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
    // private toFixedForeignObject_getDoubleValue_: NumberPrototypeBuiltins$ForeignGetDoubleValueNode;
    // private toIntegerNode: JSToIntegerAsIntNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): Object;
    // private fallbackGuard_(state_0: number, arguments0Value: Object, arguments1Value: Object): boolean;
    getArguments(): JavaScriptNode[];
}