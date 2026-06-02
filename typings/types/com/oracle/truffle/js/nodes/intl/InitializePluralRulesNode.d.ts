import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CoerceOptionsToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/CoerceOptionsToObjectNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { JSToCanonicalizedLocaleListNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNode.d.ts'
import type { SetNumberFormatDigitOptionsNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/SetNumberFormatDigitOptionsNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSPluralRulesObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSPluralRulesObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InitializePluralRulesNode extends JavaScriptBaseNode {
    static createInitalizePluralRulesNode(paramcontext: JSContext): InitializePluralRulesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private coerceOptionsToObjectNode: CoerceOptionsToObjectNode;
    // private context: JSContext;
    // private errorBranch: BranchProfile;
    // private getLocaleMatcherOption: GetStringOptionNode;
    // private getNotationOption: GetStringOptionNode;
    // private getTypeOption: GetStringOptionNode;
    // private setNumberFormatDigitOptions: SetNumberFormatDigitOptionsNode;
    // private toCanonicalizedLocaleListNode: JSToCanonicalizedLocaleListNode;
    executeInit(collator: JSPluralRulesObject, locales: Object, options: Object): JSPluralRulesObject;
    initializePluralRules(pluralRulesObj: JSPluralRulesObject, localesArg: Object, optionsArg: Object): JSPluralRulesObject;
}