import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BooleanPrototypeBuiltins$JSBooleanValueOfNode } from '../../../../../com/oracle/truffle/js/builtins/BooleanPrototypeBuiltins$JSBooleanValueOfNode.d.ts'
import type { BooleanPrototypeBuiltinsFactory$JSBooleanValueOfNodeGen$ValueOfForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/BooleanPrototypeBuiltinsFactory$JSBooleanValueOfNodeGen$ValueOfForeignObject0Data.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanPrototypeBuiltinsFactory$JSBooleanValueOfNodeGen extends BooleanPrototypeBuiltins$JSBooleanValueOfNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): BooleanPrototypeBuiltins$JSBooleanValueOfNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private state_0_: number;
    // private valueOfForeignObject0_cache: BooleanPrototypeBuiltinsFactory$JSBooleanValueOfNodeGen$ValueOfForeignObject0Data;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): boolean;
    // private execute_boolean0(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic1(state_0__: number, frameValue: VirtualFrame): Object;
    // private fallbackGuard_(state_0: number, arguments0Value: Object): boolean;
    getArguments(): JavaScriptNode[];
    // private valueOfForeignObject1Boundary(state_0: number, arguments0Value_: Object): Object;
}