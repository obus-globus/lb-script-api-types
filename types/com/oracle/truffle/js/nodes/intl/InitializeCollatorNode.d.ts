import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CoerceOptionsToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/CoerceOptionsToObjectNode.d.ts'
import type { GetBooleanOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetBooleanOptionNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { JSToCanonicalizedLocaleListNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSCollatorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSCollatorObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InitializeCollatorNode extends JavaScriptBaseNode {
    static createInitalizeCollatorNode(paramcontext: JSContext): InitializeCollatorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private coerceOptionsToObjectNode: CoerceOptionsToObjectNode;
    // private context: JSContext;
    // private errorBranch: BranchProfile;
    // private getCaseFirstOption: GetStringOptionNode;
    // private getCollationOption: GetStringOptionNode;
    // private getIgnorePunctuationOption: GetBooleanOptionNode;
    // private getLocaleMatcherOption: GetStringOptionNode;
    // private getNumericOption: GetBooleanOptionNode;
    // private getSensitivityOption: GetStringOptionNode;
    // private getUsageOption: GetStringOptionNode;
    // private toCanonicalizedLocaleListNode: JSToCanonicalizedLocaleListNode;
    executeInit(collator: JSCollatorObject, locales: Object, options: Object): JSCollatorObject;
    initializeCollator(collatorObj: JSCollatorObject, localesArg: Object, optionsArg: Object): JSCollatorObject;
}