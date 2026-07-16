import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ArrayPrototypeBuiltins$ArraySpeciesConstructorNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$ArraySpeciesConstructorNode.d.ts'
import type { RegExpPrototypeBuiltins$AdvanceStringIndexNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$AdvanceStringIndexNode.d.ts'
import type { JSRegExpExecIntlNode } from '../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { WriteElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { JSToLengthNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToLengthNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private arraySpeciesCreateNode: ArrayPrototypeBuiltins$ArraySpeciesConstructorNode;
    // private getLastIndexNode: PropertyGetNode;
    // private readNode: ReadElementNode;
    // private regexExecIntlNode: JSRegExpExecIntlNode;
    // private setLastIndexNode: PropertySetNode;
    // private writeNode: WriteElementNode;
    advanceLastIndexAfterEmptyMatch(regex: Object, string: TruffleString, fullUnicode: boolean, node: Node, toLengthNode: JSToLengthNode, advanceStringIndex: RegExpPrototypeBuiltins$AdvanceStringIndexNode, lastIndexNotIntBranch: InlinedBranchProfile): void;
    getArraySpeciesConstructorNode(): ArrayPrototypeBuiltins$ArraySpeciesConstructorNode;
    getLastIndex(obj: Object): Object;
    // private initLastIndexNode(): void;
    read(target: Object, index: number): Object;
    regexExecIntl(regex: Object, input: TruffleString): Object;
    setLastIndex(obj: Object, value: Object): void;
    setLastIndex(obj: Object, value: number): void;
    write(target: Object, index: number, value: Object): void;
}