import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CoerceOptionsToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/CoerceOptionsToObjectNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { JSToCanonicalizedLocaleListNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRelativeTimeFormatObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSRelativeTimeFormatObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InitializeRelativeTimeFormatNode extends JavaScriptBaseNode {
    static createInitalizeRelativeTimeFormatNode(paramcontext: JSContext): InitializeRelativeTimeFormatNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private coerceOptionsToObjectNode: CoerceOptionsToObjectNode;
    // private context: JSContext;
    // private errorBranch: BranchProfile;
    // private getLocaleMatcherOption: GetStringOptionNode;
    // private getNumberingSystemOption: GetStringOptionNode;
    // private getNumericOption: GetStringOptionNode;
    // private getStyleOption: GetStringOptionNode;
    // private toCanonicalizedLocaleListNode: JSToCanonicalizedLocaleListNode;
    executeInit(relativeTimeFormatObj: JSRelativeTimeFormatObject, locales: Object, options: Object): JSRelativeTimeFormatObject;
    initializeRelativeTimeFormat(relativeTimeFormatObj: JSRelativeTimeFormatObject, localesArg: Object, optionsArg: Object): JSRelativeTimeFormatObject;
}