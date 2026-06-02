import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointNode.d.ts'
import type { StringPrototypeBuiltins$JSStringOperationWithRegExpArgument } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringOperationWithRegExpArgument.d.ts'
import type { CompileRegexNode } from '../../../../../com/oracle/truffle/js/nodes/CompileRegexNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IsRegExpNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsRegExpNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { CreateRegExpNode } from '../../../../../com/oracle/truffle/js/nodes/intl/CreateRegExpNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Symbol } from '../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringPrototypeBuiltins$JSStringMatchNode extends StringPrototypeBuiltins$JSStringOperationWithRegExpArgument {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, matchAll: boolean)
    // private compileRegexNode: CompileRegexNode;
    // private createRegExpNode: CreateRegExpNode;
    // private getFlagsNode: PropertyGetNode;
    // private isRegExpNode: IsRegExpNode;
    // private matchAll: boolean;
    // private stringIndexOfNode: TruffleString$ByteIndexOfCodePointNode;
    // private builtinMatch(thisObj: Object, regex: Object): Object;
    // private getCompileRegexNode(): CompileRegexNode;
    // private getCreateRegExpNode(): CreateRegExpNode;
    // private getFlags(regexp: Object): Object;
    // private getIsRegExpNode(): IsRegExpNode;
    // private indexOf(a: TruffleString, codepoint: number): number;
    match(thisObj: Object, regex: Object, isObject: IsObjectNode, errorBranch: InlinedBranchProfile, isSpecialProfile: InlinedConditionProfile, callSpecialProfile: InlinedConditionProfile): Object;
    // private matchSymbol(): Symbol;
}