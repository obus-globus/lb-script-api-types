import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { GetStringOrBooleanOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOrBooleanOptionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetStringOrBooleanOptionNodeGen extends GetStringOrBooleanOptionNode {
    static create(paramcontext: JSContext, paramproperty: TruffleString, paramvalues: string[], paramtrueValue: Object, paramfalsyValue: Object, paramfallback: Object): GetStringOrBooleanOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, property: TruffleString, values: string[], trueValue: Object, falsyValue: Object, fallback: Object)
    // private state_0_: number;
    // private toBooleanNode__field1_: Node;
    // private toJavaStringNode_: TruffleString$ToJavaStringNode;
    // private toStringNode_: JSToStringNode;
    // private executeAndSpecialize(arg0Value: Object): Object;
    executeValue(arg0Value: Object): Object;
}