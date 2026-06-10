import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RegExpBuiltins$GetStaticRegExpResultNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpBuiltins$GetStaticRegExpResultNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TRegexUtil$InteropReadBooleanMemberNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadBooleanMemberNode.d.ts'
import type { TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RegExpBuiltins$JSRegExpStaticResultMultilineNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    getMultilineEager(node: Node, getResultNode: RegExpBuiltins$GetStaticRegExpResultNode, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode, getMultilineFlag: TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode): boolean;
    getMultilineLazy(node: Node, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode, getMultilineFlag: TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode): boolean;
}