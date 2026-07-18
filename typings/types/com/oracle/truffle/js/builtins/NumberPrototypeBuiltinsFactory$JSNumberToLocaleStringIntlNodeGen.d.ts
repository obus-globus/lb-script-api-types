import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NumberPrototypeBuiltins$JSNumberToLocaleStringIntlNode } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltins$JSNumberToLocaleStringIntlNode.d.ts'
import type { NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringIntlNodeGen$JavaNumberToLocaleStringData } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringIntlNodeGen$JavaNumberToLocaleStringData.d.ts'
import type { NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringIntlNodeGen$ToLocaleStringForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringIntlNodeGen$ToLocaleStringForeignObject0Data.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringIntlNodeGen extends NumberPrototypeBuiltins$JSNumberToLocaleStringIntlNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): NumberPrototypeBuiltins$JSNumberToLocaleStringIntlNode;
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
    // private javaNumberToLocaleString_cache: NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringIntlNodeGen$JavaNumberToLocaleStringData;
    // private state_0_: number;
    // private toLocaleStringForeignObject0_cache: NumberPrototypeBuiltinsFactory$JSNumberToLocaleStringIntlNodeGen$ToLocaleStringForeignObject0Data;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object): Object;
    // private fallbackGuard_(state_0: number, arguments0Value: Object, arguments1Value: Object, arguments2Value: Object): boolean;
    getArguments(): JavaScriptNode[];
    // private toLocaleStringForeignObject1Boundary(state_0: number, arguments0Value_: Object, arguments1Value_: Object, arguments2Value_: Object): Object;
}