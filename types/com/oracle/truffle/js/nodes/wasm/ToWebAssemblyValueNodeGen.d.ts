import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToBigIntNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { ToWebAssemblyValueNode } from '../../../../../../com/oracle/truffle/js/nodes/wasm/ToWebAssemblyValueNode.d.ts'
import type { WebAssemblyValueType } from '../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/WebAssemblyValueType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToWebAssemblyValueNodeGen extends ToWebAssemblyValueNode {
    static create(): ToWebAssemblyValueNode;
    static getUncached(): ToWebAssemblyValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private i32_toInt32Node_: JSToInt32Node;
    // private i64_toBigIntNode_: JSToBigIntNode;
    // private state_0_: number;
    // private toNumberNode: JSToNumberNode;
    execute(arg0Value: Object, arg1Value: WebAssemblyValueType): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: WebAssemblyValueType): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Object, arg1Value: WebAssemblyValueType): boolean;
}