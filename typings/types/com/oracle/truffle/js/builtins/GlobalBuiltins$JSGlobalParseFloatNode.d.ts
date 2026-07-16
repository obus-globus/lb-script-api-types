import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$RegionEqualByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$RegionEqualByteIndexNode.d.ts'
import type { GlobalBuiltins$JSGlobalOperation } from '../../../../../com/oracle/truffle/js/builtins/GlobalBuiltins$JSGlobalOperation.d.ts'
import type { FloatParserNode } from '../../../../../com/oracle/truffle/js/builtins/helper/FloatParserNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTrimWhitespaceNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSTrimWhitespaceNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class GlobalBuiltins$JSGlobalParseFloatNode extends GlobalBuiltins$JSGlobalOperation {
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
    // private floatParserNode: FloatParserNode;
    // private regionEqualsNode: TruffleString$RegionEqualByteIndexNode;
    // private trimWhitespaceNode: JSTrimWhitespaceNode;
    parseFloat(value: TruffleObject): number;
    parseFloat(value: TruffleString): number;
    parseFloatBoolean(value: boolean): number;
    parseFloatDouble(value: number, negativeZero: InlinedConditionProfile): number;
    parseFloatInt(value: number): number;
    // private parseFloatIntl(inputString: TruffleString): number;
    // private parseFloatIntl2(trimmedString: TruffleString): number;
    parseFloatLong(value: number): number;
    parseFloatNull(value: Object): number;
    parseFloatUndefined(value: Object): number;
    trimWhitespace(s: TruffleString): TruffleString;
}