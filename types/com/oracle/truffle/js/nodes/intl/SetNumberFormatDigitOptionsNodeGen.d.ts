import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SetNumberFormatDigitOptionsNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/SetNumberFormatDigitOptionsNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSNumberFormat$BasicInternalState } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSNumberFormat$BasicInternalState.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SetNumberFormatDigitOptionsNodeGen extends SetNumberFormatDigitOptionsNode {
    static create(paramcontext: JSContext): SetNumberFormatDigitOptionsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    execute(arg0Value: JSNumberFormat$BasicInternalState, arg1Value: Object, arg2Value: number, arg3Value: number, arg4Value: boolean): Object;
}