import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ConstructorBuiltins$ConstructWithNewTargetNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructWithNewTargetNode.d.ts'
import type { CompileRegexNode } from '../../../../../com/oracle/truffle/js/nodes/CompileRegexNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsRegExpNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsRegExpNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { CreateRegExpNode } from '../../../../../com/oracle/truffle/js/nodes/intl/CreateRegExpNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { TRegexUtil$InteropReadStringMemberNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadStringMemberNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ConstructorBuiltins$ConstructRegExpNode extends ConstructorBuiltins$ConstructWithNewTargetNode {
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
    constructor(context: JSContext, builtin: JSBuiltin, isCall: boolean, isNewTargetCase: boolean)
    // private compileRegexNode: CompileRegexNode;
    // private createRegExpNode: CreateRegExpNode;
    // private flagsToStringNode: JSToStringNode;
    // private getConstructorNode: PropertyGetNode;
    // private getFlagsNode: PropertyGetNode;
    // private getSourceNode: PropertyGetNode;
    // private isCall: boolean;
    // private patternToStringNode: JSToStringNode;
    constructRegExp(newTarget: JSDynamicObject, pattern: Object, flags: Object, node: Node, isRegExpNode: IsRegExpNode, regexpObject: InlinedBranchProfile, regexpMatcherObject: InlinedBranchProfile, regexpNonObject: InlinedBranchProfile, regexpObjectNewFlagsBranch: InlinedBranchProfile, callIsRegExpProfile: InlinedConditionProfile, constructorEquivalentProfile: InlinedConditionProfile, readPattern: TRegexUtil$InteropReadStringMemberNode): JSObject;
    // private flagsToString(f: Object): Object;
    // private getCompileRegexNode(): CompileRegexNode;
    // private getConstructor(obj: JSDynamicObject): Object;
    // private getCreateRegExpNode(): CreateRegExpNode;
    // private getFlags(obj: JSDynamicObject): Object;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    // private getPatternToStringNode(): JSToStringNode;
    // private getSource(obj: JSDynamicObject): Object;
}