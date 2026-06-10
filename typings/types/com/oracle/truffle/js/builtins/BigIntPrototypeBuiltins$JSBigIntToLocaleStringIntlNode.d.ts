import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BigIntPrototypeBuiltins$JSBigIntOperation } from '../../../../../com/oracle/truffle/js/builtins/BigIntPrototypeBuiltins$JSBigIntOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { InitializeNumberFormatNode } from '../../../../../com/oracle/truffle/js/nodes/intl/InitializeNumberFormatNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSBigIntObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSBigIntObject.d.ts'
import type { JSNumberFormatObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSNumberFormatObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BigIntPrototypeBuiltins$JSBigIntToLocaleStringIntlNode extends BigIntPrototypeBuiltins$JSBigIntOperation {
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
    // private initNumberFormatNode: InitializeNumberFormatNode;
    bigIntToLocaleString(thisObj: BigInt, locales: Object, options: Object): TruffleString;
    // private createNumberFormat(locales: Object, options: Object): JSNumberFormatObject;
    failForNonBigInts(notANumber: Object, locales: Object, options: Object): Object;
    jsBigIntToLocaleString(thisObj: JSBigIntObject, locales: Object, options: Object): TruffleString;
}