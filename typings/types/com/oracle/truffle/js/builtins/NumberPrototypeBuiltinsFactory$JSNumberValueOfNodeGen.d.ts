import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NumberPrototypeBuiltins$JSNumberValueOfNode } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltins$JSNumberValueOfNode.d.ts'
import type { NumberPrototypeBuiltinsFactory$JSNumberValueOfNodeGen$ValueOfForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltinsFactory$JSNumberValueOfNodeGen$ValueOfForeignObject0Data.d.ts'
import type { NumberPrototypeBuiltinsFactory$JSNumberValueOfNodeGen$ValueOfPrimitiveData } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltinsFactory$JSNumberValueOfNodeGen$ValueOfPrimitiveData.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NumberPrototypeBuiltinsFactory$JSNumberValueOfNodeGen extends NumberPrototypeBuiltins$JSNumberValueOfNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): NumberPrototypeBuiltins$JSNumberValueOfNode;
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
    // private valueOfForeignObject0_cache: NumberPrototypeBuiltinsFactory$JSNumberValueOfNodeGen$ValueOfForeignObject0Data;
    // private valueOfPrimitive_cache: NumberPrototypeBuiltinsFactory$JSNumberValueOfNodeGen$ValueOfPrimitiveData;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): Object;
    // private fallbackGuard_(state_0: number, arguments0Value: Object): boolean;
    getArguments(): JavaScriptNode[];
    // private valueOfForeignObject1Boundary(state_0: number, arguments0Value_: Object): Object;
}