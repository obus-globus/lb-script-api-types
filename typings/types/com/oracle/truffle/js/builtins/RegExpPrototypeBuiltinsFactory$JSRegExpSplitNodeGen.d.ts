import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpSplitNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpSplitNode.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitAccordingToSpecNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitAccordingToSpecNode.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitInternalNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitInternalNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToUInt32Node } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt32Node.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegExpPrototypeBuiltinsFactory$JSRegExpSplitNodeGen extends RegExpPrototypeBuiltins$JSRegExpSplitNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): RegExpPrototypeBuiltins$JSRegExpSplitNode;
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
    // private splitAccordingToSpec: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitAccordingToSpecNode;
    // private splitInternal: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitInternalNode;
    // private state_0_: number;
    // private toUInt32: JSToUInt32Node;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object): Object;
    // private execute_generic1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
    // private fallbackGuard_(state_0: number, arguments0Value: Object, arguments1Value: Object, arguments2Value: Object): boolean;
    getArguments(): JavaScriptNode[];
}