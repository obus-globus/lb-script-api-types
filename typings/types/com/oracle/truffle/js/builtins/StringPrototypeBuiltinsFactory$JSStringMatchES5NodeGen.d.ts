import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpExecES5Node } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpExecES5Node.d.ts'
import type { StringPrototypeBuiltins$JSStringMatchES5Node } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringMatchES5Node.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToRegExpNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToRegExpNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringPrototypeBuiltinsFactory$JSStringMatchES5NodeGen extends StringPrototypeBuiltins$JSStringMatchES5Node {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): StringPrototypeBuiltins$JSStringMatchES5Node;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private getEnd__field1_: Node;
    // private getEnd__field2_: Node;
    // private getGlobalFlag__field1_: Node;
    // private getGlobalFlag__field2_: Node;
    // private getGlobalFlag__field3_: Node;
    // private getStart__field1_: Node;
    // private getStart__field2_: Node;
    // private isGlobalRegExp__field0_: number;
    // private isGlobalRegExp__field1_: number;
    // private isMatch__field0_: number;
    // private isMatch__field1_: number;
    // private readIsMatch__field1_: Node;
    // private readIsMatch__field2_: Node;
    // private regExpExecNode_: RegExpPrototypeBuiltins$JSRegExpExecES5Node;
    // private state_0_: number;
    // private substringNode_: TruffleString$SubstringByteIndexNode;
    // private toRegExpNode_: JSToRegExpNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): JSDynamicObject;
    getArguments(): JavaScriptNode[];
}