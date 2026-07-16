import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ObjectPrototypeBuiltins$GetBuiltinToStringTagNode } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$GetBuiltinToStringTagNode.d.ts'
import type { ObjectPrototypeBuiltins$ObjectPrototypeToStringNode } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$ObjectPrototypeToStringNode.d.ts'
import type { ObjectPrototypeBuiltinsFactory$ObjectPrototypeToStringNodeGen$ForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltinsFactory$ObjectPrototypeToStringNodeGen$ForeignObject0Data.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectPrototypeBuiltinsFactory$ObjectPrototypeToStringNodeGen extends ObjectPrototypeBuiltins$ObjectPrototypeToStringNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): ObjectPrototypeBuiltins$ObjectPrototypeToStringNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private foreignObject0_cache: ObjectPrototypeBuiltinsFactory$ObjectPrototypeToStringNodeGen$ForeignObject0Data;
    // private getBuiltinToStringTagNode: ObjectPrototypeBuiltins$GetBuiltinToStringTagNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): TruffleString;
    // private foreignObject1Boundary(state_0: number, arguments0Value_: Object): Object;
    getArguments(): JavaScriptNode[];
}