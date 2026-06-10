import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitAccordingToSpecNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitAccordingToSpecNode.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitInternalNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitInternalNode.d.ts'
import type { RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation.d.ts'
import type { IsPristineObjectNode } from '../../../../../com/oracle/truffle/js/builtins/helper/IsPristineObjectNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsJSObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSToUInt32Node } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt32Node.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RegExpPrototypeBuiltins$JSRegExpSplitNode extends RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation {
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
    // private isObjectNode: IsJSObjectNode;
    // private isPristineObjectNode: IsPristineObjectNode;
    // private toString1Node: JSToStringNode;
    // private checkObject(rx: JSDynamicObject): void;
    // private doSplit(rx: JSDynamicObject, input: Object, limit: number, node: Node, limitZeroBranch: InlinedBranchProfile, splitInternal: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitInternalNode, splitAccordingToSpec: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitAccordingToSpecNode): JSArrayObject;
    // private getSpeciesConstructor(rx: JSDynamicObject): Object;
    // private isJSObject(rx: JSDynamicObject): boolean;
    // private isPristine(rx: JSDynamicObject): boolean;
    splitIntLimit(rx: JSDynamicObject, input: Object, limit: number, toUInt32: JSToUInt32Node, limitZeroBranch: InlinedBranchProfile, splitInternal: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitInternalNode, splitAccordingToSpec: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitAccordingToSpecNode): JSArrayObject;
    splitLongLimit(rx: JSDynamicObject, input: Object, limit: number, toUInt32: JSToUInt32Node, limitZeroBranch: InlinedBranchProfile, splitInternal: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitInternalNode, splitAccordingToSpec: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitAccordingToSpecNode): JSArrayObject;
    splitObjectLimit(rx: JSDynamicObject, input: Object, limit: Object, splitAccordingToSpec: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitAccordingToSpecNode): JSArrayObject;
    splitUndefinedLimit(rx: JSDynamicObject, input: Object, limit: Object, limitZeroBranch: InlinedBranchProfile, splitInternal: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitInternalNode, splitAccordingToSpec: RegExpPrototypeBuiltins$JSRegExpSplitNode$SplitAccordingToSpecNode): JSArrayObject;
    // private toString1(obj: Object): TruffleString;
}