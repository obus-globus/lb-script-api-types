import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSONBuiltins$JSONStringifyNode } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONBuiltins$JSONStringifyNode.d.ts'
import type { JSONBuiltinsFactory$JSONStringifyNodeGen$StringifyAStringNoReplacerData } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONBuiltinsFactory$JSONStringifyNodeGen$StringifyAStringNoReplacerData.d.ts'
import type { JSONBuiltinsFactory$JSONStringifyNodeGen$StringifyWithReplacerData } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONBuiltinsFactory$JSONStringifyNodeGen$StringifyWithReplacerData.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSONBuiltinsFactory$JSONStringifyNodeGen extends JSONBuiltins$JSONStringifyNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): JSONBuiltins$JSONStringifyNode;
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
    // private arguments2_: JavaScriptNode;
    // private state_0_: number;
    // private stringifyAStringNoReplacer_cache: JSONBuiltinsFactory$JSONStringifyNodeGen$StringifyAStringNoReplacerData;
    // private stringifyNoReplacer_getGapNode__field1_: Node;
    // private stringifyNoReplacer_getGapNode__field2_: Node;
    // private stringifyNoReplacer_getGapNode__field3_: Node;
    // private stringifyNoReplacer_getGapNode__field4_: Node;
    // private stringifyNoReplacer_getGapNode__field5_: Node;
    // private stringifyNoReplacer_getGapNode__field6_: Node;
    // private stringifyWithReplacer_cache: JSONBuiltinsFactory$JSONStringifyNodeGen$StringifyWithReplacerData;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object): Object;
    getArguments(): JavaScriptNode[];
}