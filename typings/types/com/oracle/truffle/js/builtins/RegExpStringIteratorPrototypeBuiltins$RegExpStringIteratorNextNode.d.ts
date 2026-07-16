import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InlinedCountingConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedCountingConditionProfile.d.ts'
import type { RegExpPrototypeBuiltins$AdvanceStringIndexNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$AdvanceStringIndexNode.d.ts'
import type { RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateIterResultObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateIterResultObjectNode.d.ts'
import type { HasHiddenKeyCacheNode } from '../../../../../com/oracle/truffle/js/nodes/access/HasHiddenKeyCacheNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSToLengthNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToLengthNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RegExpStringIteratorPrototypeBuiltins$RegExpStringIteratorNextNode extends RegExpPrototypeBuiltins$RegExpPrototypeSymbolOperation {
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
    // private createIterResultObjectNode: CreateIterResultObjectNode;
    // private getDoneNode: PropertyGetNode;
    // private getGlobalNode: PropertyGetNode;
    // private getIteratedStringNode: PropertyGetNode;
    // private getIteratingRegExpNode: PropertyGetNode;
    // private getUnicodeNode: PropertyGetNode;
    // private isRegExpStringIteratorNode: HasHiddenKeyCacheNode;
    // private setDoneNode: PropertySetNode;
    // private toLengthNode: JSToLengthNode;
    // private toStringNode: JSToStringNode;
    doRegExpStringIterator(iterator: JSDynamicObject, noMatchProfile: InlinedCountingConditionProfile, globalProfile: InlinedConditionProfile, advanceStringIndex: RegExpPrototypeBuiltins$AdvanceStringIndexNode, lastIndexNotIntBranch: InlinedBranchProfile): JSDynamicObject;
    // private getCreateIterResultObjectNode(): CreateIterResultObjectNode;
    // private getGetDoneNode(): PropertyGetNode;
    // private getGetGlobalNode(): PropertyGetNode;
    // private getGetIteratedStringNode(): PropertyGetNode;
    // private getGetIteratingRegExpNode(): PropertyGetNode;
    // private getGetUnicodeNode(): PropertyGetNode;
    // private getSetDoneNode(): PropertySetNode;
    // private getToLengthNode(): JSToLengthNode;
    // private getToStringNode(): JSToStringNode;
    isRegExpStringIterator(thisObj: Object): boolean;
}