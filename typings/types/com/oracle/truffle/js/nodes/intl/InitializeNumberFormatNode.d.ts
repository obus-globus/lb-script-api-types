import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CoerceOptionsToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/CoerceOptionsToObjectNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { GetStringOrBooleanOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOrBooleanOptionNode.d.ts'
import type { JSToCanonicalizedLocaleListNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNode.d.ts'
import type { SetNumberFormatDigitOptionsNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/SetNumberFormatDigitOptionsNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSNumberFormat$InternalState } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSNumberFormat$InternalState.d.ts'
import type { JSNumberFormatObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSNumberFormatObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InitializeNumberFormatNode extends JavaScriptBaseNode {
    static createInitalizeNumberFormatNode(paramcontext: JSContext): InitializeNumberFormatNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private coerceOptionsToObjectNode: CoerceOptionsToObjectNode;
    // private context: JSContext;
    // private errorBranch: BranchProfile;
    // private getCompactDisplayOption: GetStringOptionNode;
    // private getCurrencyDisplayOption: GetStringOptionNode;
    // private getCurrencyOption: GetStringOptionNode;
    // private getCurrencySignOption: GetStringOptionNode;
    // private getLocaleMatcherOption: GetStringOptionNode;
    // private getNotationOption: GetStringOptionNode;
    // private getNumberingSystemOption: GetStringOptionNode;
    // private getSignDisplayOption: GetStringOptionNode;
    // private getStyleOption: GetStringOptionNode;
    // private getUnitDisplayOption: GetStringOptionNode;
    // private getUnitOption: GetStringOptionNode;
    // private getUseGroupingOption: GetStringOrBooleanOptionNode;
    // private setNumberFormatDigitOptions: SetNumberFormatDigitOptionsNode;
    // private toCanonicalizedLocaleListNode: JSToCanonicalizedLocaleListNode;
    executeInit(numberFormatObj: JSNumberFormatObject, locales: Object, options: Object): JSNumberFormatObject;
    initializeNumberFormat(numberFormatObj: JSNumberFormatObject, localesArg: Object, optionsArg: Object): JSNumberFormatObject;
    // private setNumberFormatUnitOptions(state: JSNumberFormat$InternalState, options: Object): void;
}