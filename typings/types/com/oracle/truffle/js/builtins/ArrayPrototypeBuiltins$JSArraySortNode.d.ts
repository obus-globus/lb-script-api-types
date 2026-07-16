import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ArrayPrototypeBuiltins$AbstractArraySortNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$AbstractArraySortNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSArrayDeleteRangeNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSArrayDeleteRangeNode.d.ts'
import type { JSArrayToDenseObjectArrayNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSArrayToDenseObjectArrayNode.d.ts'
import type { DeletePropertyNode } from '../../../../../com/oracle/truffle/js/nodes/control/DeletePropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ImportValueNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArraySortNode extends ArrayPrototypeBuiltins$AbstractArraySortNode {
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
    // private deletePropertyNode: DeletePropertyNode;
    // private hasCompareFnBranch: BranchProfile;
    // private importValueNode: ImportValueNode;
    // private interopNode: InteropLibrary;
    // private isSparse: ConditionProfile;
    // private noCompareFnBranch: BranchProfile;
    // private delete(obj: Object, i: Object): void;
    // private deleteGenericElements(obj: Object, fromIndex: number, toIndex: number): void;
    // private foreignArrayToObjectArray(thisObj: Object, len: number): Object[];
    // private getComparator(thisObj: Object, compare: Object): (param0: Object, param1: Object) => number;
    // private getDefaultComparator(thisObj: Object): (param0: Object, param1: Object) => number;
    sort(thisObj: Object, comparefn: Object, isJSObject: InlinedConditionProfile, growProfile: InlinedBranchProfile): Object;
    // private sortAndWriteBack(array: Object[], thisObj: Object, comparefn: Object): void;
    sortArray(thisObj: JSArrayObject, compare: Object, arrayToObjectArrayNode: JSArrayToDenseObjectArrayNode, arrayDeleteRangeNode: JSArrayDeleteRangeNode): JSArrayObject;
    sortForeignObject(comparefn: Object, thisObj: Object): Object;
    // private sortJSObject(comparefn: Object, thisJSObj: JSObject, growProfile: InlinedBranchProfile): JSDynamicObject;
}