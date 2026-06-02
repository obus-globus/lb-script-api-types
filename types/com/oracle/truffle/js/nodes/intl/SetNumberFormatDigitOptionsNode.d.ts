import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { DefaultNumberOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/DefaultNumberOptionNode.d.ts'
import type { GetNumberOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetNumberOptionNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSNumberFormat$BasicInternalState } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSNumberFormat$BasicInternalState.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class SetNumberFormatDigitOptionsNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): SetNumberFormatDigitOptionsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private errorBranch: BranchProfile;
    // private getMaxFracDigitsOption: PropertyGetNode;
    // private getMaxSignificantDigitsOption: PropertyGetNode;
    // private getMinFracDigitsOption: PropertyGetNode;
    // private getMinIntDigitsOption: GetNumberOptionNode;
    // private getMinSignificantDigitsOption: PropertyGetNode;
    // private getMnfdDNO: DefaultNumberOptionNode;
    // private getMnsdDNO: DefaultNumberOptionNode;
    // private getMxfdDNO: DefaultNumberOptionNode;
    // private getMxsdDNO: DefaultNumberOptionNode;
    // private getRoundingIncrementOption: GetNumberOptionNode;
    // private getRoundingModeOption: GetStringOptionNode;
    // private getRoundingPriorityOption: GetStringOptionNode;
    // private getTrailingZeroDisplayOption: GetStringOptionNode;
    execute(intlObj: JSNumberFormat$BasicInternalState, options: Object, mnfdDefault: number, mxfdDefault: number, compactNotation: boolean): Object;
    setNumberFormatDigitOptions(intlObj: JSNumberFormat$BasicInternalState, options: Object, mnfdDefault: number, mxfdDefaultParam: number, compactNotation: boolean): Object;
}