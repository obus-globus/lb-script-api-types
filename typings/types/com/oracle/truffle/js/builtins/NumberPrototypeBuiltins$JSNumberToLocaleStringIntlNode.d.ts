import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { NumberPrototypeBuiltins$ForeignGetDoubleValueNode } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltins$ForeignGetDoubleValueNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsNumberNode } from '../../../../../com/oracle/truffle/js/nodes/cast/IsNumberNode.d.ts'
import type { JSToDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { InitializeNumberFormatNode } from '../../../../../com/oracle/truffle/js/nodes/intl/InitializeNumberFormatNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSNumberObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSNumberObject.d.ts'
import type { JSNumberFormatObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSNumberFormatObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class NumberPrototypeBuiltins$JSNumberToLocaleStringIntlNode extends JSBuiltinNode {
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
    // private initNumberFormatNode: InitializeNumberFormatNode;
    // private createNumberFormat(locales: Object, options: Object): JSNumberFormatObject;
    failForNonNumbers(notANumber: Object, locales: Object, options: Object): Object;
    javaNumberToLocaleString(thisNumber: Object, locales: Object, options: Object, node: Node, isNumber: IsNumberNode, toDouble: JSToDoubleNode): TruffleString;
    jsNumberToLocaleString(thisObj: JSNumberObject, locales: Object, options: Object): TruffleString;
    toLocaleStringForeignObject(thisObj: Object, locales: Object, options: Object, getDoubleValue: NumberPrototypeBuiltins$ForeignGetDoubleValueNode): TruffleString;
}