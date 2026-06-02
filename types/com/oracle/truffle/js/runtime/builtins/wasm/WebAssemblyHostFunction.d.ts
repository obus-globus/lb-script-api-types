import type { InteropLibrary } from '../../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { GetIteratorNode } from '../../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorNode.d.ts'
import type { IterableToListNode } from '../../../../../../../com/oracle/truffle/js/nodes/access/IterableToListNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ToJSValueNode } from '../../../../../../../com/oracle/truffle/js/nodes/wasm/ToJSValueNode.d.ts'
import type { ToWebAssemblyValueNode } from '../../../../../../../com/oracle/truffle/js/nodes/wasm/ToWebAssemblyValueNode.d.ts'
import type { WasmFunctionTypeInfo } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/WasmFunctionTypeInfo.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WebAssemblyHostFunction extends Object implements TruffleObject {
    static isExecutable(paramreceiver: WebAssemblyHostFunction): boolean;
    constructor(fn: Object, type: WasmFunctionTypeInfo)
    // private fn: Object;
    // private type: WasmFunctionTypeInfo;
    execute(args: Object[], node: Node, toWebAssemblyValueNode: ToWebAssemblyValueNode, toJSValueNode: ToJSValueNode, callNode: JSFunctionCallNode, errorBranch: InlinedBranchProfile, getIteratorNode: GetIteratorNode, iterableToListNode: IterableToListNode, self: InteropLibrary): Object;
}