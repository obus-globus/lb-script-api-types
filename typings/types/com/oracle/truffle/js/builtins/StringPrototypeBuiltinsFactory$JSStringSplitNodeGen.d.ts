import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { StringPrototypeBuiltins$JSStringSplitNode } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringSplitNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringPrototypeBuiltinsFactory$JSStringSplitNodeGen extends StringPrototypeBuiltins$JSStringSplitNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): StringPrototypeBuiltins$JSStringSplitNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private arguments2_: JavaScriptNode;
    // private splitES5_readGroupCount__field1_: Node;
    // private splitES5_readGroupCount__field2_: Node;
    // private splitES5_regexpSplitter__field1_: number;
    // private splitES5_regexpSplitter__field2_: number;
    // private splitES6Generic_isObject_: IsObjectNode;
    // private state_0_: number;
    // private stringSplitter_field1_: number;
    // private stringSplitter_field2_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object): Object;
    getArguments(): JavaScriptNode[];
}