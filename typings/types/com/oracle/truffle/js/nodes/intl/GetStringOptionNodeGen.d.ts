import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetStringOptionNodeGen extends GetStringOptionNode {
    static AUTO_ALWAYS_OPTION_VALUES: string[];
    static CASE_FIRST_OPTION_VALUES: string[];
    static HOUR_CYCLE_OPTION_VALUES: string[];
    static LOCALE_MATCHER_OPTION_VALUES: string[];
    static LONG_SHORT_NARROW_DIGITAL_OPTION_VALUES: string[];
    static LONG_SHORT_NARROW_OPTION_VALUES: string[];
    static NARROW_SHORT_LONG_OPTION_VALUES: string[];
    static create(paramcontext: JSContext, paramproperty: TruffleString, paramvalues: string[], paramfallback: string): GetStringOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, property: TruffleString, values: string[], fallback: string)
    // private state_0_: number;
    // private toJavaStringNode_: TruffleString$ToJavaStringNode;
    // private toStringNode_: JSToStringNode;
    // private executeAndSpecialize(arg0Value: Object): string;
    executeValue(arg0Value: Object): string;
}