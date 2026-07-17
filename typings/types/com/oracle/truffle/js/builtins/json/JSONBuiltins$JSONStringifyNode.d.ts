import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSONBuiltins$GetGapNode } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONBuiltins$GetGapNode.d.ts'
import type { JSONBuiltins$ToReplacerListNode } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONBuiltins$ToReplacerListNode.d.ts'
import type { JSONStringifyStringNode } from '../../../../../../com/oracle/truffle/js/builtins/json/JSONStringifyStringNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSIsArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSIsArrayNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { StringBuilderProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/StringBuilderProfile.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSONBuiltins$JSONStringifyNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private createWrapperPropertyNode: CreateDataPropertyNode;
    // private jsonStringifyStringNode: JSONStringifyStringNode;
    createStringBuilderProfile(): StringBuilderProfile;
    // private stringifyIntl(value: Object, space: Object, replacerFnObj: Object, replacerList: Object[], node: Node, getGapNode: JSONBuiltins$GetGapNode): Object;
    stringifyNoReplacer(value: Object, replacer: Object, space: Object, getGapNode: JSONBuiltins$GetGapNode): Object;
    stringifyWithReplacer(value: Object, replacer: Object, space: Object, node: Node, getGapNode: JSONBuiltins$GetGapNode, isCallableNode: IsCallableNode, isArrayNode: JSIsArrayNode, toReplacerListNode: JSONBuiltins$ToReplacerListNode): Object;
}