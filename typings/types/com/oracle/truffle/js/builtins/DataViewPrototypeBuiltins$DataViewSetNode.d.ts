import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedExactClassProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { DataViewPrototypeBuiltins$DataViewAccessNode } from '../../../../../com/oracle/truffle/js/builtins/DataViewPrototypeBuiltins$DataViewAccessNode.d.ts'
import type { DataViewPrototypeBuiltins$DataViewSetNode$SetBufferElementNode } from '../../../../../com/oracle/truffle/js/builtins/DataViewPrototypeBuiltins$DataViewSetNode$SetBufferElementNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetViewByteLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/GetViewByteLengthNode.d.ts'
import type { JSToBigIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode.d.ts'
import type { JSToBooleanNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSToDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToIndexNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIndexNode.d.ts'
import type { JSToInt32Node } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDataViewObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSDataViewObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DataViewPrototypeBuiltins$DataViewSetNode extends DataViewPrototypeBuiltins$DataViewAccessNode {
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
    // private toBigIntNode: JSToBigIntNode;
    // private toDoubleNode: JSToDoubleNode;
    // private toInt32Node: JSToInt32Node;
    doDataView(dataView: JSDataViewObject, byteOffset: Object, value: Object, littleEndian: Object, toIndexNode: JSToIndexNode, toBooleanNode: JSToBooleanNode, errorBranch: InlinedBranchProfile, bufferTypeProfile: InlinedExactClassProfile, getViewByteLengthNode: GetViewByteLengthNode, setBufferElement: DataViewPrototypeBuiltins$DataViewSetNode$SetBufferElementNode): Object;
    doIncompatibleReceiver(thisObj: Object, byteOffset: Object, value: Object, littleEndian: Object): JSDynamicObject;
}