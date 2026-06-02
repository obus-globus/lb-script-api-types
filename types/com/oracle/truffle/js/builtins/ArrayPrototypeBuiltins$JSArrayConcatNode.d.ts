import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
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
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayConcatNode extends ArrayPrototypeBuiltins$JSArrayOperation {
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
    constructor(context: JSContext, builtin: JSBuiltin)
    // private firstElementIndexNode: JSArrayFirstElementIndexNode;
    // private getSpreadableNode: PropertyGetNode;
    // private hasFirstElements: ConditionProfile;
    // private hasFirstOneElement: ConditionProfile;
    // private hasMultipleArgs: ConditionProfile;
    // private hasOneArg: ConditionProfile;
    // private hasSecondElements: ConditionProfile;
    // private hasSecondOneElement: ConditionProfile;
    // private isArrayNode: JSIsArrayNode;
    // private isFirstSpreadable: ConditionProfile;
    // private isSecondSpreadable: ConditionProfile;
    // private lastElementIndexNode: JSArrayLastElementIndexNode;
    // private lengthErrorProfile: ConditionProfile;
    // private optimizationsObservable: ConditionProfile;
    // private toBooleanNode: JSToBooleanNode;
    concat(thisObj: Object, args: Object[]): Object;
    // private concatElementIntl(retObj: Object, el: Object, n: number, isSpreadable: ConditionProfile, hasElements: ConditionProfile, hasOneElement: ConditionProfile): number;
    // private concatIntl(retObj: Object, initialLength: number, args: Object[]): number;
    // private concatSpreadable(retObj: Object, n: number, elObj: Object, len2: number, hasOneElement: ConditionProfile): number;
    // private firstElementIndex(target: JSDynamicObject, length: number): number;
    // private getSpreadableProperty(obj: Object): Object;
    // private isArray(object: Object): boolean;
    // private isConcatSpreadable(el: Object): boolean;
    // private lastElementIndex(target: JSDynamicObject, length: number): number;
    toBoolean(target: Object): boolean;
}