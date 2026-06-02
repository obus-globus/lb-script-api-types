import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToUInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt32Node.d.ts'
import type { JSToUInt32NodeGen$ForeignObjectData } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt32NodeGen$ForeignObjectData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToUInt32NodeGen extends JSToUInt32Node {
    static create(): JSToUInt32Node;
    static create(paramunsignedRightShift: boolean, paramshiftValue: number): JSToUInt32Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(unsignedRightShift: boolean, shiftValue: number)
    // private foreignObject_cache: JSToUInt32NodeGen$ForeignObjectData;
    // private jSObject_toNumberNode_: JSToNumberNode;
    // private overloadedOperator_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private state_0_: number;
    // private string_stringToNumberNode_: JSStringToNumberNode;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
}