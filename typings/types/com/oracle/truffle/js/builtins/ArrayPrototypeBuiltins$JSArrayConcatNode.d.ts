import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ArrayPrototypeBuiltins$JSArrayOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArrayOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSArrayFirstElementIndexNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSArrayFirstElementIndexNode.d.ts'
import type { JSArrayLastElementIndexNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSArrayLastElementIndexNode.d.ts'
import type { JSToBooleanNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSIsArrayNode } from '../../../../../com/oracle/truffle/js/nodes/unary/JSIsArrayNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayConcatNode extends ArrayPrototypeBuiltins$JSArrayOperation {
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
    // private firstElementIndexNode: JSArrayFirstElementIndexNode;
    // private getSpreadableNode: PropertyGetNode;
    // private isArrayNode: JSIsArrayNode;
    // private lastElementIndexNode: JSArrayLastElementIndexNode;
    // private toBooleanNode: JSToBooleanNode;
    concat(thisObj: Object, args: Object[], isFirstSpreadable: InlinedConditionProfile, hasFirstElements: InlinedConditionProfile, hasFirstOneElement: InlinedConditionProfile, isSecondSpreadable: InlinedConditionProfile, hasSecondElements: InlinedConditionProfile, hasSecondOneElement: InlinedConditionProfile, lengthErrorProfile: InlinedConditionProfile, hasOneArg: InlinedConditionProfile, hasMultipleArgs: InlinedConditionProfile, optimizationsObservable: InlinedConditionProfile): Object;
    // private concatElementIntl(retObj: Object, el: Object, n: number, isSpreadable: InlinedConditionProfile, hasElements: InlinedConditionProfile, hasOneElement: InlinedConditionProfile, lengthErrorProfile: InlinedConditionProfile, optimizationsObservable: InlinedConditionProfile): number;
    // private concatSpreadable(retObj: Object, n: number, elObj: Object, len2: number, hasOneElement: InlinedConditionProfile, lengthErrorProfile: InlinedConditionProfile, optimizationsObservable: InlinedConditionProfile): number;
    // private firstElementIndex(target: JSDynamicObject, length: number): number;
    // private isArray(object: Object): boolean;
    // private isConcatSpreadable(el: Object): boolean;
    // private lastElementIndex(target: JSDynamicObject, length: number): number;
    toBoolean(target: Object): boolean;
}