import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ToJSValueNode } from '../../../../../../com/oracle/truffle/js/nodes/wasm/ToJSValueNode.d.ts'
import type { ToJSValueNodeGen$FallbackData } from '../../../../../../com/oracle/truffle/js/nodes/wasm/ToJSValueNodeGen$FallbackData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToJSValueNodeGen extends ToJSValueNode {
    static create(): ToJSValueNode;
    static getUncached(): ToJSValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private fallback_cache: ToJSValueNodeGen$FallbackData;
    // private state_0_: number;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Object): boolean;
}