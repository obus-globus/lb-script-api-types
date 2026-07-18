import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NumberPrototypeBuiltins$JSNumberToLocaleStringNode } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltins$JSNumberToLocaleStringNode.d.ts'
import type { NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringNodeGen$Foreign0Data } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringNodeGen$Foreign0Data.d.ts'
import type { NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringNodeGen$NumberData } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringNodeGen$NumberData.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringNodeGen extends NumberPrototypeBuiltins$JSNumberToLocaleStringNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): NumberPrototypeBuiltins$JSNumberToLocaleStringNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private foreign0_cache: NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringNodeGen$Foreign0Data;
    // private number_cache: NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringNodeGen$NumberData;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): Object;
    // private execute_generic1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
    // private fallbackGuard_(state_0: number, arguments0Value: Object): boolean;
    // private foreign1Boundary(state_0: number, arguments0Value_: Object): Object;
    getArguments(): JavaScriptNode[];
}