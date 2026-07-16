import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceNode } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceNode.d.ts'
import type { StringPrototypeBuiltinsFactory$JSStringReplaceNodeGen$ReplaceGenericData } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltinsFactory$JSStringReplaceNodeGen$ReplaceGenericData.d.ts'
import type { StringPrototypeBuiltinsFactory$JSStringReplaceNodeGen$ReplaceStringCachedData } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltinsFactory$JSStringReplaceNodeGen$ReplaceStringCachedData.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringPrototypeBuiltinsFactory$JSStringReplaceNodeGen extends StringPrototypeBuiltins$JSStringReplaceNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): StringPrototypeBuiltins$JSStringReplaceNode;
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
    // private replaceGeneric_cache: StringPrototypeBuiltinsFactory$JSStringReplaceNodeGen$ReplaceGenericData;
    // private replaceStringCached_cache: StringPrototypeBuiltinsFactory$JSStringReplaceNodeGen$ReplaceStringCachedData;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object): Object;
    getArguments(): JavaScriptNode[];
}